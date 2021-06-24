const webpack = require("webpack");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    entry: {
        app: "./assets/js/script.js",
        events: "./assets/js/events.js",
        schedule: "./assets/js/schedule.js",
        tickets: "./assets/js/tickets.js"
    }, 
    output: {
        filename: "[name]main.bundle.js",
        path: __dirname + "/dist"
    },
    module: {
        rules: [
            {
                test: /\.jpg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name(file) {
                                return '[path][name].[ext]';
                            },
                            publicPath: function(url) {
                                return url.replace('../', '/assets/');
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            // the report outputs to the HTML file in the dist folder
            analyzerMode: "static", 
        })
    ],
    mode: 'development'
};