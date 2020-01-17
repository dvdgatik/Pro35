module.exports = {
entry: './fclient/index.js',
output: {
    path: __dirname + "/fclient/src/public",
    filename: 'bundle.js'
},
module: {
    rules:[
        {
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }
    ]
}
};