//For Loop:

// for(i=1;i<=10;i++){
//     if(i == 5 || i==6 || i==7){
//         continue;
//     }

//     console.log(i);
// }


// While loop:

// let i =0;
// while(i<10){
//     i++;
//     if(i == 5 || i==6 || i==7){
//         continue;    
//     }
//     console.log(i);
// }


// Do... while loop:

// i=1
// do{
//     console.log(i);
//     i+=4;
// }while(i<=10);

// WAP to print even numbers from 2 to 10 using while loop:

// i = 1
// while(i<=10){
//     if(i%2==0){
//         console.log(i);
//     }
//     i++;
// }

// WAP using for loop to calculate the sum of numbers from 1 to 10:

// let sum = 0;

// for(i=1;i<=10;i++){
//     sum+=i;
// }
// console.log(`The sum of numbers from 1 to 10: ${sum}`);

// WAP using while loop to find the factorial of a given number(e.g: 5)


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Please enter a number:',num=>{
// let num1 = Number(num);
// let fact = 1;

// while(num1>0){
//         fact*=num1;
//         num1--;
//     }

//     console.log(`The factorial of ${num} is ${fact}.`);

//     readline.close();
// });


// WAP using for loop to print the square of numbers from 1 to 5:

// let res;
// for(i=1;i<=5;i++){
//     res = i*i;
//     console.log(`The square of ${i} is ${res}.`);
// }

// WAP using while loop to print the cube of numbers from 1 to 5:

// let res;
// for(i=1;i<=5;i++){
//     res= i**3;
//     console.log(`The cube of ${i} is ${res}.`);
// }

// WAP using for loop to iterate through an array of names and print each name in the console:

// let names = ['Spandan', 'Swoyam', 'Shashwot'];

// for(i=0;i<names.length;i++){
//     console.log(names[i]);
// }

// WAP using a while loop to find the sum of alements in an array of numbers:

// let arr = [1,2,3,4,5,6,7,8,9,10,11];
// let sum = 0;
// let i = 0;

// while(i<arr.length){
//     sum+=arr[i];
//     i++;
// }
// console.log(`Sum : ${sum}`);

// WAP using for loop that prints the elements of the array in reverse order:

let arr = [1,2,3,4,5,6,7,8,9];

for(i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
}

