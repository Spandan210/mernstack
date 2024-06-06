// // /*1.Create a function fetchData that simulates fetching data from an API. The function should
// // return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object
// // should represent a user with properties id, name, and age.*/

// function fetchData() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const data = [
//           { id: 1, name: 'Spandan', age: 26 },
//           { id: 2, name: 'Chris', age: 24 },
//           { id: 3, name: 'Avesak', age: 23 },
//           { id: 4, name: 'Ujjwal', age: 40 }
//         ];
//         resolve(data);
//       }, 2000);
//     });
//   }


// //Usage
// fetchData().then((users) => {
//     console.log(users);
// });

// // /*2.Create a function createCounter that returns an object with two methods: increment and
// // getCount. The increment method should increase the internal count by 1, and the getCount
// // method should return the current count. Use a closure to maintain the internal count variable. */

// function createCounter(){
//     var count = 0;
//     function increment(){
//         count++;
//     }
//     function getCount(){
//         return count;
//     }
//     return { increment,getCount}
// }

// var res = createCounter(); //Making an object res for method createCount
// res.increment();
// res.increment();
// console.log(`Count : ${res.getCount()}`); // Output: 2

// // /*3.Create a function processData that accepts an array of numbers and a callback function. The
// // function should process each number in the array using the callback function and return a
// // new array of processed numbers. */

// function processData(num,farki){
//     var res = farki(num);
//     return res;
// }

// var numbers = [1,2,3,4,5];
// var processedNumbers = processData(numbers,turn);
// console.log("Array Processing:");
// console.log(`Original Array : [${numbers}]`);
// console.log(`After Processing : [${processedNumbers}]`)

// function turn(arr){
//     return arr.map(num => num**3)//Altering the new array so that it shows cube powers of the original aray
// }

// // /*4.Rewrite the fetchData function from Question 1 using async and await.*/

// function fetchData(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { id: 1, name: 'Spandan', age: 26 },
//                 { id: 2, name: 'Chris', age: 24 },
//                 { id: 3, name: 'Avesak', age: 23 },
//                 { id: 4, name: 'Ujjwal', age: 40 }//Hardcoded array of objects
//             ])
//         },2000);//setting timeout of 2 seconds
//     });
// }

// async function getData(){     
//     var res = await fetchData();
//     console.log(res);
// }

// getData();

// // // 5. Given an array of numbers, create a function that doubles each number using map.

// function double(val1){
//     var res = val1.map(num => num*2)//doubling each number in the array
//     return res;
// }
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// console.log("Array Doubler")
// readline.question('Please enter an array of numbers separated by commas : ', val=>{
//     let input = val.split(",");
//     let res = double(input);
//     console.log(`Original Array : [${val}]`)
//     console.log(`Result : [${res}]`)
//     readline.close()
// })

// // //6. Given an array of numbers, create a function that filters out numbers less than 10 using filter.

// function channe(val1){
//     var res = val1.filter(num => num<10)//filters and removes values less than 10 in the array
//     return res;
// }
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// console.log("Array Filter:Removes Values less than 10")
// readline.question('Please enter an array of numbers separated by commas : ', val=>{
//     let input = val.split(",");
//     let res = channe(input);
//     console.log(`Original Array : [${val}]`)
//     console.log(`Result : [${res}]`)
//     readline.close()
// })

// // //7. Given an array of numbers, create a function that finds the first number greater than 15 using find.

