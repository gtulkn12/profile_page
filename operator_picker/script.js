/*
Given var numbers = [5, 3, -2, 8, 11, 7, 9, 6, 12, 4] write a script that:

Prompts the user to pick an operator (+ or - or * (+ or - or * or /) or the word "random)

Alerts the sum, difference, product or quotient of quoient of the numbers when the operatpr is +, -, *, and / respectively

When the word random is entered in the prompt, picks a random operator and uses it on all the numbers

*/
var numbers = [5, 3, -2, 8, 11, 7, 9, 6, 12, 4];
var calculation = 0;
var operators = ["+", "-", "*", "/"];

myFunction(numbers);

function myFunction(arr) {
  var userInput = prompt("Please enter an Math operator or Random").toLowerCase;
  operator = parseInt(userInput)
  if (operators.includes(userInput)) {
    for (var i = 0; i < arr.length; i++) {

      calculation userInput = arr[i];
    }
  }
  alert(calculation);
}

function ranOp() {}
