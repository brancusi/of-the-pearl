#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const STORIES_REGISTRY_PATH = path.join(
  ROOT,
  "storybook-src/otp/storybook/stories.cljs",
);
const SHADOW_CONFIG_PATH = path.join(ROOT, "shadow-cljs.edn");
const STORIES_DIR = path.join(ROOT, "storybook-src/stories");

function parseArgs(argv) {
  const args = {
    category: "UI",
    extension: "js",
    dryRun: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--component") {
      args.component = argv[i + 1];
      i += 1;
      continue;
    }
    if (token === "--title") {
      args.title = argv[i + 1];
      i += 1;
      continue;
    }
    if (token === "--category") {
      args.category = argv[i + 1];
      i += 1;
      continue;
    }
    if (token === "--story-file") {
      args.storyFile = argv[i + 1];
      i += 1;
      continue;
    }
    if (token === "--extension") {
      args.extension = argv[i + 1];
      i += 1;
      continue;
    }
    if (token === "--dry-run") {
      args.dryRun = true;
      continue;
    }
    if (token === "--help" || token === "-h") {
      args.help = true;
      continue;
    }
  }

  return args;
}

function usage() {
  return [
    "Usage:",
    "  npm run storybook:create -- --component <namespace/component-var> [options]",
    "",
    "Required:",
    "  --component   Clojure var path, example: otp.ui.button/main-button",
    "",
    "Options:",
    "  --title       Story title, example: UI/Button",
    "  --category    Story title category prefix (default: UI)",
    "  --story-file  Story filename, example: Button.stories.js",
    "  --extension   Story file extension: js or jsx (default: js)",
    "  --dry-run     Print intended changes without writing files",
  ].join("\n");
}

function toPascalCase(kebab) {
  return kebab
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function parseComponent(componentArg) {
  const pieces = componentArg.split("/");
  if (pieces.length !== 2 || !pieces[0] || !pieces[1]) {
    throw new Error(
      "--component must be in namespace/var format, e.g. otp.ui.button/main-button",
    );
  }

  const namespace = pieces[0];
  const varName = pieces[1];
  const exportName = toPascalCase(varName);
  const alias = namespace.split(".").pop().replace(/-/g, "_");

  return { namespace, varName, exportName, alias };
}

function findMatchingBrace(text, openIndex) {
  let depth = 0;
  for (let i = openIndex; i < text.length; i += 1) {
    const char = text[i];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function updateStoriesRegistry(text, componentMeta) {
  const { namespace, varName, exportName, alias } = componentMeta;
  const requireLine = `   [${namespace} :as ${alias}]`;
  const exportLine = `(def ^:export ${exportName}`;

  if (text.includes(exportLine)) {
    throw new Error(
      `Export ${exportName} already exists in storybook-src/otp/storybook/stories.cljs`,
    );
  }

  let updated = text;

  if (!updated.includes(requireLine)) {
    const requireClose = updated.indexOf("]))");
    if (requireClose === -1) {
      throw new Error(
        "Could not find :require block close in stories registry",
      );
    }
    updated =
      updated.slice(0, requireClose) +
      `\n${requireLine}` +
      updated.slice(requireClose);
  }

  const exportBlock = [
    "",
    `(def ^:export ${exportName}`,
    `  (adapter/wrap-component ${alias}/${varName}))`,
    "",
  ].join("\n");

  updated += exportBlock;
  return updated;
}

function updateShadowExports(text, exportName) {
  const anchor = ":exports {";
  const exportsStart = text.indexOf(anchor);
  if (exportsStart === -1) {
    throw new Error("Could not find :exports map in shadow-cljs.edn");
  }

  const braceStart = text.indexOf("{", exportsStart);
  const braceEnd = findMatchingBrace(text, braceStart);
  if (braceEnd === -1) {
    throw new Error("Could not locate end of :exports map in shadow-cljs.edn");
  }

  const exportsBlock = text.slice(braceStart, braceEnd + 1);
  if (
    exportsBlock.includes(`${exportName} otp.storybook.stories/${exportName}`)
  ) {
    throw new Error(`Export ${exportName} already exists in shadow-cljs.edn`);
  }

  const insertion = `\n                                            ${exportName} otp.storybook.stories/${exportName}`;
  return text.slice(0, braceEnd) + insertion + text.slice(braceEnd);
}

function buildStoryTemplate({ exportName, title }) {
  return [
    `import { ${exportName} } from "cljs-out/stories.js";`,
    "",
    "export default {",
    `  title: "${title}",`,
    `  component: ${exportName},`,
    "  argTypes: {},",
    "};",
    "",
    "export const Default = {",
    "  args: {},",
    "};",
    "",
  ].join("\n");
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log(usage());
    process.exit(0);
  }

  if (!args.component) {
    console.error("Missing required --component argument\n");
    console.error(usage());
    process.exit(1);
  }

  const componentMeta = parseComponent(args.component);
  if (!["js", "jsx"].includes(args.extension)) {
    throw new Error("--extension must be either js or jsx");
  }

  const title = args.title || `${args.category}/${componentMeta.exportName}`;
  const storyFilename =
    args.storyFile || `${componentMeta.exportName}.stories.${args.extension}`;
  const storyFilePath = path.join(STORIES_DIR, storyFilename);

  if (fs.existsSync(storyFilePath)) {
    throw new Error(
      `Story file already exists: ${path.relative(ROOT, storyFilePath)}`,
    );
  }

  const storiesRegistry = fs.readFileSync(STORIES_REGISTRY_PATH, "utf8");
  const shadowConfig = fs.readFileSync(SHADOW_CONFIG_PATH, "utf8");

  const nextStoriesRegistry = updateStoriesRegistry(
    storiesRegistry,
    componentMeta,
  );
  const nextShadowConfig = updateShadowExports(
    shadowConfig,
    componentMeta.exportName,
  );
  const storyTemplate = buildStoryTemplate({
    exportName: componentMeta.exportName,
    title,
  });

  if (args.dryRun) {
    console.log(
      "[dry-run] Would update storybook-src/otp/storybook/stories.cljs",
    );
    console.log("[dry-run] Would update shadow-cljs.edn");
    console.log(`[dry-run] Would create ${path.relative(ROOT, storyFilePath)}`);
    return;
  }

  fs.writeFileSync(STORIES_REGISTRY_PATH, nextStoriesRegistry, "utf8");
  fs.writeFileSync(SHADOW_CONFIG_PATH, nextShadowConfig, "utf8");
  fs.writeFileSync(storyFilePath, storyTemplate, "utf8");

  console.log("Created Storybook scaffold:");
  console.log(
    `- storybook-src/otp/storybook/stories.cljs (+ ${componentMeta.exportName})`,
  );
  console.log(`- shadow-cljs.edn (:exports + ${componentMeta.exportName})`);
  console.log(`- ${path.relative(ROOT, storyFilePath)}`);
  console.log(
    "\nNext: fill argTypes/args in the new story file and run: npm run shadow-storybook:dev",
  );
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
