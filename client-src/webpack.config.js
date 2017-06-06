const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const SRC = path.join(__dirname, 'client-src/');
const images = path.join(__dirname, 'client-src/', 'image/');
const fonts = path.join(__dirname, 'client-src/', 'fonts/');
const NODE_MODULES = path.join(__dirname, 'node_modules/');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

const definePlugin = new webpack.DefinePlugin({
    PROD: JSON.stringify(JSON.parse(process.env.PROD || 'false'))
});

const config = {
    entry: {
      index: './app/index.js'
    },
    output: {                     // output folder
        path: './dist',           // folder path
        filename: '[name].js',    // file names
        chunkFilename: '[name].js',
        publicPath: './dist/'
    },
    module: {
        rules: [
            {
                test: [/\.js$/,/\.jsx$/],
                exclude: [/node_modules/, /Person/, /Career/, /Tech/],
                loader: 'babel-loader',
                options: {
                    cacheDirectory: 'babel-cache',
                    presets: [ "es2015" ],
                    plugins: [ "transform-runtime" ]
                }
            },
            {
              test: /\.jsx$/,
              include: path.resolve(__dirname, 'app', 'Person'),
              use: ['bundle-loader?lazy&name=person', 'babel-loader']
            },
            {
                test: /\.jsx$/,
                include: path.resolve(__dirname, 'app', 'Career'),
                use: ['bundle-loader?lazy&name=career', 'babel-loader']
            },
            {
                test: /\.jsx$/,
                include: path.resolve(__dirname, 'app', 'Tech'),
                use: ['bundle-loader?lazy&name=tech', 'babel-loader']
            },
            {
                test: /\.jsx$/,
                include: path.resolve(__dirname, 'app', 'Projects'),
                use: ['bundle-loader?lazy&name=projects', 'babel-loader']
            },
            {
                test: /\.(jpg|png)$/,
                loader: "url-loader?limit=2",
                include: images
            },
            {
                test: /\.(ttf$|woff)$/,
                loader: "url-loader",
                include: fonts
            }
        ]
    },
    plugins: [
        definePlugin,
        //new webpack.optimize.CommonsChunkPlugin('common.js'),
        new WebpackShellPlugin({onBuildStart:['echo "Webpack Start"'], onBuildEnd:['echo "Webpack End"']}),
        new CleanWebpackPlugin(['dist'], {root: __dirname}),
        new CopyWebpackPlugin([
            { from: './app/images/favicons', to: 'images/favicons' }
            ])
    ],
    watchOptions: {
        poll: 500
    }
};

if (process.env.PROD === '1') {
    console.log('Load image from a fictous CDN');
    //config.output.publicPath = 'http://cdn/'
    config.output.publicPath = './dist/'
}

module.exports = config;
