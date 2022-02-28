// function test(a, b) {
//   // 实参长度
//   console.log(arguments.length);
//   // 形参长度
//   console.log(test.length);
// }

// test(1, 2, 3);

// 一个函数调用时,累加他的实参值
/* function sum(){

  var a = 0;
  for(var i = 0; i < arguments.length; i++){
    a += arguments[i];
  }

  console.log(a);
} */

// sum(1, 2, 3, 4, 5, 11);

/* function test(a, b) {
  b = 3;
  console.log(arguments[1]); // undefined
} */

// test(1);

/* function test(a ,b){
  a = 3;
  // a 和 arguments[0] 不是一个变量
  console.log(arguments[0]);
}

test(1, 2); */


// ? return 
/* function test() {
  console.log('我正在执行');
  return;
  console.log('我执行完了就结束这个函数');
 
} */

// console.log(test());


/**
 * return 之后就不会执行了
 *  1. 终止函数的执行
 *  2. 返回相应的值
 */

// ? 变量

/* b = 2;
function test() {
  var a = 1;
  console.log(b);
} 

test();
console.log(a);  */// 报错
// a 全局变量
/* a = 1;
function test1() {
  // 局部变量
  var b = 2;
  console.log(a);

  function test2() {
    // 局部变量
    var c = 3;
    console.log(b);
  }

  test2();
  console.log(c);
}

test1(); */


/* 
  作业
    1. 定义一个函数,从wp接受一个饮料名称
        函数返回一个对应的价格
    2. 定义一个函数,从wp接受第一个数
      接收一个运算符号,在接收第二个数,利用函数进行运算
      并返回运算结果
    3. 定义一个函数, 从wp接受一个n,算出n的阶乘不能用 for
    4. 定义一个函数,从wp接收一个n,算出斐波那契数列的第n位,
      不能用for循环.
*/

/* function drinkPrice(drink) {
  switch (drink){
    case '可乐':
      return '3元'
    case '怡宝': 
      return '2元'
    case '茶派':
      return '5元'
    default:
      return '没有您选的饮料'
  }
}

var drink = window.prompt('你选择饮料是:');
document.write(drinkPrice(drink));
 */

/* 
var num1 = Number(window.prompt('请输入第一个数'));
var operator = window.prompt('请输入运算符号');
var num2 = Number(window.prompt('请输入第二个数'));

function computer(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '%':
      return num1 % num2;
    default: 
      return 'operator 输入错误'
  }
}

console.log(computer(num1, operator, num2)); */

/* var n = window.prompt('请输入计算几的阶乘');
var num = 1;
function factorial(n){
  if(n > 0){
    num *= n;
    factorial(--n);
  }
  if(n <= 0){
    console.log('请您重新输入');
  }

  return num
}

console.log(factorial(n)); */

/* var n = Number(window.prompt('您想要第几位斐波那契数列的值'));
var num1 = 1,
    num2 = 1,
    num3;

function fibonacii(n) {

  if(n == 1){
    return 1
  }else if(n == 2){
    return 1
  }else if(n > 2){
    num3 = n1 + n2;
    num1 = n2;
    num2 = num3;
  }

} */

var n = parseInt(window.prompt('请输入您要算出几的阶乘'));

// 运用递归的算法
function factorial(n) {
 // 出口
 if(n === 1){
   return 1
 }
 
 return n * factorial(n - 1);
 
}	

console.log(factorial(n));

// factorial(5)
// 5 * factorial(4)
//     4 * factorial(3)
//        3 * factorial(2)
//          2 * factorial(1)
































