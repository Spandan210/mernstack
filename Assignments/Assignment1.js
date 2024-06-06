//1.WAP using two variables, one for your name and another for your age. Print a sentence combining those variables.
let name = "Spandan Shrestha"
var age = "26"
console.log("My Name is " + name + " and i am " + age + " Years old");


//2.WAP to assign the value 10 to a variable. Then multiply that variable by itself and store the result in another variable. Print the final value.
var a = 10;
var mulResult = a * a;
console.log(mulResult);


//3.WAP to check if the character stored in a variable is uppercase or lowercase. Print &quot;uppercase&quot; or &quot;lowercase&quot; accordingly. (Hint: Use character codes) Function to check if a character is uppercase or lowercase
function check(char) {
    var charCode = char.charCodeAt(0);
    // Checking uppercase range
    if (charCode >= 65 && charCode <= 80) {
        console.log("uppercase");
    } 
    // Checking lowercase range
    else if (charCode >= 97 && charCode <= 122) {
        console.log("lowercase");
    } 
    // If the character is not a letter
    else {
        console.log("The character is not a letter.");
    }
}
var char = 's';
check(char); 

char = 'P';
checK(char); 

char = '@';
check(chara); 


//4.WAP to declare two variables with numeric values. Add them together and print the sum. Then, subtract the smaller number from the larger number and store the difference in a new variable. Print the difference.
let a = 42;
let b = 21;

//Sum
var sum = a + b;
console.log(`Sum : ${sum}`);

//Bigger number
var large = Math.max(a, b);

//Smaller number
var small = Math.min(a, b);

//Difference
var diff = large - small;
console.log("Difference: ", diff);


//5.Imagine you have a variable storing a product price. WAP to apply a 10% discount and print the discounted price.
var productPrice = 3100;

// Discounted price
var discount = 0.10; //10 % discount
var discountPrice = productPrice - (productPrice * discount);

console.log(`Marked Price: ${productPrice}`); 
console.log(`Price after discount: ${discountPrice}`);