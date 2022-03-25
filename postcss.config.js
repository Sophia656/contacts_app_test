module.exports = {
    plugins: [
        require('autoprefixer'),
        require('css-mqpacker'),
        require('cssnext'),
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