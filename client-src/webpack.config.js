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
    resolve: {
        root: [SRC, NODE_MODULES],  // root folders for Webpack resolving, so we can now call require('greet')
        alias: {
            'actions': path.join(SRC, 'actions/'), // sample alias, calling require('actions/file') will resolve to ./src/actions/file.js
        }
    },
    module: {
        // preLoaders: [
        //     {
        //         test: [/\.js$/,/\.jsx$/],
        //         loader: "eslint-loader",
        //         exclude: /node_modules/
        //     }
        //  ],
        loaders: [
            {
                test: [/\.js$/,/\.jsx$/],
                exclude: [/node_modules/, /Person/, /Career/, /Tech/],
                loader: 'babel',
                query: {
                    cacheDirectory: 'babel-cache',
                    presets: [ "es2015" ],
                    plugins: [ "transform-runtime" ]
                }
            },
            {
              test: /\.jsx$/,
              include: path.resolve(__dirname, 'frontend', 'Person'),
              loaders: ['bundle?lazy&name=person', 'babel']
            },
            {
                test: /\.jsx$/,
                include: path.resolve(__dirname, 'frontend', 'Career'),
                loaders: ['bundle?lazy&name=career', 'babel']
            },
            {
                test: /\.jsx$/,
                include: path.resolve(__dirname, 'frontend', 'Tech'),
                loaders: ['bundle?lazy&name=tech', 'babel']
            },
            {
                test: /\.jsx$/,
                include: path.resolve(__dirname, 'frontend', 'Projects'),
                loaders: ['bundle?lazy&name=projects', 'babel']
            },
            {
                test: /\.styl$/,
                loader:  ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader"),
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png)$/,
                loader: "url?limit=2",
                include: images
            },
            {
                test: /\.(ttf$|woff)$/,
                loader: "url",
                include: fonts
            }
        ]
    },
    plugins: [
        definePlugin,
        //new webpack.optimize.CommonsChunkPlugin('common.js'),
        new WebpackShellPlugin({onBuildStart:['echo "Webpack Start"'], onBuildEnd:['echo "Webpack End"']}),
        new CleanWebpackPlugin(['dist'], {root: __dirname}),
        new ExtractTextPlugin("style.css", {allChunks: false}),
        new CopyWebpackPlugin([
            { from: './frontend/images/favicons', to: 'images/favicons' }
            ])

    ],
    eslint: {
        configFile: '.eslintrc'
    },
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
