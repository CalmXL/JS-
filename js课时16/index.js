// ? 1. concat 
// var arr1 = ['a', 'b', 'c'];
// console.log(arr1);
// var arr2 = ['d', 'e', 'f'];
// console.log(arr2);

// var arr3 = arr1.concat(arr2);
// console.log(arr3);

// ? 2. toString
// var arr1 = ['a', 'b', 'c', 'd'];
// console.log(arr1.toString());

// ? 3. slice
// ? [start, end)
// var arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// var arr1 = arr.slice(1, 3);
// console.log(arr1);

// ? 4. join / split
// var arr = ['a', 'b', 'c', 'd'];
// var str1 = arr.join('-');
// var arr1 = str1.split('-');
// console.log(str1);
// console.log(arr1);

// ? 5. 类数组
// function test(){
//   console.log(arguments);
// }
// test(1, 2, 3, 4, 5, 6);

// var obj = {
//   '0': 1,
//   '1': 2,
//   '2': 3,
//   '3': 4,
//   '4': 5,
//   '5': 6,
//   'length': 6,
//   // 'splice': Array.prototype.splice
// }
// Object.prototype.push = Array.prototype.push;
// Object.prototype.splice = Array.prototype.splice;


// ? Array.prototype.push = function(elem){
//   this[this.length] = elem;
//   this.length++;
// }


// console.log(obj);

// ? 6. 笔试题
// var obj = {
//   '2': 3,
//   '3': 4,
//   'length': 2,
//   'splice': Array.prototype.splice,
//   'push': Array.prototype.push
// }

// obj.push(1);
// obj.push(2);
// console.log(obj);

var person = {
  '0': '张晓一',
  '1': '张晓二',
  '2': '张晓三',
  'name': '张三',
  'age': 32,
  'weight': 140,
  'height': 180,
  "length": 3
}
Object.prototype.push = Array.prototype.push;
Object.prototype.splice = Array.prototype.splice;

console.log(person);

for(var key in person){
  console.log(key + ':' + person[key]);
}