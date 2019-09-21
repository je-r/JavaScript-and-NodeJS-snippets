const config = {
  mode: 'development',
 
  entry: {
    'bundle.js': [
      path.resolve(__dirname, './test.js'),
      path.resolve(__dirname, './other.js'),
      path.resolve(__dirname, './node_modules/lodash/'),
    ]
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'dist'),
  },
                plugins: [
                        new webpack.DllPlugin({
                                name: "[name]",
                                path: path.resolve(__dirname, "./manifest.json")
                        })
                ]
}
 
module.exports = config;