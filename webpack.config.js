const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js*$/,
                use: 'babel-loader',
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, "./src"),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        open: true,
        hot: true,
        port: 9000,
        compress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'source-map',
};