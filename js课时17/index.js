// 数据类型
// function test(){
//   console.log(typeof(arguments));
// }

// test();

// ! 函数表达式 会忽略名字
// var test = function a(){
//   console.log(test.name); // a
//   return 'a';
// }
// console.log(test.name); // a
// test();
// console.log(typeof(a)); // undefined
// // console.log(a); // 报错


// ? 3.判断星期几
function test(day){
  // ? 数组最前边的, 可以在最前边增加一个 empty,如果访问返回undefined
  // ? 数组中间也可以
  // ? 数组末尾, 无效
  // ? 加入, 无需 day - 1
  var weekday= [, 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  weekday[day] !== undefined ? console.log(weekday[day]) : console.log('I don\'t know');
}
test(0);
test(1);



