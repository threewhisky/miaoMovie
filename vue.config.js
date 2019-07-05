module.exports = {
    publicPath: '/miaoMovie',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                target: "http://39.97.33.178",
                changeOrigin: true
            }
        }
    }
}