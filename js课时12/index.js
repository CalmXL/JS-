// 1. 原型链继承复习
// Professor.prototype = {
//   name: 'Mr. zhang',
//   tSkill: 'JAVA'
// }
// function Professor(){}
// var professor = new Professor();

// Teacher.prototype = professor;
// function Teacher(){
//   this.name = 'Mr. wang',
//   this.mSkill = 'JS/JQ'
// }
// var teacher = new Teacher();

// Student.prototype = teacher;
// function Student(){
//   this.name = 'Mr. Li',
//   this.pSkill = 'HTML/CSS'
// }

// var student = new Student();
// console.log(student);


// ? call / apply
// function Teacher(name, mSkill){
//   this.name = name;
//   this.mSkill = mSkill;
// }
// function Student(name, mSkill, age, major) {
//   Teacher.apply(this, [name, mSkill]);
//   this.age = age;
//   this.major = major;
// }
// var student = new Student(
//   'Mr.zhang', 'JS/JQ', 18, 'Computer'
// );
// console.log(student);



// function Teacher(){
//   this.name = 'Mr. Li';
//   this.tSkill = 'JAVA';
// }

 
// ? 圣杯模式

// function Teacher(){
//   this.name = 'Mr. Li';
//   this.tSkill = 'JAVA';
// }

// Teacher.prototype = {
//   pSkill: 'JS/JQ'
// }

// var t = new Teacher();

// function Student(){
//   this.name = 'Mr. Wang';
// }
// var s = new Student();
// // Student.prototype = Teacher.prototype;

// // var s = new Student();
// // s.age = 18;
// // console.log(s.name);
// // console.log(s);
// // Student.prototype.age = 20;
// // console.log(Student.prototype, Teacher.prototype);


// function Buffer(){}
// Buffer.prototype = Teacher.prototype;

// var buffer = new Buffer();
// Student.prototype = buffer;
// Student.prototype.age = 18;

// var s = new Student();
// console.log(s);
// console.log(s.pSkill);
// console.log(Student.prototype, Teacher.prototype);




// ? 圣杯封装
// var inherit = (function(){
//   var Buffer = function(){}
//   return function(Target, Origin){
//     Buffer.prototype = Origin.prototype;
//     Target.prototype = new Buffer();
//     Target.prototype.constructor = Target; // 把构造器指向自己
//     Target.prototype.super_class = Origin; // 设置继承源
//   }
// })();

// Teacher.prototype.name = 'Mr. Zhang';
// function Teacher(){}
// function Student(){}
// inherit(Student, Teacher);
// Student.prototype.age = 18;

// var s = new Student();
// var t = new Teacher();

// console.log(s);
// console.log(t);



// ? 模块化
// function inherit(Target, Origin){
//   function Buffer(){}
//   Buffer.prototype = Origin.prototype;
//   var buffer = new Buffer();
//   Target.prototype = buffer;
//   Target.prototype.constructor = Target;
//   Target.prototype.super_class = Origin;
// }

// var initProgrammer = (function(){
//   var Programmer = function(){}
//   Programmer.prototype = {
//     name: '程序员',
//     tool: '计算机',
//     work: '编写应用程序',
//     duration: '10个小时',
//     say: function(){
//       console.log('我是一名' + this.myName + this.name + ', 我的工作是用' + this.tool + this.work + ', 我每天工作' + this.duration + ',我的工作需要用到' + this.lang.toString() + '.' );
//     }
//   }

//   function FrontEnd(){}
//   function BackEnd(){}

//   inherit(FrontEnd, Programmer);
//   inherit(BackEnd, Programmer);

//   FrontEnd.prototype.myName = '前端';
//   FrontEnd.prototype.lang = ['HTML', 'CSS', 'JavaScript'];

//   BackEnd.prototype.lang = ['Node', 'Java', 'SQL'];
//   BackEnd.prototype.myName = '后端';

//   return {
//     FrontEnd: FrontEnd,
//     BackEnd: BackEnd
//   }
// })()

// var frontEnd = new initProgrammer.FrontEnd();
// var backEnd = new initProgrammer.BackEnd();

// frontEnd.say();
// backEnd.say();






