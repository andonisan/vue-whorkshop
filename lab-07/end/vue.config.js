module.exports = {
  lintOnSave: false,
  outputDir: '../wwwroot',
  productionSourceMap: true,
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/styles/index.scss";',
      },
    },
  },
};
