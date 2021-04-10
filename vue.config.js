const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  publicPath: './',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('RelaxPlus', path.resolve('relax-plus'))
      .set('@', path.resolve('examples'))

    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader-v16')
      .loader('vue-loader-v16')
      .options({
        compiler: require('@vue/compiler-sfc'),
      })
      .end()
      .use(path.resolve('relax-plus/config/md-loader/index.js'))
      .loader(path.resolve('relax-plus/config/md-loader/index.js'))
  },
}
