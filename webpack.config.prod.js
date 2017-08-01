const webpack = require('webpack');
const { CommonsChunkPlugin } = require('webpack').optimize;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS =[
    '@angular/animations', '@angular/common', '@angular/compiler', '@angular/core', '@angular/forms',
    '@angular/http', '@angular/platform-browser', '@angular/platform-browser-dynamic', '@angular/router', 'core-js', 
    'es6-shim', 'platypus','platypusui', 'reflect-metadata','rxjs', 'zone.js'
]

module.exports = {
    devtool: 'source-map',
    "resolve": {
    "extensions": [
      ".ts",
      ".js"
    ],
    "modules": [
      "./node_modules",
      "./node_modules"
    ],
    "symlinks": true
    },
    entry: {
       main:"./src/main.ts",
       polyfills:"./src/polyfills.ts",
       vendor: VENDOR_LIBS
    },
    target: 'web',
    output: {
        path: `${__dirname}/public/dist/`,
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({ minimize: true, mangle: false, sourcemap: false }),
        new CommonsChunkPlugin({
        "name": [
            "inline"
        ],
        "minChunks": null
    }),
    ],
    module:{
        rules: [
            {
        "enforce": "pre",
        "test": /\.js$/,
        "loader": "source-map-loader",
        "exclude": [
          /\/node_modules\//
        ]
        }, {
        "test": /\.json$/,
        "loader": "json-loader"
        }, {
            test: /\.html$/,
            use: [{
                loader: 'raw-loader'
            }],
        }, {
            test: /\.ts$/, 
            use: [{
                loader: 'ts-loader'
            }]
        }]
    }
}