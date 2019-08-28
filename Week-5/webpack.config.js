const path = require('path');
require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: ['babel-polyfill', './scripts/source.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './index.html',
            filename: 'index.html'
        })
        // new CleanWebpackPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'stage-0']
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        ]

    }
}



