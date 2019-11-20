let str = require('./a.js')
require('@babel/polyfill')
console.log(111)
require('./public.scss')
let logo = require('./gw1.png')
let img = new Image()
img.src = logo
document.body.appendChild(img)

let fun = ()=>{
  console.log(11111)
}
fun()

@log
class AA{
  a=1
}
function log(target){
  console.log(target)
} 
let a =new AA()
console.log(a.a)
