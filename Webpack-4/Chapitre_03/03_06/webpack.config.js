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
            },//end css|scss rule
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader', 
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images'
                        } 
                    }
                ]
            }
        ]//end rules array
    }//end module
}//end module.exports