const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: true
        }),
        new webpack.HotModuleReplacementPlugin(),
         new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new AotPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: helpers.root('./src/views/lib/app.module.ts#AppModule')
        }),
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),
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