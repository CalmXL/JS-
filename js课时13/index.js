// var sched = {
//   wakeup: function(){
//     console.log('Running');
//     return this;
//   },
//   morning: function(){
//     console.log('Go Shopping');
//     return this;
//   },
//   noon: function(){
//     console.log('Having a rest');
//     return this;
//   },
//   afternoon: function(){
//     console.log('Studying');
//     return this;
//   },
//   evening: function(){
//     console.log('Walking');
//     return this;
//   },
//   night: function(){
//     console.log('Sleeping');
//     return this;
//   }
// }
// 链式操作
// sched.wakeup().morning().noon().afternoon().evening().night();

// ? 2.最早的JS引擎 => obj['name']
// ? obj.name => obj['name']
// var myLang = {
//   No1: 'Html',
//   No2: 'CSS',
//   No3: 'JavaScript',
//   myStudyingLang: function(num){
//     console.log(this['No' + num]);
//   }
// }

// myLang.myStudyingLang(3);

//? 3.对象枚举 => 遍历 
// var arr = [1, 2, 3, 4, 5]; 

// for(var i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// var car = {
//   brand: 'Benz',
//   color: 'red',
//   displacement: '3.0',
//   lang: '5.0',
//   width: '2.5'
// }

// for(key in car){
//   // js引擎: car.key => car['key'] => undefined
//   console.log(car[key]);
// }

// ? 4.hasOwnProperty
/* var obj = {
  name: 'xiaoye',
  age: 32
}

var res = obj.hasOwnProperty('age');
console.log(res);// false


function Car(){
  this.brand = 'Benz',
  this.color = 'red',
  this.diaplacement = '3,0'
}

Car.prototype = {
  lang: 5,
  width: 2.5
}

Object.prototype.name = 'Object';

var car = new Car();
console.log(car);
for(var key in car){
  if(car.hasOwnProperty(key)){
    console.log(key + ':' + car[key]); 
  }
} */

// ? 5.'str' in car
// var car = {
//   brand: 'Benz',
//   color: 'red'
// }


// // console.log(color in car); // 报错
// console.log('color' in car); // true 需要是字符串

// function Car(){
//   this.brand = 'Benz';
//   this.color = 'red';
// }

// Car.prototype = {
//   displacement: '3,0'
// }

// var car = new Car();

// console.log('displacement' in car); // true

// ? 6.instanceof
// A instanceof B

/* function Car(){}
var car = new Car();

function Person(){}
var p = new Person();

console.log(car instanceof Car);// true
console.log(car instanceof Object);// true

console.log([] instanceof Array); // true
console.log([] instanceof Object);// true

console.log({} instanceof Object);// true */

// A 对象里边的原型到底有没有B的原型
// var a = [] || {};


// console.log(a.constructor);// f Array()
// console.log(a instanceof Array);

// ? 优先这种方法判断
/* var str = Object.prototype.toString.call(a);
// console.log(str); // [object Array]

if(str === '[object Array]'){
  console.log('是数组');
}else{
  console.log('不是数组');
}
 */
// Object.prototype = {
//   toString: function(){
//     this.toString();
//   }
// }

/* null 
[
  {
    name: 'abc',
  },
  {
    name: 'bcd'
  }
],
{
  "10061": 'error'
} 
*/



/* var arr = new Array(1, 2, 4);
console.log(arr.toString()); // 1,2,4
console.log(Object.prototype.toString.call(arr)); // [object Array] */

// ?7.this

// 1. 全局this => window
// 2. 预编译函数this => window
// 3. apply/call 改变this指向
// 4. 构造函数的this指向实例化对象

/* function test(b){
  this.d = 3;
  var a = 1;
  function c(){}
}

test(123);
console.log(d);// 3
console.log(window.d);// 3
console.log(this.d);// 3 */

/**
 * AO = {
 *    arguments: [123]
 *    this: window
 *    b: 123
 *    a: undefined
 *    c: function c(){}
 * }
 */

/* function Test(){
 
  //var this = {
  //   __proto__: Test.prototype,
  //   name: '123'
  // }
  this.name = '123';
}

var test = new Test();

/**
 * AO = {
 *    this: window => {
 *                      __proto__: Test.prototype,
 *                      name: '123'
 *                    }
 * }
 * 
 * GO = {
 *    Test: function Test(){}
 *    test: {
 *           __proto__: Test.prototype,
 *                name: '123'
 *          }
 * }
 */


// ? call/apply
/* function Person(){
  this.name = '张三';
  this.age = 18;
}

function Programmer(){
  Person.apply(this, []);
  this.work = 'Programming'
}

var p = new Person();
console.log(p); */


// ? 8.callee/ caller
/* function test(a, b, c){
  console.log(arguments.callee.length); // 3
  console.log(arguments.length); // 2
  console.log(test.length); // 3
  // test.length
}

test(1, 2); */

// function test1(){
//   console.log(arguments.callee);
//   function test2(){
//     console.log(arguments.callee);
//   }
//   test2();
// }

// test1();

/* function sum(n){
  if(n <= 1){
    return 1;
  }
  return n + sum(n - 1)
}

var res = sum(10);
console.log(res); */

// var sum = (function(n){
//   if(n <= 1){
//     return 1
//   } 
//   return n + arguments.callee(n - 1);
// })(100);

// console.log(sum);

// ? caller 返回当前被调用函数的函数引用
// function test1(){
//   test2();
// }

// function test2(){
//   console.log(test2.caller);
// }

// test1(); 

