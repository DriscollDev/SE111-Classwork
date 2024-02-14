var name = "Conor";
var lastName = "Driscoll";
var message = `Hello welcome to the JavaScript lesson ${name}`;
console.log(message);
//alert(message)
//example of traditional string concatination
var message2 = "Hello " + name + " " + lastName + " welcome to the lesson";
console.log(message2);

var addProblem = 12+4
function outputToConsole(data){
    console.log(data);
}
outputToConsole(addProblem);

//document.getElementById("header").innerHTML = message2
var myButton = document.querySelector("button");
//add event listener to button
myButton.addEventListener("click",changePage)
function changePage(){
    document.querySelector('h1').innerHTML = message;
    document.querySelector('h1').style.color = "white";
    document.querySelector('body').style.backgroundColor = "maroon";
}
//var yourName = prompt("please enter your name")
//document.querySelector('h1').innerHTML = `Hello ${yourName} thanks for entering your name`
var dataPromptButton = document.getElementById('promptButton');
function dataPrompt(){
    alert(`My name is ${name}`)
    var yourName = prompt("Please enter your name");
    alert(`Hello ${yourName} nice to meet you`);

    var yourLastName = prompt("Please tell me your last name");
    alert(`Hello once again ${yourName} ${yourLastName}`);

    var firstNumber = prompt("Lets add some numbers, enter the first number");
    var secondNumber = prompt("Enter the second number");
    var result = Number(firstNumber) + Number(secondNumber);
    alert(`The total is ${result}`);
    
    var documentBody = document.querySelector('body');
    var outputData = document.createElement('p');
    outputData.innerHTML = `Your name is ${yourName} ${yourLastName}<br> Math: ${firstNumber} + ${secondNumber} = ${result}<br> Thanks from ${name} ${lastName}`;
    documentBody.appendChild(outputData);
}
dataPromptButton.addEventListener("click",dataPrompt);