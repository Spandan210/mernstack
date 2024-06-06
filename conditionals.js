// console.log('10'+'10')
// console.log('10'-'10')
// console.log('10'+ +10)
// console.log(10 + +'10')
// console.log('10' -'10')

// //Conditional Statements

// //if else
// let age = 25;
// if(age>=18){
//     console.log('You are eligible to vote.');
// }
// else{
//     console.log('You are not eligible to vote');
// }

// //if.. else if.... else...

// let fheight = 30;
// let weight = 50;
// let mheight = fheight*0.3048;
// let bmi = weight/(mheight*mheight);
// console.log(bmi);

// if (bmi<18.5){
//     console.log('You are underweight');
// }
// else if (bmi>=18.5 && bmi <=24.9){
//     console.log('You have normal bmi index');
// }
// else if (bmi>=25 && bmi<=29.9){
//     console.log('You are overweight');
// }
// else {
//     console.log('You are obese');
// }

// //Switch case
// let day = 2;
// switch(day){
//     case 1:
//         console.log('Sunday');
//         break;
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Tuesday');
//         break;
//     case 4:
//         console.log('Wednesday');
//         break;
//     case 5:
//         console.log('Thursday');
//         break;
//     case 6:
//         console.log('Friday');
//         break;
//     case 7:
//         console.log('Saturday');
//         break;
//     default:
//         console.log('Invalid day');
//         break;
// }

//BMI using switch
// let fheight = 30;
// let weight = 50;
// let mheight = fheight*0.3048;
// let bmi = weight/(mheight*mheight);
// console.log(bmi);

// switch(true){
//     case(bmi<18.5):
//         console.log('You are underweight');
//         break;
//     case(bmi>=18.5 && bmi <=24.9):
//         console.log('You have normal bmi index');
//         break;
//     case(bmi>=25 && bmi<=29.9):
//         console.log('You are overweight');
//         break;
//     default:
//         console.log('You are obese');
//         break;
// }

// WAP using if/else statements to check if  agiven string is longer than 10 characters or not

// let name = 'Spandan Shrestha';
// let len = name.length;
// console.log(len);
// if (len > 10){
//     console.log('String is longer than 10 characters');
// }
// else{
//     console.log('String is not longer than 10 characters');
// }


//WAP using if/else statements to check if the given year is a leap year or not
//Formula : (year%4 ===0 && year%100!==0) or (year%400===0)
// let year = 2027;
// let res = (year%4 ===0 && year%100!==0);
// // console.log(res);
// if(res==true){
//     console.log('Leap year');
// }
// else{
//     console.log(year + "year is not a leap year");
//     console.log(` ${year} year is not a leap year`);
// }

//WAP that takes a month number(1-12) as input and returns the number of days in that month using switch case

let month = 12;

switch(month){
    case 1:
        console.log('31 days');
        break;
    case 2:
        console.log('28 days');
        break;
    case 3:
        console.log('31 days');
        break;
    case 4:
        console.log('30 days');
        break;
    case 5:
        console.log('31 days');
        break;
    case 6:
        console.log('30 days');
        break;
    case 7:
        console.log('31 days');
        break;
    case 8:
        console.log('31 days');
        break;
    case 9:
        console.log('30 days');
        break;
    case 10:
        console.log('31 days');
        break;
    case 11:
        console.log('30 days');
        break;
    case 12:
        console.log('31 days');
        break;
    default:
        console.log('Invalid month');
        break;
}





