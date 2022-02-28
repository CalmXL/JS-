// ? 1. 函数实例化原理
// function Car(color, brand){
//   // this ={
//   //    color: 'red',
//   //    brand: 'brand'
//   // }
//   this.color = color;
//   this.brand = brand;

//   // return this
// }
// ? this在没有实例化的时候, this => window
// ? this 指向的是实例化的对象

/**
 * AO = {
 *    1.实例化之前,
 *    this:{
 *      color: color,
 *      brand: brand
 *    }
 * }
 */
// var car1 = new Car('red', 'Benz');
// console.log(car1.color);

// ? 2. new使得this做了什么
// function Car(color, brand) {
//   var me = {};
//   me.color = color;
//   me.brand = brand;

//   return me
// }

// var  car = Car('red', 'Benz');

// console.log(car.color);


// ? 3. 构造函数返回值
// function Car(color, brand){
//   this.color = color;
//   this.brand = brand;

  // ! 构造函数返回原始值,并不能替代隐式返回的this
  // ! 返回 [], {}, function(){}
  
//   return function(){}
// }

// var car1 = new Car('red', 'Benz');
// console.log(car1.color);
// console.log(car1);


// ? 4. JS包装类
/**
 * 1. 原始值并没有自己的方法和属性
 * var a = 1; // 原始值
 */
// var a = 1;
// console.log(a);

// var b = new Number(a);
// b.len = 1;
// b.add = unction(){
//   console.log(1);
// } 

// console.log(b); // b一个对象

// var d = b + 1; // b => 原始值
// console.log(d);

// new Number new String new Boolean

// ? 包装类的过程
// var a = 123; // 原始值 => 数字
// a.len = 3;
// // ? new Number(123).len = 3;  delete
// console.log(a.len); // undefined

/* 
  模拟包装类的过程
var obj = {
  name:'obj'
}
console.log(obj);

delete obj.name;

console.log(obj.name); // undefined
*/

/* var str = 'abc';

// console.log(new String());
// console.log(new String(str).length);
console.log(str.length); */


// ? 数组的截断
// var arr = [1, 2, 3, 4, 5];

// arr.length = 3;
// console.log(arr); // [1, 2, 3]

// var str = 'abc';
// str.length = 1; // new String(str).length = 1; 
// // delete
// // console.log(new String(str));
// console.log(str);
// console.log(str.length);



// 案例1
/* var name1 = 'languiji';
name1 += 10; // name1 => 'languiji10'

var type = typeof(name1);// 'string'

 if(type.length === 6){
   type.text = 'string';
   // new String(type).text = 'string' 
   // delete
 }

 console.log(type.text); // undefined */


// ? 案例2
/* function Test(a, b, c){
  var d = 1;
  this.a = a;
  this.b = b;
  this.c = c;

  function f(){
    d++;
    console.log(d);
  }

  this.g = f;

}

var t1 = new Test();
t1.g(); // 2
t1.g(); // 3
var t2 = new Test();
t2.g(); // 2 */

// ? 案例3

/* 
var x = 1,
    y = z = 0;

function add(n){
   return n = n + 1;
}

y = add(x);

function add(n){
  return n = n + 3;
}

z = add(x);

console.log(x, y, z); // 1 4 4  
*/

// ? 案例4 哪一个能输出12345

/* function foo1(x){
  console.log(arguments);
  return x;
}

foo1(1, 2, 3, 4, 5);

function foo2(x){
  console.log(arguments);
  return x;
}(1, 2, 3, 4, 5)


(function foo3(x){
  console.log(arguments);
  return x;
})(1, 2, 3, 4, 5) */

// 案例5
// 映射关系
// 'use strict'
function b(x, y, a){
  // a = 10;
  // console.log(arguments[2]); // 10
  'use strict'
  arguments[2] = 10;
  console.log(a);  // 10
}

b(1, 2, 3);

// ASCII 码 表1  0-127
//          表2  128 - 255
// 所有字符都是 一个字节 byte

/**
 * UNICODE码 涵盖ASCII码 俩个字节
 */

/* var str = 'ab';
var pos = str.charCodeAt(0);
var pos1 = str.charAt(1);
console.log(pos);
console.log(pos1); */

 









