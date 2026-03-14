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
  stories: ["../dev-src/stories/**/*.stories.@(js|jsx)"],
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
