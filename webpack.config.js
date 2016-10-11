var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');
module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : null,
    entry: {
       app: ['./js/main.js']
    },
    output: {
        path: './',
        publicPath: '/',
        filename: 'output.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.js$/,
            loader: 'babel',
            include: [
                path.resolve(__dirname, 'js'),
            ]
        }]
    },
    resolve: {
        root: [
            path.resolve(__dirname, 'js')
        ],
        alias: {vue: 'vue/dist/vue.js'}
    },
    plugins: debug ? [
    ] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        })
    ]
};
