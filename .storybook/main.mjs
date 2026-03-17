import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const cljsOutDir = resolve(__dirname, "cljs-out");

/**
 * Vite plugin that bundles shadow-cljs ESM output into a single module via
 * esbuild.  Without this, Vite serves each cljs-runtime/*.js file individually
 * with per-file cache-busting timestamps, which causes the Closure Library's
 * goog.module() to be invoked more than once for the same namespace.
 */
function cljsBundlePlugin() {
  const VIRTUAL_ID = "\0cljs-stories";

  return {
    name: "vite-plugin-cljs-bundle",
    enforce: "pre",

    resolveId(source) {
      if (source === "cljs-out/stories.js" || source === "cljs-out/stories") {
        return VIRTUAL_ID;
      }
    },

    async load(id) {
      if (id !== VIRTUAL_ID) return;
      const { build } = await import("esbuild");
      const result = await build({
        entryPoints: [resolve(cljsOutDir, "stories.js")],
        bundle: true,
        format: "esm",
        write: false,
        platform: "browser",
        external: ["react", "react/jsx-runtime", "react-dom"],
        logLevel: "warning",
        // ClojureScript runtime uses eval in generated core helpers; keep
        // warning output clean while preserving bundling behavior.
        logOverride: {
          "direct-eval": "silent",
        },
        plugins: [
          {
            // shadow-cljs bundles npm packages (React, etc.) as internal
            // modules (module$node_modules$react$...).  esbuild's `external`
            // can't catch these because they aren't bare specifiers.  This
            // plugin intercepts those files at load time and replaces them
            // with re-exports from the bare package name so that esbuild
            // externalizes them and the app shares Storybook's React instance.
            name: "shadow-cljs-externalize-react",
            setup(b) {
              b.onLoad(
                { filter: /module\$node_modules\$react\$index\.js$/ },
                () => ({
                  contents:
                    'import React from "react"; shadow$provide.module$node_modules$react$index = function(require, module) { module.exports = React; };',
                  loader: "js",
                }),
              );
              b.onLoad(
                { filter: /module\$node_modules\$react\$jsx_runtime\.js$/ },
                () => ({
                  contents:
                    'import JSXRuntime from "react/jsx-runtime"; shadow$provide.module$node_modules$react$jsx_runtime = function(require, module) { module.exports = JSXRuntime; };',
                  loader: "js",
                }),
              );
              // The CJS development bundles are no longer needed — skip them
              // so they don't add dead React code to the output.
              b.onLoad(
                {
                  filter: /module\$node_modules\$react\$cjs\$react[_a-z]*\.js$/,
                },
                () => ({ contents: "", loader: "js" }),
              );
            },
          },
        ],
      });
      return result.outputFiles[0].text;
    },

    configureServer(server) {
      server.watcher.add(cljsOutDir);
    },

    handleHotUpdate({ file, server }) {
      if (!file.startsWith(cljsOutDir)) return;
      const mod = server.moduleGraph.getModuleById(VIRTUAL_ID);
      if (mod) server.moduleGraph.invalidateModule(mod);
      server.hot.send({ type: "full-reload" });
      return [];
    },
  };
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../storybook-src/stories/**/*.stories.@(js|jsx)"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(cljsBundlePlugin());
    return config;
  },
};
export default config;
