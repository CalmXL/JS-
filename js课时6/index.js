// AO GO  作用域
// 作用域链产生的一切问题
// AO => function 独立的仓库 

// 对象
/* var obj = {
  name: '蓝轨迹',
  address: '北京',
  teach: function() {}
} */

// ? 函数也是一种对象类型 引用类型 引用值

/* function test(a, b) {

} */

// console.log(test.name);
// console.log(test.length);
// console.log(test.prototype);

// ? 对象 => 有些属性是我们无法访问的
// ?        Js引擎内部固有的隐式属性


/**
 * [[scope]]
 * 1. 函数创建时,生成的一个JS内部的隐式属性
 * 2. 函数存储作用域链的容器,作用域链
 *    AO GO
 *    AO: 函数的执行期上下文
 *    GO: 全局的执行期上下文
 *    
 *    函数执行完成以后,AO是要销毁的.
 *    AO是一个即时的存储容器
 */

/* function a() {
  function b() {
    var b = 2; 
  }
  var a = 1;
  b();
}
var c = 3;
a(); */

// 每一个函数的作用域链上都有GO

/**
 * 全局在执行的前一刻的时候 GO => 函数声明已经定义了
 * 全局执行 => 
 * GO = {
 *    test: undefined => f (){}
 *    test2: f test() {}
 * }
 * 
 * 函数被定义 [[scope]] => scope chain => GO => AO 
 */

/* test2();
function test2() {}

test();
var test = function (){} */

// ? 案例2

/*  
  当内部函数被返回到外部并保存时,一定会产生闭包,
  闭包会产生原来的作用域链不释放,
  过度的闭包会导致内存泄露,或加载过慢.
*/

/* 
function test1() {
  function test2(){
    var b = 2;
    console.log(a);
  }
  var a = 1;
  return test2
}

var c = 3;
var test3 = test1();
test3(); */

// ? 案例3
/* function test1() {
  var n = 100;
  function add(){
    n++;
    console.log(n);
  }

  function reduce() {
    n--;
    console.log(n);
  }

  return [add, reduce]
}

var arr = test1();
arr[0](); // 101
arr[1](); // 100 */


// ? 案例4
/* function breadMgr(num){
  var breadNum = arguments[0] || 10;

  function supply(){
    breadNum += 10;
    console.log(breadNum);
  }

  function sale(){
    breadNum--;
    console.log(breadNum);
  }

  return [supply, sale];
}

var breadMgr = breadMgr();

breadMgr[0]();
breadMgr[1](); */

// ? 案例5
/* function sunSched(){
  var sunSched = '';

  var operation = {
    setSched: function(thing){
      sunSched = thing;
    },
    showSched: function(){
      console.log(`My schedle on sunday is ${sunSched}`);
    }
  }

  return operation;
}

var sunSched = sunSched();

sunSched.setSched('studying');
sunSched.showSched();
sunSched.setSched('working');
sunSched.showSched();
 */

function a() {
  function b(){
    function c(){

    }
    c() 
  }
  b()
}
a()