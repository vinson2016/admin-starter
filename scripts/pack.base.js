const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

/**
 * webpack 配置
 * https://webpack.js.org/configuration/#options
 */
const baseConfig = {
    target: 'web',

    entry: path.join(__dirname, '../app/index.js'),

    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].js'
    },

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
        })
    ]
};

module.exports = baseConfig;
