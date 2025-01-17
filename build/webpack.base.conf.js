'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vuxLoader = require('vux-loader')
const vueLoaderConfig = require('./vue-loader.conf')
const webpack = require("webpack")

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

/*console.log("********webpack.base.conf.js*******");
const entries =  utils.getMultiEntry('./src/components/!*!/!*.js'); // 获得入口js文件
console.log(entries);*/

let webpackConfig = {
    context: path.resolve(__dirname, '../'),
    entry:  utils.entries(),
    /*entry: {
     app: ['babel-polyfill', './src/main.js']
     },*/
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.less', '.css', '.scss'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                exclude: [
                    path.resolve(__dirname, '../src/assets/icons'),
                ],
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.svg$/,
                include: [
                    path.resolve(__dirname, '../src/assets/icons'),
                ],
                loader: 'svg-sprite-loader',
                options: {
                    symbolId: 'icon-[name]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common'),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ]
}

module.exports = vuxLoader.merge(webpackConfig, {
    plugins: ['vux-ui', 'duplicate-style']
})

