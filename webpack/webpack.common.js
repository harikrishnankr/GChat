const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: "./src/app.tsx",
    output: {
        filename: "./main.js",
        publicPath: '/',
        path: path.resolve('./')
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss']
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: ["url-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
