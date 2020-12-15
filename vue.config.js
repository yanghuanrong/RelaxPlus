const path = require('path')

module.exports = {
    // 扩展 webpack 配置
    publicPath: './',
    chainWebpack: config => {
        
        config.resolve.alias
            .set('@RelaxPlus', path.resolve('relax-plus'))

        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader-v16')
                .loader('vue-loader-v16')
                .options({
                    compiler: require('@vue/compiler-sfc')
                })
            .end()
            .use(path.resolve('relax-plus/config/md-loader/index.js'))
            .loader(path.resolve('relax-plus/config/md-loader/index.js'))
            
    }
} 