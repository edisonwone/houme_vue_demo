// vue.config.js
module.exports = {
	baseUrl: './',
	devServer: {
		proxy: {
			'/apis': {
				target: 'http://localhost:4000/', // target host
				ws: true, // proxy websockets 
				changeOrigin: true, // needed for virtual hosted sites
				pathRewrite: {
					'^/apis': '' // rewrite path
				}
			},
		}
	}
};