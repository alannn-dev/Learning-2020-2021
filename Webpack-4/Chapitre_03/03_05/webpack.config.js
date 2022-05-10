const path = require('path')

module.exports = {
    entry: "./src/index.js", 
    output: {
        filename: "js/site.js",
        path: path.resolve(__dirname, 'dist')
    }, 
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader', 
                    options: {
                        ident: 'postcss',
                        plugins: [
                            require('autoprefixer')()
                        ]
                    }
                }, 'sass-loader']
            }//end css|scss rule
        ]//end rules array
    }//end module
}//end module.exports