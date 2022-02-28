// function Car(){}

// var car = new Car();
// console.log(Car.prototype);

/* Professor.prototype.tSkill = 'Java';
function Professor(){}
var professor = new Professor();

Teacher.prototype = professor;
function Teacher(){
  this.mSkill = 'JS/JQ';
}
var teacher = new Teacher();

Student.prototype = teacher; 
function Student(){
  this.pSkill = 'HTML/CSS';
}
var student = new Student();

console.log(student);
console.log(Professor.prototype); */

// ? 原型链的终点是Object.prototype


// function Car(){
//   this.brand = 'Benz';
// }

// Car.prototype = {
//   brand: 'Mazda',
//   intro: function(){
//     console.log('我是' + this.brand + '车');
//   }
// }

// var car = new Car();
// car.intro(); // Benz

// Car.prototype.intro(); // Mazda



// var obj1 = {}
// console.log(obj1);

// var obj2 = new Object();//  公司不用这种
// console.log(obj2);

// function Obj(){}
// var obj3 = new Obj();
// console.log(obj3);


// Object.create(对象 || null)

// function Obj(){}
// Obj.prototype.num = 1;

// var obj1 = Object.create(Obj.prototype);
// var obj2 = new Obj();

// console.log(obj1, obj2);



// ? 不是所有的对象都继承于Object.prototype
// var obj = Object.create(null);
// obj.num = 1;
// console.log(obj);
// var obj1 = {
//   count: 2
// }
// obj.__proto__ = obj1;
// console.log(obj.count); // undefined
// console.log(obj1);


// ? undefined 和 null 能否使用toString()
// var num = 1;
// console.log(num.toString());

// var num2 = new Number(num);
// console.log(num2.toString());
// console.log(undefined.toString());

// ? 原始值是没有属性的


// ? document.write 隐式转换
var num = 1;
var obj = null;
var obj2 = Object.create(null);

// 可以自己添加toString方法


// document.write(num);
// document.write(obj);
// // document.write(obj2); // 不能toString,报错,可以自己添加toString方法
// obj2.toString = function(){
//   return 'hha'
// }
// document.write(obj2);


// ? Object.prototype.toString.call()
// var toString = Object.prototype.toString;
// var date = new Date();

// console.log(toString.call(1));
// console.log(toString.call('1'));
// console.log(toString.call(undefined));
// console.log(toString.call(null));
// console.log(toString.call([]));
// console.log(toString.call({}));
// console.log(toString.call(true));
// console.log(toString.call(/\d+/));
// console.log(toString.call(date));


// ? call/ apply 更改this指向
// function Car(brand, color){
//   this.brand = brand;
//   this.color = color;
// }

// var newCar = {};
// // Car.call(newCar, 'Benz', 'red');
// Car.apply(newCar, ['Benz', 'red']);
// console.log(newCar);

// ? 作业:年龄多少岁,姓名为什么,买了一辆排量为xx的xx颜色的xx牌子的车

function Car(brand, color, displacement){
  this.brand = brand;
  this.color = color;
  this.displacement = displacement;
  this.say = function(){
  return (`My car color is ${this.color}, brand is ${this.brand}, displacement is ${this.displacement}`)
  }
}

function Person(opt){
  
  Car.apply(this, [opt.brand, opt.color, opt.displacement]);
  this.name = opt.name;
  this.age = opt.age;
  this.income = opt.income;
  this.intro = function(){
    console.log('My name is' + this.name + '. ' + this.say());
  }
}

var person = new Person({
  name: 'Jack',
  age: 25,
  income: '16K',
  brand: 'benz',
  color: 'pink',
  displacement: '3.0L'
})

person.intro();










