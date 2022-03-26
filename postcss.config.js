

module.exports = {
    plugins: [
        require('css-mqpacker'),
        require('postcss-cssnext')({
            browsers: [
              'last 2 version'
            ],
            features: {
              rem: false,
              customProperties: {
                strict: false,
                warnings: false,
                preserve: true
              }
            }
          }),
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