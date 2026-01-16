module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "identitas",
        appId: "com.educarpersonas",
        publish: ["github"]
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/variables.scss";
        `
      }
    }
  }
};
