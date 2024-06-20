const helloElement = document.getElementById('hello');
console.log(helloElement.textContent);

var contentElement = document.getElementsByClassName('content');
console.log(contentElement[0].textContent);
console.log(contentElement[0].textContent);

let listElements = document.getElementsByTagName('li');
console.log(listElements.length);

helloElement.textContent="Hello Spandan!";
console.log(helloElement.textContent)

contentElement = document.querySelector('.content');
contentElement.innerHTML = 'It was nice meeting you!!'

var inputElement = document.getElementById("myInput");
console.log(inputElement.type);
console.log(inputElement.value);

inputElement.setAttribute("value","This is a new & improved value");
console.log(inputElement.getAttribute("value"))


var element = document.getElementById('content');
if(element.hasAttribute("id")){
    console.log("Attribute Exits.");
}
else{
    console.log("Attribute doesn't exist.");
}

