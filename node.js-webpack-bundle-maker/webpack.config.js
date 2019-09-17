const config = {
  mode: 'development',
  entry: {
    main:'./test.js'
  },
  
  devtool:"inline-source-map",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}

module.exports = config;