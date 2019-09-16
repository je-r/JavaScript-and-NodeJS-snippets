// TODO 

const config = {
  mode: 'production',
  entry: './test.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}

module.exports = config;