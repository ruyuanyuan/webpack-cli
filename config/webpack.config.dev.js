// webpack 是node 写出来的  node 的写法
let path = require('path')
let HtmlwebpackPlugin = require('html-webpack-plugin')
module.exports = {
  devServer:{
    port:3000, //端口号
    progress:true, //显示进度
    contentBase:path.resolve(__dirname,'../build'), //启动服务位置
    open:true, //打开默认浏览器
    compress:true //默认压缩
  },
  mode:'development', // 模式  1. production 2.development
  entry:'./src/index.js' ,//入口
  output:{
    filename:'bundle.[hash:8].js', //打包后的文件名
    path:path.resolve(__dirname,'../build') //输出位置
  },
  plugins:[
    new HtmlwebpackPlugin({
      template:path.resolve(__dirname,'../index.html'), //模板路径
      filename:'index.html', //输出文件
      minify:{ //压缩文件
        removeAttributeQuotes:true, //去除双引号
        collapseWhitespace:true, //去除空行
      },
      hash:true //加hash值
    })
  ]
}