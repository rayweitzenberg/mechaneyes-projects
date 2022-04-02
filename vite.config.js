const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        betterbreaks: resolve(__dirname, 'better-breaks/index.html'),
        loops: resolve(__dirname, 'loops/index.html'),
        monolyth: resolve(__dirname, 'monolyth/index.html'),
        munariveil: resolve(__dirname, 'munari-veil/index.html'),
        objects: resolve(__dirname, 'objects/index.html'),
        soundnoir: resolve(__dirname, 'sound-noir/index.html'),
        stereoh: resolve(__dirname, 'stereoh/index.html'),
        whirligrid: resolve(__dirname, 'whirligrid/index.html'),
      }
    }
  }
})