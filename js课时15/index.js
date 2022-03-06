// ? 数组
// var arr1 = []; // 数组字面量
// var arr2 = new Array(); // 通过系统内置Array构造函数声明数组 不推荐
// var arr3 = Array(); // 不使用

// 所有数组,都继承于Array.prototype

// ? 对象
// var obj1 = {}; // 对象字面量
// var obj2 = new Object(); // 通过系统内置Object构造函数声明数组
// var obj3 = Object(); // 不使用

// console.log(obj1.__proto__, obj2.__proto__, obj3.__proto__);
// console.log(Object.prototype);

// ? 数组就是另一种对象的形式
// var arr = [1, 2, 3, 4, 5];
        // 0  1  2  3  4
        // index: 数组元素对的下标(索引值)

// var obj = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   4: 5
// }

// console.log(arr[2]);
// console.log(obj[2]);
// ? 稀松数组
// var arr = [,,];
// var arr1 = [,1, 3, 5, 6,]; // 稀松数组
// console.log(arr, arr1); // [empty x 2], [empty, 1, 3, 5, 6]

// ? 构造函数 构造数组
// var arr1 = new Array(, 1, 3, 5, 7); // 报错
// var arr = new Array(5);// [empty x 5] 5 => 数组的长度 => [,,,,,]
// console.log(arr);

// var arr1 = new Array('1'); // 元素
// console.log(arr1); ['1']


// 读
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr[10]); // undefined

// 写
// arr[10] = 'a';
// console.log(arr);

// 改
// arr[5] = 'b';
// console.log(arr);

// ? 1. push unshift 
// ? 返回值, 都执行了方法以后的数组长度
// console.log(Array.prototype); // 继承原型上的方法

// var arr = [2, 3, 4];
// arr.push(5);
// arr.push(6 ,7);
// console.log(arr);

// var arr = [2, 3, 4];
// arr.unshift(1, 'a', 'b');
// console.log(arr);

// var arr = [2, 3, 4];

// Array.prototype.myPush = function(){
//   for(var i = 0; i < arguments.length; i++){
//     // console.log(arguments[i]);
//     this[this.length] = arguments[i];
//   }
//   return this.length;
// } 

// arr.myPush(1, 2, 3);

// ? 2.pop shift 
// ? 返回值 是被删除的元素
// var arr = ['a', 'b', 'c']; 
// // arr.pop();
// var str = arr.shift();
// console.log(str);


// ? 3. reverse 返回翻转后的数组
var arr = [1, 2, 3];
arr.reverse();
// console.log(arr); // [3, 2, 1]


// ? 4. splice
// arr.splice(开始项的下标, 剪切长度, 剪切最后一位开始添加数据)

// var arr = ['a', 'b', 'c'];
// arr.splice(1, 1, 'l','o');
// console.log(arr);

// var arr = ['a', 'b', 'c', 'e'];

// arr.splice(3, 0, 'd');
// console.log(arr); // [a, b, c, d, e]

// arr.splice(-1, 0, 'd');
// console.log(arr);

// function mySplice(arr, index){
//   return index += index >= 0 ? 0 : arr.length;
// }

// ? 5. sort() => 按照Ascii码来排列的
// 返回排序以后的数组
// var arr = [-1, -5, 8, 0, 2]; 
// arr.sort();
// console.log(arr);

// var arr = ['b', 'z', 'h', 'i', 'a'];
// arr.sort();
// console.log(arr);

var arr = [27, 49, 5, 7];
// arr.sort();
// console.log(arr);


/**
 * 1. 俩个参数
 * 2. 返回值: 1.负值, a在前
 *           2.正值, b在前
 *           3.0    保持不动
 */
// arr.sort(function(a, b){
//   // if(a > b){
//   //   return 1;
//   // }else{
//   //   return -1;
//   // }
//   return a - b; // 升序
//   // return b - a; // 降序   
// })


// ? 随机排序
// var arr = [1, 2, 3, 4, 5, 6];

// Math.random() => 返回 0-1 开区间的随机数
// arr.sort(function(a, b){
//   // var rand = Math.random();
//   // if(rand - 0.5 > 0){
//   //   return 1;
//   // }else{
//   //   return -1;
//   // }

//   return Math.random() - 0.5;
// })

// console.log(arr);

var arr = [
  {
    name: 'Jenny',
    age: 18
  },
  {
    name: 'Jone',
    age: 10
  },
  {
    name: 'Ben',
    age: 16
  },
  {
    name: 'Crytal',
    age: 3
  },
  {
    name: 'Lucy',
    age: 11
  }
];

arr.sort(function(a, b){
  if(a.age > b.age){}
})


var arr = ['12345', '1', '1234', '12', '1234567'];


/**
 * 修改原数组:
 *    1. push/unshift
 *    2. pop/shift
 *    3. reverse
 *    4. splice
 *    5. sort
 */

