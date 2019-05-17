let webpack = require('webpack');
module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
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
        ],
    optimization:
        {
            minimize: false
        }
};
