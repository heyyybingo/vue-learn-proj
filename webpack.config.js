const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    entry: path.join(__dirname, "./src/main.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: 'bundle.js'
    },

    // test: /\.xxx$/, // may apply this only for some modules
    module: {
        rules: [{
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|gif|bmp|jpeg|svg)$/,
                use: ['url-loader']
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: ['url-loader']
            }
        ]

    },
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: "index.html"
        })
    ]

}