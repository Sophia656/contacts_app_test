module.exports = {
    plugins: [
        require('autoprefixer'),
        require('css-mqpacker'),
        require('postcss-cssnext'),
        require('cssnano')({
            preset: [
                'default', {
                    discardComments: {
                        removeAll: true,
                    }
                }
            ]
        })
    ]
}