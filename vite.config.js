const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "projects/index.html"),
        about: resolve(__dirname, "projects/about.html"),
        breaks: resolve(__dirname, "projects/breaks.html"),
        formalism: resolve(__dirname, "projects/formalism.html"),
        gossamer: resolve(__dirname, "projects/gossamer.html"),
        loops: resolve(__dirname, "projects/loops.html"),
        mechaneyes: resolve(__dirname, "projects/mechaneyes.html"),
        monolyth: resolve(__dirname, "projects/monolyth.html"),
        munari: resolve(__dirname, "projects/munari.html"),
        objects: resolve(__dirname, "projects/objects.html"),
        soido: resolve(__dirname, "projects/soido.html"),
        soundnoir: resolve(__dirname, "projects/soundnoir.html"),
        stereoh: resolve(__dirname, "projects/stereoh.html"),
        whirligrid: resolve(__dirname, "projects/whirligrid.html"),
      },
    },
    chunkSizeWarningLimit: 1000,
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
