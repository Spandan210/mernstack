//Simple Constructor Function:

// function person(name,age){
//     this.name = name;
//     this.age = age;
//     console.log(`Hi my name is ${name} & I am ${age} years old.`);
// }

// let john = new person('Spandan',26);

//Callback Function:

// function greet(name, fallback){
//     fallback(name);
// }

// greet('John',sayName);

// function sayName(name){
//     console.log(`Hello ${name}!!`);
// }

// function add(num1,num2,diff){
//     diff(num1,num2);
// }


// add(10,20,subs)

// function subs(num1,num2){
//     console.log("Difference : "+(num1-num2));
// }

//Promise Function

// const promise = new Promise((resolve, reject)=>{
//     const sum = 4;
//     if(sum > 5){
//         resolve("Sum is greater than 5.");
//     }
//     else{
//         reject("Sum is less than or equal to 5.");
//     }
// });

// promise.then((msg)=>{
//     console.log(msg);
// })
// .catch((err)=>{
//     console.error(err);
// });



// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question('Please enter any number: ', num1=>{(
//     readline.question('Please enter another number: ',num2=>{
//         const prom = new Promise((resolve,reject) =>{
//             var diff = Number(num1)- Number(num2);
//             if(diff<5){
//                 resolve(`${diff} is less than 5.`);
//             }
//             else{
//                 reject(`${diff} is greater than or equal to 5.`);
//             }
//         })
//         prom.then((msg)=>{
//             console.log(msg);
//         })
//         .catch((err)=>{
//             console.error(err);
//         })
//     readline.close();    
//     })
// )})

//async ...await keyword


// function fetchData(){
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             resolve("Data Fetched!!");
//         },1000);
//     });
// }

// async function getData(){
//     const data = await fetchData();
//     console.log(data);
// }

// getData();


const numbers = [10,20,30,40,50];

//find function : shows the first entity from the array which satisfies the condition and loop ends so only one result is returned.

// res = numbers.find(num => num>50);
// console.log(res);

//filter function : shows entity that satisfy the given condition from the whole array

// const filnum = numbers.filter(num => num>30);
// console.log(filnum);

//map function : operations on the whole array without changing the original array

// const mapnum = numbers.map(num => num**2);
// console.log(mapnum);
// console.log(numbers);

/*Rest & Spread Operator:
 
Both of these operators are denoted by the same expression i.e (...) three dots. According to the situation & requirement we make use of the operators

*/

//Spread Operator: Generally used to expand/concatenate arrays


// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

//Before Spread:

// for(i=0;i<arr2.length;i++){
//     arr1.push(arr2[i]);
// }
// console.log(`Sum of array : [${arr2}`);

// After spread:

// let sum = [...arr1,...arr2];
// console.log(`Sum of array : [${sum}]`)

//Rest Operator

let arr1 = [4,5,6,7,8];

//Before rest was used

// let first = arr1[0];
// let rest = arr1.slice(1);
// console.log(`First Element : [${first}] `);
// console.log(`Rest of the elements : [${rest}]`);



