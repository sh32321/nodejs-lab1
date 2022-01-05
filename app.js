// console.log(__filename);

const MySum = require("./mySum.js");

const mySum1 = MySum(2, 5);

console.log(mySum1);

const myArr = [1, 120];

const result = MySum(...myArr);
console.log(result);

let mySecondArr = function () {
  let contents = myArr.map((index) => index * 2);
  console.log(contents);
};

mySecondArr();

// let average = (2 + 240) / 2;
// console.log(average);
// function aboveAverage(value) {
//   return value >= 100;
// }

// let filtered = mySecondArr.filter(aboveAverage);

const myTimeout = setTimeout(() => {
  console.log("GOODBYE");
}, 3000);

function Employee(name, email, department, startDate) {
  this.name = name;
  this.email = email;
  this.department = department;
  this.startDate = startDate;
}

const person = new Employee("John", "ss123@gmail.com", "IT", "2019/06");
console.log(person);
console.log(person.name);
console.log(person.email);
