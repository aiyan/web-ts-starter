const path = require('path');
const vite = require('vite');

module.exports = vite.defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
});
