const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/main.ts'
    ],
    target: 'web',
    output: {
        path: `${__dirname}/public/dist/`,
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            angular: "angular",
            platypusui: 'platypusui'
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module:{
        rules: [{
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