module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import '@/assets/scss/_variables.scss';
          @import '@/assets/scss/_functions.scss';
          @import '@/assets/scss/_mixin.scss';
        `
      }
    }
  }
};