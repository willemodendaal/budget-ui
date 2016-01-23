module.exports = {
	context: __dirname + "/app",
	entry: {
		app: "./app.js",
		html: "./index.html"
	},
	output: {
		filename: "[name].js",
		path: __dirname + "/public"
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: "babel-loader?presets[]=react,presets[]=es2015"
		}, {
			test: /\.html/,
			loader: "file?name=index.html"
		}]
	}
};