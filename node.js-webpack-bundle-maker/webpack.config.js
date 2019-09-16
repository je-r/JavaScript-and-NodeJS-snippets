// TODO complete

const config = {
  mode: 'development',
  entry: './test.js',
  

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}

module.exports = config;