// function bhetau(val1){
//     var res = val1.find(num => num>15)//finds the first number greater than 15 in the array and returns it
//     return res;
// }
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question('Please enter an array of numbers separated by commas : ', val=>{
//     let input = val.split(",");
//     let res = bhetau(input);
//     console.log(`Original Array : [${val}]`)
//     console.log(`The first value greater than 15 in the array : ${res}`)
//     readline.close()
// })

// // //8.Given an array of numbers, create a function that sums all numbers using reduce.

// function add(total, num){
//     return total+Math.round(num);
// }
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question('Please enter an array of numbers separated by commas : ', val=>{
//     let input = val.split(",");
//     let res = input.reduce(add,0)
//     console.log(`Sum of all numbers in the array [${val}] : ${res}`)
//     readline.close()
// })

// // /*9. Given an array of user objects, write a function to transform this array into an object where the
// // keys are user IDs and the values are the corresponding user objects.*/

// function change(users) {
//     return users.reduce((acc, user) => {
//       acc[user.id] = user;
//       return acc;
//     }, {});
//   }
  
//   const users = [
//     { id: 1, name: 'Alice', age: 28 },
//     { id: 2, name: 'Bob', age: 34 },
//     { id: 3, name: 'Charlie', age: 22 }
//   ];
  
//   const result = change(users);
//   console.log(result);

// // /*10 Create a Person class with a constructor that accepts name and age parameters. Add a
// // method describe that returns a string describing the person. */

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     describe(){
//         return `Hello!! My name is ${this.name} and I am ${this.age} years old.`
//     }
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// console.log('Introduction:')
// readline.question('Please enter your name : ',name=>{(
//     readline.question('Please enter your age : ',age=>{
//         let person = new Person(name, age);
//         console.log(person.describe())
//         readline.close()
//     })
// )})

// // /* 11.Create a Student class that extends Person and adds a grade property. Add a method study
// // that returns a string indicating the student is studying.*/


// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     describe(){
//         return `Hello!! My name is ${this.name} and I am ${this.age} years old.`
//     }
// }

// class Student extends Person{
//     constructor(name, age, grade){
//         super(name, age);
//         this.grade = grade;
//     }
//     study(){
//         return `${this.describe()} I am studying in the ${this.grade} grade.`
//     }
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// console.log('Introduction:')
// readline.question('Please enter your name : ',name=>{(
//     readline.question('Please enter your age : ',age=>{(
//         readline.question('Please enter your grade : ',grade=>{
//             let student = new Student(name, age, grade);
//             console.log(student.study())
//             readline.close()
//         })
//     )})
// )})

// // /* 12. Modify the fetchData function to randomly reject the promise with an error message 'Failed to
// // fetch data'. Handle this error using .catch when calling the function.*/

// function fetchData() {
//     return new Promise((resolve,reject) => {
//         let random = Math.random();
//         if(random < 0.5){
//             setTimeout(()=>{
//             reject('Failed to fetch data!!');
//             },2000);
//         } else {
//             setTimeout(() => {
//                 const data = [
//                     { id: 1, name: 'Spandan', age: 26 },
//                     { id: 2, name: 'Chris', age: 24 },
//                     { id: 3, name: 'Avesak', age: 23 },
//                     { id: 4, name: 'Ujjwal', age: 40 }
//                 ];
//                 resolve(data);
//             }, 2000);
//         }   
//     });
// }

// fetchData()
// .then(data => console.log(data))
// .catch(error => console.error(error));

// // /*13. Modify the fetchData function with async/await to handle errors using try/catch blocks. */

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         let random = Math.random();
//         if (random < 0.5) {
//             setTimeout(() => {
//                 reject('Failed to fetch data!!');
//             }, 2000);
//         } else {
//             setTimeout(() => {
//                 const data = [
//                     { id: 1, name: 'Spandan', age: 26 },
//                     { id: 2, name: 'Chris', age: 24 },
//                     { id: 3, name: 'Avesak', age: 23 },
//                     { id: 4, name: 'Ujjwal', age: 40 }
//                 ];
//                 resolve(data);
//             }, 2000);
//         }   
//     });
// }

// async function fetchAndHandleData() {
//     try {
//         const data = await fetchData();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }
// fetchAndHandleData();  

// // /*14. Given an array of users, where each user has a name and an array of hobbies, create a
// // function that returns an array of all unique hobbies using reduce.*/


// let users = [
//     { name: 'Spandan', hobbies: ['reading', 'coding', 'gaming']},
//     { name: 'Chris', hobbies: ['coding', 'gaming', 'swimming']},
//     { name: 'Avesak', hobbies: ['reading', 'swimming', 'hiking']},
//     { name: 'Ujjwal', hobbies: ['coding', 'gaming', 'hiking']}
// ];// Array creation
// function getUniqueHobbies(users) {
//     return users.reduce((uniqueHobbies, user) => {
//         user.hobbies.forEach(hobby => {
//             if (!uniqueHobbies.includes(hobby)) {//checking if the hobby is unique or not 
//                 uniqueHobbies.push(hobby);
//             }
//         });
//         return uniqueHobbies;
//         }, []);
// }
// console.log(getUniqueHobbies(users))

// // /*
// // 1. Why are promises used in JavaScript? Explain the advantages of using promises over
// // traditional callback functions.
// // Ans : Promises are used to handle asynchornous operations in javascript. Some advantages of using promises over traditional callback functions are:

// // Clarity and Simplicity:

// // Promises: Think of promises as a way to make plans. You tell your friend, "When you come back with the groceries,
// // let me know so I can continue cooking." This is clear and straightforward.
// // Callbacks: If you use callbacks, it’s like having to constantly check if your friend is back with the groceries 
// // while also doing other tasks. This can get confusing and messy.

// // Handling Problems:
// // Promises: With promises, if something goes wrong (like your friend can't find the groceries), they can tell you 
// // directly what happened. You have one place to handle any problems.
// // Callbacks: With callbacks, you have to check for problems at every step, which can get repetitive and easy to miss.

// // Chaining Tasks:
// // Promises: Promises let you easily line up tasks one after another. It enables us to work on other tasks if the current task is pending. This 
// // does not mean that the pending task will not be completed.Once the roadblock or 
// // Callbacks: Using callbacks, you'd have to set up everything in a way that could quickly become a tangled mess of instructions.


       






