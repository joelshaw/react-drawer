const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, './dist');
const APP_DIR = path.resolve(__dirname, './src');

module.exports = {
    mode: 'development',
    entry: APP_DIR + '/main.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                loader: 'css-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.jsx/,
                loader: 'babel-loader',
                include: APP_DIR,
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000
    }
}