const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtracTextPlugin = require('extract-text-webpack-plugin')
const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  entry: ['./src/index.js'],
  output: {
    filename: 'app.js',
    path: './build',
    publicPath: '/'
  },

  module: {
    loaders: [
      {test: /(\.js|jsx)$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: `style-loader!css-loader?${cssModules}`}

    ]
  },

  devServer: {
    host: '0.0.0.0',
    port: 3107,
    inline: true
  },

  plugins: [
    new HtmlWebpackPlugin({template: './src/assets/index.html'}),
    new ExtracTextPlugin('style.css', {allChunks: true})
  ]

}
