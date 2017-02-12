var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var SRC = path.join(__dirname, 'client-src/');
var images = path.join(__dirname, 'client-src/', 'image/');
var fonts = path.join(__dirname, 'client-src/', 'fonts/');
var NODE_MODULES = path.join(__dirname, 'node_modules/');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

var definePlugin = new webpack.DefinePlugin({
    PROD: JSON.stringify(JSON.parse(process.env.PROD || 'false'))
});

var config = {
    entry: {
      frontpage: './frontend/frontpage.js'
    },
    output: {                     // output folder
        path: './dist',           // folder path
        filename: '[name].js',    // file names
        chunkFilename: '[name].js',
        publicPath: './dist/'
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     enforce: "pre",
            //     loader: "eslint-loader"
            // },
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
              include: path.resolve(__dirname, 'frontend', 'Person'),
              use: ['bundle-loader?lazy&name=person', 'babel-loader']
            },
            {
                test: /\.jsx$/,
                include: path.resolve(__dirname, 'frontend', 'Career'),
                use: ['bundle-loader?lazy&name=career', 'babel-loader']
            },
            {
                test: /\.jsx$/,
                include: path.resolve(__dirname, 'frontend', 'Tech'),
                use: ['bundle-loader?lazy&name=tech', 'babel-loader']
            },
            {
                test: /\.jsx$/,
                include: path.resolve(__dirname, 'frontend', 'Projects'),
                use: ['bundle-loader?lazy&name=projects', 'babel-loader']
            },
            {
                test: /\.styl$/,
                use:  ['style-loader','css-loader','stylus-loader'],
                exclude: /node_modules/
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
            { from: './frontend/images/favicons', to: 'images/favicons' }
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
