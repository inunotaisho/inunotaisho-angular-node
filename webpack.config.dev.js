const fs = require('fs');
const path = require('path');
const projectRoot = process.cwd();
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const { HotModuleReplacementPlugin, ProvidePlugin, DefinePlugin, NoEmitOnErrorsPlugin, SourceMapDevToolPlugin, NamedModulesPlugin } = require('webpack');

const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

const nodeModules = path.join(projectRoot, 'node_modules');
 
 module.exports = {
    mode: 'development',
    devtool: "source-map",
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
        main: [
            "./src/main.ts",
            "./node_modules/jquery/dist/jquery.slim.min.js",
            "./node_modules/froala-editor/js/froala_editor.pkgd.min.js",
                ],
        polyfills: [
            "./src/polyfills.ts"
        ]
    },
    target: 'web',
      output: {
        path: `${__dirname}/public/dist/`,
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
     },
    module:{ 
        rules: [{
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader",
            exclude: [
                /\/node_modules\//
                ]
            },{
            test: /\.json$/,
            loader: "json-loader"
            },{
            test: /\.html$/,
            use: [{
                    loader: 'raw-loader'
                }],
            }, {
            test: /\.ts$/,       
            loader: '@ngtools/webpack'    
            }]
    },
    plugins:[
        new ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        }),
        new NoEmitOnErrorsPlugin(),
        new ProgressPlugin(),
        new CircularDependencyPlugin({
            exclude: /(\\|\/)node_modules(\\|\/)/,
            failOnError: false,
            onDetected: false,
            cwd: projectRoot
          }),
        new DefinePlugin({
             'process.env.NODE_ENV': JSON.stringify('development'),
              __DEV__: true
          }),
        new HotModuleReplacementPlugin(),
       
        new SourceMapDevToolPlugin({
            filename: "[file].map[query]",
            moduleFilenameTemplate: "[resource-path]",
            fallbackModuleFilenameTemplate: "[resource-path]?[hash]",
            sourceRoot: "webpack:///"
        }),
        new NamedModulesPlugin({}),
        new AngularCompilerPlugin({
            mainPath:"main.ts",
            hostReplacementPaths: {
                "environments/environment.ts": "environments/environment.ts"
            },
            tsConfigPath: './src/tsconfig.app.json',
            skipCodeGeneration: true,
            sourceMap: true
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
}
