module.exports = {
	entry: './app.js',

	output:{
		path: 'dist',
		filename: 'main.js'
	},

	module:{
		loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}
		]
	}
}
