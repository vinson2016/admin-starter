const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

/**
 * webpack 配置
 * https://webpack.js.org/configuration/#options
 */
const devConfig = {
    /**
     * 模式
     * https://webpack.js.org/concepts/mode/
     */
    mode: 'development',

    /**
     * 目标环境
     * https://webpack.js.org/configuration/target/#target
     */
    target: 'web',

    /**
     * 程序的入口
     * https://webpack.js.org/configuration/entry-context/#entry
     */
    entry: path.join(__dirname, '../app/index.js'),

    /**
     * 输出配置
     */
    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].js'
    },

    /**
     * 调试工具
     * https://webpack.js.org/configuration/devtool/
     */
    devtool: 'inline-source-map',

    /**
     * 开发服务配置
     * https://webpack.js.org/configuration/dev-server/
     */
    devServer: {
        host: 'localhost',
        port: '8088'
    },

    /**
     * 模块
     * https://webpack.js.org/configuration/module/
     */
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: [
                    path.join(__dirname, '../app')
                ],
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(bmp|gif|jpg|jpeg|png|svg)$/,
                exclude: /node_modules/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2|svg)$/,
                exclude: /node_modules/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './app/index.html',
            filename: './index.html'
        }),
    ]
};

module.exports = devConfig;
