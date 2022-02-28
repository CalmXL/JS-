// ? 1.对象
/* var teacher = {
  name: '张三',
  age: 32,
  sex: 'male',
  height: 176,
  weight: 130,
  teach: function(){
    console.log('I am teaching JavaScript');
  },
  smoke: function(){
    this.weight--;
    console.log('I am smoking', this.weight);
  },
  eat: function(){
    this.weight++;
    console.log('I am having a dinner', this.weight);
  }
}

console.log(teacher.name);
teacher.smoke();

teacher.address = 'beijing';
teacher.drink = function(){
  console.log('I am drinking beer');
}

delete teacher.address;
delete teacher.teach;

console.log(teacher);
teacher.smoke();
teacher.smoke();
teacher.smoke();
teacher.eat();
teacher.eat();
 */


/* var attendance = {
  students: [],
  total: 6,
  join: function(name){
    this.students.push(name);
    if(this.students.length === this.total){
      console.log(name + ',学生已到齐');
    }else{
      console.log(name + ',学生未到齐');
    }
    // console.log(this.students);
  }, 
  leave: function(name){
    var idx = this.students.indexOf(name);
    if(idx !== -1){
      this.students.splice(idx, 1);
    }
    console.log(name + '早退');
    console.log(this.students);
  },
  classOver: function(){
    console.log('下课了');
    this.students = [];
  }
}

attendance.join('小红');
attendance.join('小王');
attendance.join('小张');
attendance.join('小李');
attendance.join('小刘');
attendance.join('小吴');
attendance.leave('小李');

attendance.classOver(); */


// 对象字面量,对象直接量
// var obj = {
//   name: 'zhangsan',
//   sex: 'male'
// }

// 构造函数
// 系统自带的Object 函数
// var obj = new Object(); // 对象字面量相等
// obj.name = 'zhangsan';
// obj.sex = 'male'; 
// console.log(obj);

// 自定义构造函数
// 大驼峰
/* function Teacher(opt){
  this.name = opt.name;
  this.sex = opt.sex;
  this.weight = opt.weight;
  this.course = opt.course;
  this.somke = function(){
    this.weight--;
    console.log(this.weight);
  };
  this.eat = function(){
    this.weight++;
    console.log(this.weight);

  }
     
}

var teacher1 = new Teacher({
  name:'小红',
  sex: 'women',
  weight: 100,
  course: 'JavaScript'
});
var teacher2 = new Teacher({
  name:'小宁',
  sex: 'male',
  weight: 160,
  course: 'Java'
});

console.log(teacher1, teacher2); */

function Teacher(name, sex, weight, course){
  this.name = name;
  this.sex = sex;
  this.weight = weight;
  this.course = course;
  this.somke = function(){
    this.weight--;
    console.log(this.weight);
  };
  this.eat = function(){
    this.weight++;
    console.log(this.weight);
  }
}

var teacher1 = new Teacher('xiaohong', 'male', 140, 'Java');
var teacher2 = new Teacher('xiaoming', 'male', 150, 'JavaScript');
console.log(teacher1, teacher2);
