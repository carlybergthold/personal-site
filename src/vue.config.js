module.exports = {
   runtimeCompiler: true,
    css: {
      loaderOptions: {
        scss: {
          additionalData: `@import "~@/styles/_variables.scss"`
        }
      }
    }
};