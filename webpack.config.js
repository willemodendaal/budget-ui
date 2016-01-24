var path = require('path');

module.exports = {
	context: path.join(__dirname, "/app"),
	devtool: "source-map",
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
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ["react-hot", "babel-loader?presets[]=react,presets[]=es2015"]
		}, {
			test: /\.html/,
			loader: "file?name=index.html"
		}]
	}
};