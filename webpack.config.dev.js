const fs = require('fs');
const path = require('path');
const projectRoot = process.cwd();
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const { HotModuleReplacementPlugin, ProvidePlugin, DefinePlugin, NoEmitOnErrorsPlugin, SourceMapDevToolPlugin, NamedModulesPlugin } = require('webpack');
const { UglifyJsPlugin, CommonsChunkPlugin } = require('webpack').optimize;
const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

const nodeModules = path.join(projectRoot, 'node_modules');
const realNodeModules = fs.realpathSync(nodeModules);
const genDirNodeModules = path.join(projectRoot, 'src','$$_gendir','node_modules');
const entryPoints = ["inline","polyfills","sw-register","vendor","main"];
 
 module.exports = {
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

        new SourceMapDevToolPlugin({
            filename: "[file].map[query]",
            moduleFilenameTemplate: "[resource-path]",
            fallbackModuleFilenameTemplate: "[resource-path]?[hash]",
            sourceRoot: "webpack:///"
        }),
        new NamedModulesPlugin({}),
        new AotPlugin({
            mainPath:"main.ts",
            hostReplacementPaths: {
                "environments/environment.ts": "environments/environment.ts"
            },
            tsConfigPath: './src/tsconfig.app.json',
            skipCodeGeneration: true,
            sourceMap: true
        })
    ]
}
