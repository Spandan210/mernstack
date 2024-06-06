// /*1)Write code using if/else statements to check the
// strength of a password based on its length. Print messages like &quot;Strong password,&quot;
// &quot;Medium password,&quot; or &quot;Weak password&quot; depending on the length criteria (e.g., strong:
// &gt; 12 characters, medium: 8-12 characters, weak: less than 8 characters).*/

// const { stdin } = require('process');
// let password = 'abcdefgh12345';
// let len = password.length;
// if (len > 12) {
//     console.log('Strong password');
// }else if(len>=8 && len<=12){
//     console.log('Medium password');
// }
// else{
//     console.log('Weak Password');
// }

// /*2)Write a program using if/else to determine if a character entered
// by the user is a vowel (a, e, i, o, u) or a consonant. Consider uppercase and lowercase
// letters.*/

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// readline.question('Please enter an alphabet:', char =>{
//     var con = char.toUpperCase();
//     if(con == 'A'|| con =='E' || con =='I'||con=='O'||con=='U'){
//         console.log(`The character '${char}' is a vowel.`)
//     }
//     else{
//         console.log(`The character '${char}' is a consonant.`)  
//     }
//     readline.close();
// })

// /*3)Create a simple guessing game using if/else statements.
// Generate a random number between 1 and 10 and allow the user to guess it. Print
// messages like &quot;Correct!&quot; or &quot;Guess higher/lower&quot; based on their input.*/

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// readline.question('Guess any number from 1 to 10:', guess =>{
//     let num = Math.floor(Math.random()*10)+1;
//     console.log(`The lucky Number is ${num}`);
//     if(guess<=0 || guess>=11){
//         console.log('Please enter a number between 1 to 10');
//     }
//     else if(guess == num){
//         console.log('Correct!');
//     }
//     else if(guess<num){
//         console.log('Guess higher');
//     }
//     else{
//         console.log('Guess lower');
//     }
//     readline.close();
// })

// /*4)Write code using if/else to calculate the final price of a
// product considering a sales tax rate (e.g., 8%). Take the product price and tax rate as
// inputs and print the final price with tax.*/

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question('Enter the product price:', price =>{(
//     readline.question('Enter the sales tax rate (in %):', taxRate =>{
//         let tax = Number(price) * (Number(taxRate)/100);
//         let finalPrice = Number(price) + tax;
//         console.log(`The final price of the product is ${finalPrice}.`);
//         readline.close();
//     })
// )})

// /*5)Develop a basic calculator using if/else statements. Allow the user
// to enter two numbers and an operator (+, -, *, /). Based on the operator, perform the
// calculation and print the result.*/

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// readline.question('Enter the first number:', num1 =>{(
//     readline.question('Enter the second number:',num2=>{(
//         readline.question('What operation would you like to  with the numbers(Add:(+),Substract:(-),Multiply:(*) or Divide(/):', opr=>{
//             let result = 0;
//             if(opr == '+'){
//                 result = Number(num1) + Number(num2);
//             }
//             else if(opr == '-'){
//                 result = Number(num1) - Number(num2);
//             }
//             else if(opr == '*'){
//                 result = Number(num1) * Number(num2);
//             }
//             else if(opr == '/'){
//                 result = Number(num1) / Number(num2);
//             }
//             else{
//                 console.log('Invalid operator');
//             }
//             console.log(`The result of ${num1} ${opr} ${num2} is ${result}.`);
//             readline.close();
//         })
//     )})
// )})

// /*6)Write code using switch/case to recommend a
// movie genre based on a user&#39;s age. Use different cases for age ranges (e.g., children,
// teenagers, adults) and suggest appropriate genres (e.g., animation, action, drama).*/

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question('Enter your age:', age =>{
//     switch(true){
//         case(Number(age)<12):
//         console.log('I recommend you watch animated movies.');
//         break;
//         case(Number(age)>=12 && Number(age)<=18):
//         console.log('I recommend you watch action movies.');
//         break;
//         case(Number(age)>18):
//         console.log('I recommend the drama genre of movies to you.')
//         break;
//     }
//     readline.close();
// })

// /*7)Create a program using if/else to determine if a
// given date (e.g., stored in a variable) falls on a weekend (Saturday or Sunday).*/

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// readline.question('Enter a date (YYYY-MM-DD):', date =>{
//     let d = new Date(date);
//     let day = d.getDay();
//     console.log(day);
//     if(day == 0 || day == 6){
//         console.log('It is a weekend');
//     }
//     else{
//         console.log('It is a weekday');
//     }
//     readline.close();
// })

// /*8)Write code using if/else statements to check if a number
// is positive, zero, or negative. Print the corresponding message.*/


// const readline = require('readline').createInterface({
//     input: process.stdin,
//         output: process.stdout
//     })
// readline.question('Enter a number:', num=>{
//     let num1 = Number(num);
//     if(num1==0){
//         console.log('The number is zero.');
//     }
//     else if(num1>0){
//         console.log('The number is positive.');
//     }
//     else{
//         console.log('The number is negative.');
//     }
//     readline.close();
// })

// /*9)Create a program using if/else to determine if a number is divisible
// by 3, 5, or both. Print a message indicating divisibility or non-divisibility.*/

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// readline.question('Enter any number:', num=>{
//     let num1 = Number(num);
//     if (num1%3==0 && num1%5==0){
//         console.log('The number is divisible by 3 and 5.');
//     }
//     else if(num1%3==0 && num1%5!=0){
//         console.log('The number is divisible by 3 only.');
//     }
//     else if (num1%5==0 && num1%3!=0){
//         console.log('The number is divisible by 5 only.');
//     }
//     else{
//         console.log('The number is not divisible by 3 or 5.');
//     }
//     readline.close();
// })

// /*10)Write code using if/else to check if the sum of two user-entered
// numbers is even or odd. Print the result.*/

// const readline = require('readline').createInterface({
//     input: process.stdin,
//         output: process.stdout
//     })
// readline.question('Enter first number:',num1=>{(
//     readline.question('Enter second number:',num2=>{
//         let n1 = Number(num1);
//         let n2 = Number(num2);
//         let sum = n1+n2;
//         if(sum==0){
//             console.log('The sum is zero.');
//         }
//         else if(sum%2==0){
//             console.log('The sum is even.');
//         }
//         else{
//             console.log('The sum is odd.');
//         }
//         readline.close();
//     })
// )})