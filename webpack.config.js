let CopyPlugin = require('copy-webpack-plugin');
let webpack = require('webpack');
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
            },
            {
                test: require.resolve('angular'),
                loader: 'exports-loader?window.angular'
            },
        ]
    },
    plugins:
        [
            new webpack.ProvidePlugin({
                'angular': 'angular',
            }),
            new CopyPlugin([
                {from: 'app/locales/*', to: 'locales', flatten: true},
                {from: 'app/index.html', to: '', flatten: true},
            ]),
        ],
    optimization:
        {
            minimize: false
        }
};
