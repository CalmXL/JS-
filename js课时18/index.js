// ? Js错误信息类型
// ? 1. SyntaxError 语法错误
// ? a. 变量名不规范
// var 1 = 1;
// var 1eb = 1;

// ? b. 关键字不可赋值
// var new = 5;

// ? 3. 基本语法错误
// var a = 5;

// ? 2. 引用错误 ReferenceError
// ? a. 变量或者函数未被声明
// test();
// console.log(a);
// ? b. 给无法赋值的对象赋值的时候
// var a = 1 = 2;
// var a = 1;
// console.log(a) = 1; 

// ? 3. 范围错误 RangeError
// ? a. 数组长度赋值为负数
// var arr = [1, 2, 4];
// arr.length = -1;

// console.log(arr);

// ? b.对象方法超出可行范围
// var num = new Number(66.66);
// console.log(num.toFixed(-1));

// ? 4. 类型错误 TypeError
// 123();

// ? a. 调用不存在的方法
// var obj = {};
// obj.say; // 属性没有赋值
// obj.say();

// ? b. 实例化原始值
// var a = new 'string'; //Uncaught TypeError: "string" is not a constructor
// var a = new 123; // Uncaught TypeError: 123 is not a constructor

// ? 5. URIError URI错误
// ? URI : Uniform Resource Identifier
// ?       统一资源标识符
// ? URL : Uniform Resource Locator
// ?       统一资源定位符
// ? URN : Uniform Resource Name
// ?       统一资源名称

// URL: http://www.baidu.com/news#today
      // ftp:www.baidu.com/ftp@developer
// URN: www.baidu.com/ftp#developer => id

// var myUrl = 'http://www.baidu.com.cin?name=艾小野';
// var newUrl = encodeURI(myUrl);
// console.log(newUrl);

// var newNewUrl = decodeURI(newUrl);
// console.log(newNewUrl);

// var str = decodeURI('%hdjkash%'); // Uncaught URIError: URI malformed


// ? 6. EvalError eval函数执行错误
// eval('var a = 1; console.log(a);');

// var obj = {
//   a: 1,
//   b: 2
// }

// console.log(eval('obj'));

// ? JSON 与 对象
// var obj = {
//   a: 1,
//   b: 2
// }



// var jsonData = '['+
//   '{'+
//     '"name": "abc"'+
//   '},'+ 
//   '{'+
//     '"name": "bcd"'+
//   '},'+
//   '{'+
//     '"name": "efg"'+
//   '}'+
// ']';

// console.log(jsonData);
// // ? json字符串 => json对象
// var data = eval('('+ jsonData + ')');
// console.log(data);

// for(var i in data){
//   var item = data[i];
//   console.log(item.name);
// }

// ? Error构造函数
// var error = new Error('代码错误了');
// var sError = new SyntaxError('代码错误了');
// var rError = new ReferenceError('代码错误了');
// var tError = new TypeError('代码错误了');

// console.log(error);
// console.log(sError);
// console.log(rError);
// console.log(tError);

// ? ------------------分割线------------------------
// ? 手动抛出错误的方法
// ? try catch finally throw

// try{
//   console.log('正常执行1');
//   console.log(a); // 执行报错
//   console.log(b); // 不执行 
//   console.log('正常执行2');
// }catch(e){
//   // console.log(e);
//   console.log(e.name + ':' + e.message);
// }finally{
//   console.log('正常执行3');
// }
// console.log('正常执行4');

// var jsonStr = '';

// try{
//   if(jsonStr == ''){
//     throw 'JSON字符串为空';
//   }
//   console.log('我要执行了!!!!!');
//   var json = JSON.parse(jsonStr);
//   console.log(json);
// }catch(e){
//   console.log(e);
//   var errorTip = {
//     name: '数据传输失败',
//     errorCode: '10010'
//   }
//   console.log(errorTip);
// }


// ? ------------------分割线------------------------
// ? ES5 严格模式

// ? ECMAScript  JavaScript语法规范, 方法规范
// 97   1.0
// 98   2.0
// 99   3.0 JS通行标准
// 07   4.0草案  
// 08   4.0中止  容易改善3.1   激进部分Harmony
//      更名ECMAScript5
// 09   5.0发布,  Harmony  => JS.NEXT,JS.next,next
// 11   5.1 ISO国际标准
// 13   ES6 = js.next     js.next.next 7
// 13   ES6草案发布
// 15   ES6正式发布, ECMAScript2015

// ? ES5 分为 正常模式  ,严格模式
// ? IE9及以下IE 不支持
// ? 3.0 => 严格模式

// ? 1. with不可以使用
/* var namespace = {
  header: {
    Jenny: {
      a: 1,
      b: 2
    },
    Ben: {
      a: 3,
      b: 4
    }
  },
  sideBar: {
    Crystal: {
      a: 5,
      b: 6
    }
  }
}

with(namespace.header.Ben){
  console.log(a);
}
 */

// 命名空间
// var initSlider = (function(){
//   var a = 1;
// })();

// 'use strict';

// function test(){
//   'use strict';
// }
// var a = 1;
// var obj = {
//   a: 2
// }

// function test(){
//   var a = 3;
//   with(obj){
//     console.log(a);
//   }
// }

// test();
// ? 2. caller callee不可以使用

// 'use strict';
// Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them

// function test(){
//   // console.log(arguments.callee);
//   test2();
// }

// test();

// function test2(){
//   console.log(test2.caller);
// }
// ? 3. 不用var 声明,报错
// 'use strict';

// a = 1; // 报错
// var a;
// ? 4. 全局的this 指向window, 函数内部指向undefined
// 'use strict';
// function test(){
//   console.log(this)
// }

// test();

// ? 5. 非严格模式.call(1) 会包装类
// test.call(1);
// ? 6. 函数的参数不能重复
// function test(a, a){
//   console.log(a);
// }

// test(1, 1);
'use strict';
// var obj = {
//   a: 1,
//   a: 2
// }ca
// console.log(obj.a); // 不报错, 打印2

eval('var a = 1; console.log(a)');
console.log(a); // 报错 index.js:266 Uncaught ReferenceError: a is not defined
 





















 





















