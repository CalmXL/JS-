// ? 三目运算符/三元运算符
// var a = 5;
// if(a > 0){
//   console.log('大于0');
// }else{
//   console.log('小于等于0');
// }

// a > 0 ? console.log('大于0')
//       : console.log('小于等于0');

// var str = a > 0 ? '大于0'  // return
//                 : '小于等于0';
// console.log(str);

// -----------------------------

// var a = 3,
//     str = '';

// if(a > 0){
//   if(a > 3){
//     str = '大于3';
//   }else{
//     str = '小于等于3'
//   }
// }else{
//   str = '小于等于0';
// }

// str = a > 0 ? (
//                 a > 3 ? '大于3'
//                       : '小于等于3'
//               ) 
//             : '小于等于0';
// console.log(str);
// ? 面试题
// var str = 89 > 9 ? (
//                       '89' > '9' ? '通过了' 
//                                  : '内层未通过'
//                     )
//                   : '外层未通过'
// // 俩位字符串比较是第一位Ascii码
// console.log(str);


// ? 拷贝
Object.prototype.num = 1;
var person1 = {
  name: '张三',
  age: 18,
  sex: 'male',
  height: 180,
  weight: 140,
  children: {
    first: {
      name:'张小二',
      age: 18
    },
    second: {
      name: '张小三',
      age: 16
    },
    third: {
      name: '张小四', 
      age: 10
    },
  },
  car: ['Benz', 'Mazda']
}
// var person2 = person1;
// person2.name = '李四';
// console.log(person1, person2); // person1也被改变

// var person2 = {};
// 浅拷贝

// for(var key in person1){
//   person2[key] = person1[key];
// }
/* var person2 =  deepClone(person1);
person2.name = '李四';
person2.children.forth = {
  name: '张小五',
  age: 6
};
person2.car.push('BYD'); */
// console.log(person1, person2);

// 浅拷贝
// function clone(Origin, Target){
//   var tar = Target || {}
//   for(var key in Origin){
//     if(Origin.hasOwnProperty(key)){
//       tar[key] = Origin[key];
//     }
//   }
//   return tar;
// }

// 深拷贝
/* function deepClone(origin, target){
  var target = target || {},
      toStr = Object.prototype.toString,
      arrType = '[object Array]';

  for(var key in origin){
    if(origin.hasOwnProperty(key)){
      if(typeof(origin[key]) === 'object' && origin[key] !== null){ // ? 当前项为object,且不为null 

        target[key] = toStr.call(origin[key]) === arrType ? []
        : {}
        // if(toStr.call(origin[key]) === arrType){
        //   target[key] = [];
        // }else{
        //   target[key] = {};
        // }
        deepClone(origin[key], target[key]);
      }else{
        target[key] = origin[key];
      }
    }
  }

  return target
  
}
 */
// ? JSON 克隆

/* var str = JSON.stringify(person1);
var person2 = JSON.parse(str);
person2.name = '李四';
person2.children.forth = {
  name: '张小五',
  age: 6
};
person2.car.push('BYD');
console.log(person1);
console.log(person2); */


