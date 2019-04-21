let CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins:
        [
            new CopyPlugin([
                {from: 'app/languagesList/*', to: 'languagesList', flatten: true},
                {from: 'app/index.html', to: '', flatten: true},
            ]),
        ],
    optimization:
        {
            minimize: false
        }
};
