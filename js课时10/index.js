// function HandPhone(){

// }

// prototype 
// console.log(HandPhone.prototype);
// 原型prototype其实是function对象的一个属性
// 打印出来,结果它也是对象

// function HandPhone(color, brand){
//   this.color = color;
//   this.brand = brand;
  
// }

// HandPhone.prototype.rom = '64G';
// HandPhone.prototype.ram = '6G';
// HandPhone.prototype.screen = '18: 9';
// HandPhone.prototype.system = 'android';
// HandPhonr.prototype.call = function(){
//   console.log('I am calling somebody')
// };

// var hp1 = new HandPhone('red', '小米');
// var hp2 = new HandPhone('black', '苹果');

// // console.log(hp1.rom);
// // console.log(hp2.ram);

// console.log(hp1.screen);
// console.log(hp2.screen);

// 这个prototype是定义构造函数构造出的每个对象的公共祖先
// 所有被该构造函数构造出的对象都可以继承原型上的属性和方法


// function Test(){}

// Test.prototype.name = 'prototype';
// // Test.prototype.name = 'proto';

// var test = new Test();

// console.log(test.name);

// test.name = 'proto';
// console.log(Test.prototype, test);




// function HandPhone(color, brand, system){
//   this.color = color;
//   this.brand = brand;
//   this.system= system;
// }

// function TelePhone(){}

// HandPhone.prototype = {
//   constructor: TelePhone,
// }

// HandPhone.prototype = {
//   rom: '64G',
//   ram: '6G',
//   screen: '18:9',
//   call: function(){
//     console.log('I am calling somebody');
//   }
// }

// var hp1 = new HandPhone('red', '小米');
// var hp2 = new HandPhone('black', '苹果');

// console.log(hp1.rom);
// console.log(hp2.ram);

// console.log(hp1.screen);
// console.log(hp2.screen);

// var hp1 = new HandPhone('black', 'iphone', 'IOS');

// console.log(hp1);
// console.log(hp1.constructor); 

// console.log(HandPhone.prototype);
// ? constructor => 指向构造函数本身, 可以更改

// function Car(){
  // var this = {
  //   [[prototype]]: Car.prototype = {
  //                      name: 'Benz';
  //                  }
  // ? [[prototype]] => 每个实例化对象用来装prototype的容器,
  // }
//   this.name = 'Mazda';
// }

// Car.prototype.name = 'Benz';

// var car = new Car();
// ? 当构造函数被实例化的时候,默认创建this,中包含__proto__,对应的是构早函数的原型,
// ? 构造函数的原型默认包含 constructor: 指向构造函数

// console.log(car);
// console.log(car.name);
// console.log(car.__proto__);


// ?  __proto__ 能否被改动?  可以
// function Person(){

// }

// Person.prototype.name = '张三';

// var p1 = {
//   name: '李四'
// }

// var person = new Person();
// console.log(person.__proto__);

// console.log(person.name); // 张三
// person.__proto__ = p1;
// console.log(person.name); // 李四


// function Car(){}
// Car.prototype.name = 'Mazda';

// var car = new Car();

// Car.prototype.name = 'Benz';
// console.log(car.name);  // Benz


// Car.prototype.name = 'Benz';
// function Car(){}


// var car = new Car();

// Car.prototype = {
//   name: 'Mazda',
// }
// ? 修改的是 constructor 中的prototype,

// console.log(car);
// console.log(car.name);  // Benz

// function Car(){
//   var this = {
//     __proto__: Car.prototype = {
//       name: 'Benz',
//     }
//   }
// }
//
//
// function Car
//

/**
 *  function Car() {
 *  ? 实例化
 *  ? var this ={
 *  ?     __proto__: Car.prototype = {
 *  ?      name: 'Banz'
 *  ?    }
 *  ?  } 
 *  }
 * 
 * ? Car.prototype.constructor => Car() => 
 * ? prototype => name:'Banz'
 */

// ?  window return 问题 

// function test(){
//   var a = 1;
//   function plus1(){
//     a++;
//     console.log(a);
//   }

//   return plus1;
// }

// var plus = test();
// plus(); // 2
// plus(); // 3
// plus(); // 4


// function abc(){
//   window.a = 3;
// }

// abc();

// console.log(a);

// ? ---------------------------
// function test(){
//   var a = 1;
//   function add(){
//     a++;
//     console.log(a);
//   }

//   window.add = add;
// }

// test();
// add();
// add();
// add();

// ? 
var add = (function(){
  var a = 1;
  function add(){
    a++;
    console.log(a);
  }
  return add
})()


// ? js插件的写法
;(function(){
  function Test(){

  }

  window.Test = Test;
})();

var test = new Test();













