// webpack 是node 写出来的  node 的写法
let path = require('path')
module.exports = {
  mode:'development', // 模式  1. production 2.development
  entry:'./src/index.js' ,//入口
  output:{
    filename:'bundle.js', //打包后的文件名
    path:path.resolve(__dirname,'build')
  }
}