let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
  mode:'development',
  //多入口
  entry:{
    home:path.resolve(__dirname,'../src/index.js'),
    other:path.resolve(__dirname,'../src/other.js')
  },
  output:{
    filename:'[name].[hash:6].js',
    path:path.resolve(__dirname,'../dist')
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'../index.html'),
      filename:'home.html',
      chunks:['home']
    }),
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'../index.html'),
      filename:'other.html',
      chunks:['other']
    })
  ],
  module:{
    rules:[
      {
        test:/\.js$/,
        options:[
          
        ]
      }
    ]
  }
}