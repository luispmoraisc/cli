#!/usr/bin/env node

module.exports = () => {
    return `module.exports = function (config) {
    config.set(
    {        
        browsers: ['PhantomJS'],
        client: {
            runInParent : true,
            clearContext : true
        },
        customContextFile : 'specRunner.html',        
        files: ['tests.webpack.js', 'e2e/**/*.spec.js'],
        exclude: [],       
        frameworks: [
            'jasmine-ajax',
            'jasmine'
        ],
        autoWatch: false,
        singleRun : true,
        restartOnFileChange : false,
        plugins : [
            'karma-jasmine-ajax', 
            'karma-webpack', 
            'karma-jasmine',
            'karma-sourcemap-loader',
            'karma-coverage-istanbul-reporter',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap'],
        },              
        webpack: {
            cache: true,
            devtool: 'inline-source-map',
            mode : 'production',
            entry : {
                'main': './src/main.js'
            },
            module: {
                
                rules : [                        
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
                                        corejs : '2.0.0',
                                        modules: false,
                                        useBuiltIns: 'entry'
                                    }
                                ]
                            ]
                        }
                    },
                    {
                        test: /\\.(s*)css$/,
                        use: [
                            "style-loader", // creates style nodes from JS strings
                            "css-loader", // translates CSS into CommonJS
                            "sass-loader" // compiles Sass to CSS
                        ]
                    },
                    {
                        test: /\\.(woff(2)?|ttf|eot|svg)(\\?v=\\d+\\.\\d+\\.\\d+)?$/,
                        use: [{
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'assets/fontello/font/'
                            }
                        }]
                    },
                    {
                        test: /\\.(png|jpg)$/,
                        use : [{
                            loader : 'file-loader',
                            options: {
                                name : '[name].[ext]',
                                outputPath: 'assets/img',
                                emitFile : true
                            }
                        }]
                    },
                    {
                        test: /\\.js$|\\.jsx$/,
                        use: {
                            loader: 'istanbul-instrumenter-loader',
                            options: { 
                                esModules: true,
                                produceSourceMap : true
                            }
                        },
                        enforce: 'post',
                        exclude: /node_modules|\\.spec\\.js$/,

                    }                                                              
                ]                
            },
        },    
        colors : true,    
        reporters: ['progress', 'coverage-istanbul'],
        coverageIstanbulReporter : {
            reports : ['html','lcovonly','text-summary'],
            fixWebpackSourcePaths : true
        }
    });    
    
};`;
}