//结合图片参考;
//nodemon 直接运行
function Animal(){
　　this.species = "动物";
}
Animal.prototype.eat='肉'
function Cat(name,color){
　this.name = name;
　this.color = color;
}
Cat.prototype = new Animal();
// Cat.prototype.constructor = Cat
Cat.prototype.go='pa'
var cat = new Cat('a','b'); 
console.log(cat.__proto__)
//显示当前层的内容原型链上一层存在但不显示
//Cat { species: '动物', constructor: [Function: Cat], go: 'pa' }
//prototype ={
//   constructor:function(){
    
//   }
    // ...
// }
//如果不修改Cat.prototype.constructor，则Cat.prototype全部被覆盖，只存在new Animal()属性,和Cat.prototype.go='pa'