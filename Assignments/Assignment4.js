// //1.Write a function that takes two parameters and returns their sum.

// function sum(a,b){
//     return a+b;
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question('Please enter first number : ',num1=>{(
//     readline.question('Please enter second number : ',num2=>{
//         n1 = Number(num1);
//         n2 = Number(num2);
//         let res = sum(n1,n2);
//         console.log(`Sum of ${num1} and ${num2} : ${res}`);
//         readline.close();
//     })
// )})    

// //2. Create a function that calculates the average of an array of numbers.

// let num = [1,3,5,7,2,9,10];
// let sum = 0;
// function average(arr){
//     for(i=0;i<=num.length-1;i++){
//         sum = sum + num[i];
//     }
//     return sum/num.length;
// }

// let res = average(num);
// console.log(`The average of the array ${num} : ${res}`);

// //3. Write a function that checks if a given number is even or odd.

// function type(num){
//     if(num%2==0){
//         return "even";
//     }
//     else{
//         return "odd";
//     }
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question('Please enter any number:', n1=>{
//     let num1 = Number(n1);
//     let res = type(num1);
//     readline.close();
//     console.log(`${n1} is an ${res} number.`);
// })


// //4. Create a function that reverses a string.\

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question('Please enter any string character:', input=>{
//     function rev(inp){
//         let str = inp.split("");
//         let revStr = str.reverse();
//         return revStr.join("");
//     }
//     let res = rev(input);
//     readline.close();
//     console.log(`The reverse of ${input} : ${res}`);
// })

// // 5. Write a function that finds the maximum value in an array of numbers.

// let res = 0;
// function great(num){
//     for(i=0;i<=num.length-1;i++){
//         if(res<=num[i]){
//             res = num[i];
//         }        
//     }
//     return(res);
// }
// let num1 = [12,21,32,44,5];
// let numb = great(num1);
// console.log(`The maximum value in the array [${num1}] is ${numb}.`)

// //6. Create a function that converts Celsius to Fahrenheit.

// function temp(cel){
//     let fah = (cel * 9/5) + 32;
//     return fah;
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question('Please enter temperature in celsius scale: ', value=>{
//     let tem = Number(value);
//     let res = temp(tem);
//     readline.close();
//     console.log("Temperature Converter:");
//     console.log(`${value}°C : ${res}°F`)
// })

// //7. Write a function that generates a random number between a given minimum and maximum.

// function numGen(a,b){
//     let num = Math.floor(Math.random() * (b - a + 1)) + a
//     return num
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// console.log('Random Number Generator:')
// readline.question('Please enter lower number limit: ',low=>{(
//     readline.question('Please enter upper number limit: ', high=>{
//         let num1 = Number(low);
//         let num2 = Number(high);
//         let res = numGen(num1, num2);
//         readline.close();
//         console.log(`Random number between ${num1} and ${num2} is: ${res}`);
//     }
// ))})

// // 8. Create a function that checks if a string is a palindrome.

// function check(inp){
//     let str = inp.split("");
//     let revStr = str.reverse();
//     return revStr.join("");
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// console.log('Palindrome Checker:')
// readline.question('Please enter any word : ', val=>{
//     let str1 = val.toLowerCase();
//     let val1 = check(str1);
//     if(val1==str1){
//         console.log(`The word ${val} is a palindrome`);
//     }
//     else{
//         console.log(`The word ${val} is not a palindrome`);
//     }
//     readline.close();
// })


// // 9. Write a function that capitalizes the first letter of each word in a sentence.

// function capital(sen){
//     let str = sen.split("");
//     for(i=0;i<=str.length;i++){
//         if(str[i-1]==" " || i==0){
//             str[i] = str[i].toUpperCase();
//         }
//     }
//     return str.join("");
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// console.log('Hello !! This Program Capitalizes The First Word Of Every Sentence:');
// readline.question('Please enter your phrase : ', inp=>{
//     let res = capital(inp);
//     console.log(res);
//     readline.close();
// });

// //10. Create a function that returns the factorial of a given number.

// function fact(num){
//     let fac = 1;
//     while(num>0){
//         fac=fac*num;
//         num--;
//     }
//     return fac;
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question('Please enter any number : ',num=>{
//     let num1 = Number(num);
//     let res = fact(num1);
//     if(num1<0){
//         console.log("Factorial of a negative number is not defined.");
//     }
//     else{
//         console.log(`The factorial of ${num1} is ${res}.`);
//     }
//     readline.close();
// })

// //11. Write a function that counts the number of occurrences of a specific element in an array.

// function count(arr,ele){
//     let count = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===ele){
//             count++;
//         }
//     }
//     return count;
// }

// let arr1 = [1,2,3,4,2,3,4,5,4,5,5,4,5];
// let ele = 3;
// let res = count(arr1,ele);
// console.log(`The number os times ${ele} is repeated in the array [${arr1}] : ${res}`);

// //12. Create a function that checks if a given year is a leap year.

// function year(val){
//     if(val%4 ===0 && val%100!==0 || val%400===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
//  const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//  })
//  console.log("Leap Year Finder:")
//  readline.question('Please enter any year: ',val1=>{
//     let barsa = Number(val1);
//     let res = year(barsa);
//     if(res==true){
//         console.log(`${val1} is a leap year.`);
//     }
//     else{
//         console.log(`${val1} is not a leap year.`);
//     }
//     readline.close();
//  })

// //13. Write a function that merges two arrays and returns the sorted result.

// function merge(arr1,arr2){
//     let merged = [...arr1,...arr2];
//     return merged;
//     // return merged.sort((a,b)=>a-b); For numerical array to sort in ascending order
// }

// let array1 = ['Spandan','Chris','Ujjwal'];
// let array2 = ['Shrestha','Grg','Dhakal'];
// let res = merge(array1,array2);
// console.log(`The merger of arrays [${array1}] & [${array2}] : [${res}]`);

// //14. Create a function that converts a number to its Roman numeral representation.

// function roman(num) {
//     if (isNaN(num))
//         return NaN;
//     var digits = String(+num).split(""),
//         key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
//                "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
//                "","I","II","III","IV","V","VI","VII","VIII","IX"],
//         roman = "",
//         i = 3;
//     while (i--)
//         roman = (key[+digits.pop() + (i * 10)] || "") + roman;
//     return Array(+digits.join("") + 1).join("M") + roman;
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// console.log('Roman Numeral Conversion:')
// readline.question('Please enter any number :',num1=>{
//     let res = roman(Number(num1));
//     console.log(`The roman numeral representation of ${num1} : ${res}`)
//     readline.close()
// })

// //15. Write a function that finds the second smallest element in an array of numbers.

// function secondSmallest(arr){
//     let min = Math.min(...arr);
//     let secondMin = Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > min && arr[i] < secondMin){
//             secondMin = arr[i];
//         }
//     }
//     return secondMin === Infinity ? null : secondMin;
// }
// let array = [1,2];
// console.log(`The second smallest element in the array [${array}] is ${secondSmallest(array)}.`);

// //16. Create a function that calculates the area of a circle given its radius.

// function circle(rad){
//     let area = Math.PI*(rad**2);
//     return area;
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// console.log("Circle Area Calculator:")
// readline.question('Please enter the radius of the circle : ', r=>{
//     let res = circle(Number(r));
//     console.log(`The area of the circle with radius ${r} : ${res}.`)
//     readline.close()
// })

// // 17. Write a function that truncates a string if it exceeds a specified length and appends "..." to the end.

// function app(str){
//     let len = 10;
//     if(str.length > len){
//         return str.substring(0,len) + "...";
//     }
//     else{
//         return('Length is viable.')
//     }
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// console.log('Length checker(10):');
// readline.question('Please enter any word : ', val=>{
//     let res = app(val);
//     console.log("Result:");
//     console.log(res);
//     readline.close();
// })


// //18. Create a function that checks if a given string contains only digits.

// function check(str){
//     for(let i = 0; i < str.length; i++){
//         if(!Number.isInteger(Number(str[i]))){
//             return false;
//         }
//     }
// }
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// console.log('Digit checker:');
// readline.question('Please enter any word : ', val=>{
//     let res = check(val);
//     if(res==false){
//         console.log("The string contains non-digit characters.");
//     }
//     else{
//         console.log("The string contains only digits.");
//     }
//     readline.close();
// })

// //19. Write a function that removes all falsy values (false, null, 0, ";", undefined, and NaN) from an array.

// function remove(arr){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]==false||arr[i]==null||arr[i]==";"||arr==undefined||arr==NaN){
//             arr.splice(i,1);
//         }
//     }
//     return arr;
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// console.log('Falsy value remover:');
// readline.question('Please enter an array of values separated by commas : ', val=>{
//     let arr1 = val.split(',');
//     let res = remove(arr1);
//     console.log(`The array ${arr1} after falsy values are removed : ${res}.`)
//     readline.close()
// })

// //20. Create a function that generates a new array with unique values from a given array.
// function unique(arr){
//     let uniqueArr = [];
//     for(i=0;i<arr.length;i++){
//         if(uniqueArr.includes(arr[i])==false){
//             uniqueArr.push(arr[i]);
//         }        
//     }
//     return uniqueArr;
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// console.log("Unique Array Generator:");
// readline.question('Please enter an array of values separated by commas : ', val=>{
//     let arr1 = val.split(',');
//     let res = unique(arr1);
//     console.log(`The array [${arr1}] after removing duplicates : [${res}].`);
//     readline.close()
// })

















