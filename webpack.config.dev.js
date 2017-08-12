const webpack = require('webpack');
const { GlobCopyWebpackPlugin, BaseHrefWebpackPlugin } = require('@angular/cli/plugins/webpack');
const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CommonsChunkPlugin } = require('webpack').optimize;
const { AotPlugin } = require('@ngtools/webpack');

const helpers = require('./webpack-config/helpers');

const nodeModules = path.join(process.cwd(), 'node_modules');
const realNodeModules = fs.realpathSync(nodeModules);
const genDirNodeModules = path.join(process.cwd(), 'src','$$_gendir','node_modules');
const entryPoints = ["inline","polyfills","sw-register","vendor","main"];

module.exports = {

    devtool: 'source-map',
    resolve: {
    extensions: [
      ".ts",
      ".js"
    ],
    modules: [
      "./node_modules"
    ],
    symlinks: true
    },
    resolveLoader: {
        modules: [
        "./node_modules"
        ]
    },
    entry: {
       main:"./src/main.ts",
       polyfills: './src/polyfills.ts'
    },
    target: 'web',
    output: {
        path: `${__dirname}/public/dist/`,
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: true
        }),
        new BaseHrefWebpackPlugin({}),
        // new webpack.optimize.UglifyJsPlugin({
        //     minimize: true
        // }),,
         new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        }),
        new AotPlugin({
            mainPath:"main.ts",
            tsConfigPath: 'src/tsconfig.src.json',
            entryModule: helpers.root('./src/views/lib/app.module.ts#AppModule'),
            skipCodeGeneration: true
        }),
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            // location of your src
            helpers.root('./src'),
            // a map of your routes
            {}
        ),
        new HtmlWebpackPlugin({
            template: './src/index.ejs',
            hash:false,
            inject:true,
            compile:true,
            favicon: false,
            minify:false,
            cache:true,
            showErrors: true,
            chunks:'all',
            xhtml: true,
            chunksSortMode: function sort(left, right) {
            let leftIndex = entryPoints.indexOf(left.names[0]);
            let rightindex = entryPoints.indexOf(right.names[0]);
                if (leftIndex > rightindex) {
                    return 1;
                }   
                else if (leftIndex < rightindex) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
        }),
        new CommonsChunkPlugin({
            minChunks: 2,
            async: "common"
            }),
        new CommonsChunkPlugin({
        name: [
            "inline"
            ],
            "minChunks": null
        }),
        new CommonsChunkPlugin({
            name: [
                "vendor"
            ],
            minChunks: (module) => {
                        return module.resource
                            && (module.resource.startsWith(nodeModules)
                                || module.resource.startsWith(genDirNodeModules)
                                || module.resource.startsWith(realNodeModules));
                    },
            chunks: [
                "main"
            ]
        }),
    ],
    module:{
        rules: [
            {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader",
            exclude: [
                /\/node_modules\//
            ]
        }, {
            test: /\.json$/,
            loader: "json-loader"
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