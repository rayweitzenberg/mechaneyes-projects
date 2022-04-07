const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  base: "/mechaneyes-projects/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        breaks: resolve(__dirname, "projects/breaks/index.html"),
        loops: resolve(__dirname, "projects/loops/index.html"),
        formalism: resolve(__dirname, "projects/formalism/index.html"),
        gossamer: resolve(__dirname, "projects/gossamer/index.html"),
        monolyth: resolve(__dirname, "projects/monolyth/index.html"),
        munari: resolve(__dirname, "projects/munari/index.html"),
        objects: resolve(__dirname, "projects/objects/index.html"),
        soundnoir: resolve(__dirname, "projects/soundnoir/index.html"),
        stereoh: resolve(__dirname, "projects/stereoh/index.html"),
        whirligrid: resolve(__dirname, "projects/whirligrid/index.html"),
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: "internal:charset-removal",
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === "charset") {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  },
});
