const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  chainWebpack: (config) =>   {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-loader-v16')
      .loader('vue-loader-v16')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
    if (isProduction) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(WebpackBundleAnalyzer.BundleAnalyzerPlugin)
        .init(Plugin => new Plugin({
        }))
    }
  },
};

