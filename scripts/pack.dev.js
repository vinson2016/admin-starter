const merge = require('webpack-merge');
const baseConfig = require('./pack.base');

const devConfig = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: '8088'
    }
});

module.exports = devConfig;
