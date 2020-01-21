module.exports = {
	entry: './client/app/index.js',
	output: {
		path: __dirname + '/client/public',
		filename: 'bundle.js'
	},
	module:{
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/

			}
		]
	}
};