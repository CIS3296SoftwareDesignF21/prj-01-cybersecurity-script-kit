// @ts-nocheck

const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: './UI/Main.ts',
    target: 'electron-renderer',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin({})],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'Server/static/js'),
    },
    // set to 'production' when building for production
    mode: 'production', // set to development when debugging
    devtool: 'source-map',
};
