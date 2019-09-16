module.exports = () => {
    return `
module.exports = {
    rules: [
        {
            test: /\\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                browsers: ['last 2 versions', 'ie >= 11']
                            },
                            modules: false,
                            useBuiltIns: 'usage'
                        }
                    ]
                ]
            }
        },
        {
            test: /\\.(woff(2)?|ttf|eot|svg)(\\?v=\\d+\.\\d+\\.\\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/font',
                    emitFile: true
                }
            }]
        },
        {
            test: /\\.(s*)css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                publicPath: 'assets/css',
                use: [
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader", // compiles Sass to CSS
                    'resolve-url-loader'
                ]
            })
        },
        {
            test: /\\.(png|jpg|ico)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/img',
                    publicPath: 'assets/img',
                    emitFile: true
                }
            }]
        }				
    ]
}
    `;
}