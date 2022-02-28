// 自动执行, 执行完成以后立即释放
// 立即执行函数 => 初始化函数
// IIFE immediately-invoked-function-expression

// 基本写法1
// (function(){

// })();

// 基本写法2
/* (function test(){
  var a = 1,
      b = 2;
  console.log(a + b);
}()); // W3C建议
 */

// var num = (function (a, b){
//   return (a + b);
// })(2, 4)

// console.log(num);

// ? 括号包起来的,都是表达式
/* (function(){

}()); // 表达式
(function(){

})(); */


// ? 一定是表达式才能被执行符号执行
// 不能执行

/* function test(){

}(); */

// 可以执行
/* var test1 = function (){
  console.log(1);
}();

(function tet2(){
  console.log(1);
})(); */

// ? 证明自动执行,以及销毁
/* var test = function() {
  console.log(1);
}

console.log(test);

var test1 = function(){
  console.log(2);
}();

console.log(test1); */

// var name = (function(name){
// 	return name
// })('bobo')

// console.log(name);

// 立即执行函数必须是一个表达式,才能被立即执行,
// ! 执行完立即销毁,函数名无意义,内部机制会自动忽略函数名


// ? 函数声明变成表达式的方法 + - ! || && , void
/* + function test(){
  console.log(1);
}();

console.log(test);// ReferenceError */

/* '' || function(){
	console.log(1);
}() // 1 */

/* (function test(){console.log(1)}) && function(){
	console.log(1);
}() // 1 */

/* void function(){
	console.log(2);
}() // 1 */

// 2, 3, function(){
//   console.log(2);
// }()

// ? 逗号运算符
// var num  = (2, 3, 45, 767);
// console.log(num);

// 面试题1

// 会不会报错
/* function test(a){
  console.log(a);// 不会执行
}(6) // (6) 被当成了表达式,而不是立即执行符号

test(1);// 打印输出

// 逗号运算,返回表达式最后一位
console.log((6, 5)); */

// 面试题2
/* function test(){
  var arr = [];

  for(var i = 0; i < 10; i++){
    (function(i){
      arr[i] = function() {
        console.log(i);
      }
    })(i)
    
  }

  return arr
}
  // test();

var arr = test();

for(var j = 0; j < 10; j++){
  arr[j]();
} 
*/

// 面试题3
// var fn = (
//   function test1(){
//     return 1;
//   },
//   function test2(){
//     return '2';
//   }
// )();
/**
 * 1. 逗号运算符,返回表达式的后一位
 * 2. 立即执行test2()
 */
// console.log(fn);
// console.log(typeof(fn));

// 面试题4
/* var a = 10;
// ! (function b(){}) => 表达式,函数名称被忽略, => undefined
if(function b(){}){ 
  a += typeof(b);
}

console.log(a); // 10undefined */


// ! 表达式中的函数声明不会定义
(function a(){
  console.log(1);
})
if(function b(){}){
  console.log('1');
}


/**
 * 作业: 
 *    1. 累加器 初始值0 ,闭包, +1打印
 *    2. 缓存器 : 一个班级,学生名保存在一个数组,俩个方法写在函数中的一个对象中,
 *          第一个方法,加入班级,第二个方法离开班级
 *          每次加入或离开,都需要打印新的学生名单
 */

/* function accumlator(){
  for(var i = 0; i < 10; i++){
    (function(){
      console.log(i)
    })()
  }
}

accumlator(); */

/* function buffer(){
  var studentsArr = ['小明','小红'];

    var operStd = {
      join:function(name){
        studentsArr.push(name);
        console.log(studentsArr);
        // for(var i = 0; i < studentsArr.length; i++){
        //   (function(){
        //     console.log(studentsArr[i]);
        //   })()
        // }
      },
      quit: function(name){
         var index = studentsArr.indexOf(name);
        //  console.log(index);
        if(index !== -1){
          studentsArr.splice(index,1);
        }
         console.log(studentsArr);
        //  for(var i = 0; i < studentsArr.length; i++){
        //    var item = studentsArr[i]; // ?  for循环型性能 的优化
        //    if(item === name){
        //      studentsArr.splice(i);
        //    }
        //  }
      }
    };
    
    return operStd
}

var operStd = buffer();
operStd.join('小阿飞');

operStd.quit('小红'); */

