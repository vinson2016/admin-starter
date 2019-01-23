const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const buildConfig = {
    mode: 'production',
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
                exclude: /node_modules/,
                include: [
                    path.join(__dirname, '../app')
                ],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
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
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
            chunkFilename: '[id].css'
        })
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    ecma: 6,
                    compress: true,
                    output: {
                        comments: false,
                        beautify: false
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
};

module.exports = buildConfig;
