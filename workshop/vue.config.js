module.exports = {
  lintOnSave: false,
  outputDir: '../wwwroot',
  productionSourceMap: true,
  css: {
    loaderOptions: {
      scss: {
        data: '@import "@/style/settings/__index.scss";',
      },
    },
  },
};
