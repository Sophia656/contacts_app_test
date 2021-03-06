const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        publicPath: '/',
        clean: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css"],
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
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-modules-typescript-loader"},
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true, modules: true }
                    }, {
                        loader: 'postcss-loader',
                        options: { 
                            sourceMap: true, 
                            postcssOptions: {
                                config: path.resolve(__dirname, "./postcss.config.js"),
                                data: '@import "./src/assets/index.css";',
                                includePaths: [__dirname, "./src/assets/"]
                            },
                        },
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
            filename: "main.css",
        })
    ],
    
}
