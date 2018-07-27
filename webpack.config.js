const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                loader: 'style-loader!css-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.jsx/,
                loader: 'babel-loader',
                include: APP_DIR,
                exclude: '/node_modules/',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'React Drawer',
        template: APP_DIR + '/index.html'
    })],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000
    }
}