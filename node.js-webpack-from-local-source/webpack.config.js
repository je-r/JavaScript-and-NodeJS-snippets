var path = require("path");

const config = {
  mode: 'development',
  
  entry: {
    'bundle.js': [
      path.resolve(__dirname, './test.js'),
      path.resolve(__dirname, './other.js')
    ]
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'dist'),
  }
}

module.exports = config;