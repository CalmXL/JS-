// for(var i = 0; i < 10; i++){
//   console.log(i);
// }

// var i = 0;

// for(; i < 10;){
//   console.log(i);
//   i++;
// }


// var i = 0;
// while(i < 10){
//   console.log(i);
//   i++;
// }

// while(1){
//   console.log(1);
// }


// var i = 1;
// for(; i;){
//   console.log(i);
//   i++;

//   if(i == 11){
//     // i = 0;
//     break;
//   }
// }

// ? 1.从0开始做加法,加到什么时候总和< 100
// var sum = 0;

// for(var i = 0; i < 100; i++){
//   sum += i;

//   if(sum > 100){
//     break;
//   }

//   console.log(i, sum);
// }


// ? 2.100内的数跳过7可以整除的数或者是个位是7的数

// for(var i = 0; i < 100; i++){
//   if(i % 7 == 0 || i % 10 == 7){

//   }else{
//     console.log(i);
//   }
// }

// ? 3.100以内可以被4或5或6整除的数

// for(var i = 0; i < 100; i++){
//   if(i % 5 == 0 || i % 6 == 0 || i % 7 == 0){
//     console.log(i);
//   }
// }
    
/**
 * 4.打印 0-100的数
 * ()只能有一句,不能写比较
 * {}不能出现 i++ i--
 */
// var i = 100;
// for(; i--;){
//   console.log(i);
// }

// ? 5.10的n次方
// var n = 5;
// var num = 1;
// for(var i = 0; i < 5; i++){
//   num *= 10;
// }

// ? 6. n的阶乘
// var n = 10;
// var num = 1;
// for(var i = 1; i <= n; i++){
//   num *= i;
// }

// ? 7.789翻转
// var num = 789;

// var a = num % 10; // 9
// var b = (num - a) / 10 % 10; 
// var c = (num - a - b * 10) / 100;

// console.log('' + a + b + c);

// ? 8.打印三个数中的最大值
// var a = 1,
//     b = 4,
//     c = 3;

// if(a > b){
//   if(a > c){
//     console.log(a);
//   }else{
//     console.log(c);
//   }
// }else if(a < b){
//   if(b > c){
//     console.log(b);
//   }else{
//     console.log(c);
//   }
// }

// ? 9.打印 100 以内的质数,
/* var count = 0;
for(var i = 2; i < 100; i++){

  for(var j = 1; j <= i; j++){
    if(i % j == 0){
      count++;
    }
  }

  if(count == 2){
    console.log(i);
  }

  count = 0;

} */


// ? 斐波那契数列
// 1 1 2 3 5 8 13 21 34 55
// 1 2 3 4 5 6 7  8  9  10

/* var n = window.prompt('求数列第几位n的值:');
var prev1 = 1,
    prev2 = 1;
var flag;
for(var  i = 1; i <= n; i ++){

  if( i == n - 2){
     console.log(prev1 + prev2);
   }
  if(n == 1){
    console.log(1);
    break;
  }else if(n == 2){
    console.log(1);
    break;
  }else if(n > 2){
    console.log(prev1, prev2);

    flag = prev2;
    prev2 = prev1 + prev2;
    prev1 = flag;

  }
} */

 
// ? typeof
// console.log(typeof(123)); // number
// console.log(typeof('123')); // string
// console.log(typeof(null)); // ! object
// console.log(typeof(undefined)); // undefined
// console.log(typeof('')); // string

// console.log(typeof(false));// boolean
// console.log(typeof(true));// boolean
// ! 任何数据类型的值 + 字符串 都是字符串
// ? console.log(typeof(1 + '2')); // string
// ? console.log(typeof('1' + 2));// string

// console.log(typeof(1 - 1)); // number
// console.log(typeof('1' - 1)); // number 
// console.log(typeof(1 - '1')); // number


// ? 显示类型转换

// ? 1. Number()
// console.log(Number(1)); // 1
// console.log(Number('1')); // 1
// console.log(Number(undefined)); // ! NaN
// console.log(Number(null)); // 0
// console.log(Number(false)); // 0
// console.log(Number(true)); // 1

// ? 2.parseInt()
// console.log(parseInt(3.14)); // 3
// // parse 非四舍五入
// console.log(parseInt(3.99));
// console.log(parseInt(true)); // NaN
// console.log(parseInt(false));// NaN
// console.log(parseInt(null));// NaN
// console.log(parseInt(undefined));// NaN
// console.log(parseInt(NaN));// NaN
// // 将'11' 以16进制进行转换
// console.log(parseInt('11', 16));// 17
// // 字符串以数字开头可以转换
// console.log(parseInt('123abc23')); // ! 123
// console.log(parseInt('abc123')); // ! NaN

// ? 3.parseFloat() 
// var num1 = parseFloat('3.1415926');
// console.log(num1.toFixed(2)); // 3.14
// // parseFloat() 四舍五入
// var num2 = parseFloat('3.1455675');
// console.log(num2.toFixed(2)); // 3.15

// console.log(parseFloat('123abc23')); // 123
// console.log(parseFloat('abc23')); // NaN
// console.log(parseFloat(true)); // NaN
// console.log(parseFloat(false)); // NaN
// console.log(parseFloat(null)); // NaN
// console.log(parseFloat(undefined)); // NaN
// console.log(parseFloat(NaN)); // NaN

// ? 4.String
// var str = '123';
// null undefined 会报错
// console.log(str.toString());

// ? 5.Boolean
// console.log(Boolean(undefined)); 
// console.log(Boolean(null)); 
// console.log(Boolean(0)); 
// console.log(Boolean(false)); 
// console.log(Boolean('')); 
// console.log(Boolean(NaN)); 
// 除了以上6种,其余都为true

// ? 隐式类型转换
// var a = '123';
// a++;
// console.log(a); // 124

// var a = 1 == '1'; // true
// ? === 不进行类型转换
// var a = 1 === '1'; //false 

// var a1 = 1 > 2 > 3; // false
// var a2 = 3 > 2 == 1;  // true

// ? undefined 和 null 都不等于0,大于0,小于0
// ? 但是 undefined == null
// var a1 = undefined == 0;
// var a2 = null == 0;
// var a3 = null == undefined;

// console.log(a1, a2, a3);

// ? isNaN
// console.log(isNaN(NaN)); // ! true

// console.log(isNaN(1)); // false

// console.log(isNaN('1')); // false

// console.log(isNaN(true)); //false

// console.log(isNaN(false)); // false

// console.log(isNaN(undefined)); // ! true

// console.log(isNaN(null)); // false

// ? Infinity 无穷大
console.log(2 / 0); // Infinity
console.log(-2 / 0); // -Infinity

console.log(Infinity + 1); // Infinity
console.log(Infinity - 1); // Infinity

console.log(100 / Infinity); // ! 0
console.log(-100 / Infinity);// ! -0
