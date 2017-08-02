const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const { CommonsChunkPlugin } = require('webpack').optimize;

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
      "./node_modules",
      "./node_modules"
    ],
    symlinks: true
    },
    resolveLoader: {
        modules: [
        "./node_modules",
        "./node_modules"
        ]
    },
    entry: {
       main:"./src/main.ts",
       polyfills:"./src/polyfills.ts"
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
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, './src')
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