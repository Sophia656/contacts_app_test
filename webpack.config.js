const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        clean: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: ["ts-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'postcss-loader',
                        options: { 
                            sourceMap: true, 
                            postcssOptions: {
                                config: path.resolve(__dirname, "./postcss.config.js"),
                            },
                        }
                    }, {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                  loader: 'file-loader'
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./public/index.html"}),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ],
}