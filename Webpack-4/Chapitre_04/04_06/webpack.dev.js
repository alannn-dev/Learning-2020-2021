const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common, {
    mode: "development",
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'dist'),
        watchOptions: {
            ignored: /node_moules/
        },
    }
})