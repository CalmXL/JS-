// ? 预编译
/**
 * 1. 检查通篇语法错误
 * 1.5 预编译的过程 
 * 2. 解释一行执行一行
 */


// 函数声明整体提升,变量只有声明提升
// 赋值不是提升

/* test();
function test() {
  console.log(1);
}

console.log(a);
var a = 10;  / 俩个步骤
*/

// ? 2.暗示全局变量 imply global variable
// var a = 1; 
// b = 2;

// console.log(window.a); // a = window.a
                       // b = window.b
// window = {
//   a: 1,
//   b: 2
// }

/* function test() {
  var a = b = 1;
}
test();
// console.log(a); // 报错
console.log(window.a); // undefined
console.log(window.b); // 1 
*/

// ? 3.AO activation object 
/**
 * ? 活跃对象,函数上下文
 * ? 1. 先寻找形参,和变量声明
 * ? 2. 实参值赋值给形参
 * ? 3. 找函数声明,赋值
 * ? 4. 执行
 * AO = {
 *  a: undefined => 2 
 *      => function a() {} => 1
 *      
 *  b : undefined => function() {}
 * 
 * }
 * 
 */
/* 
function test(a) {
  console.log(a); // f a(){}
  var a = 1;
  console.log(a); // 1
  function a(){}
  console.log(a); // 1
  var b = function(){}
  console.log(b) // f b(){}
  function d(){}
}

test(2);

 */

// ? ----------------------------
/* function test(a, b) {
  console.log(a);
  c = 0;
  var c;
  a = 5;
  b = 6;
  console.log(b);
  function b() {}
  function d() {}
  console.log(b);
}

test(1); */
/**
 * AO = {
 *  a: undefined,=> 
 *      1 
 *  b: undefined => 
 *      function b() {}
 *  c: undefined
 *  d: function d() {}
 * }
 */


// var a = 1;
// function a() {
//   console.log(2);
// }

// console.log(a); // 1

// ? 4.GO global object 全局上下文
/**
 * ? 1.找变量
 * ? 2.找函数声明
 * ? 3.执行
 */
// ! GO === window

/* console.log(a, b); // f a(){} undefined
function a() {}
var b = function() {} */

// -------------------------------------------------------------

/* var b = 3;
console.log(a); // f a(a) {}
function a(a){
  console.log(a); // f a() {}
  var a = 2;
  console.log(a); // 2

  function a(){}
  var b = 5;
  console.log(b); // 5
}
a(1); */

/**
 * GO = {
 *   b: undefined => 3
 *   a: f a(a){}
 * }
 * 
 * AO = {
 *   a: undefined => 
 *      1 => 
 *      f a() {} => 
 *      2
 *   b: undefined => 
 * 
 * }
 */


/* a = 1;
function test() {
  console.log(a); // undefined
  a = 2;
  console.log(a); // 2
  var a = 3;
  console.log(a); // 3
}

test();
var a;
 */
/**
 * GO = {
 *    a: undefined =>
 *       1 ,
 *    test: function test() {}
 * }
 * 
 * AO = {
 *    a: undefined => 
 *       2  => 
 *       3 ,
 * }
 * 
 */

/* 
function test() { 
  console.log(b); // undefined
  if(a){
    var b = 2;
  }
  c = 3;
  console.log(c); // 3
}

var a;
test();
a = 1;
console.log(a); // 1 
*/

/**
 * GO = {
 *    a: undefined => 
 *       1,
 *    test: function test() {}
 *    c: 3
 * }
 * 
 * AO = {
 *    b: undefined,
 * }
 */



// 作业1
/* function test() {
  return a;
  a = 1;
  function a() {}
  var a = 2;
}

console.log(test()); // f a() {} */

/**
 * Go = {
 *    test: function test() {}
 * }
 * 
 * AO = {
 *    a: undefined => 
 *       function a() {} 
 * }
 */

// ? 作业2
/* function test() {
  a = 1;
  function a(){}
  var a = 2;
  return a
}

console.log(test()); // 2 */


/**
 * GO = {
 *    test: function test() {}
 * }
 * 
 * AO = {
 *    a: undefined => 
 *       function a() {},
 *       1  => 
 *       2;
 * }
 */

// ? 作业3

/* a = 1;
function test(e) {
  function e() {}
  arguments[0] = 2;
  console.log(e); // 2
  if(a){
    var b = 3;
  }
  var c;
  a = 4; 
  var a;
  console.log(b); // undefined
  f = 5;
  console.log(c); // undefined
  console.log(a);  // 4
}
var a;
test(1);
 */
/**
 * GO = {
 *    a: undefined => 
 *       1 ,
 *    test: function test() {}
 * }
 * 
 * AO = {
 *    e: 1 => 
 *       function e() {}
 *    b: undefined,
 *    c: undefined,
 *    a: undefined,
 *    
 * }
 */




