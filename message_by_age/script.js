/*
You do: Message-By-Age (if-else) (15min)
 Use the if -else conditional statements to create a web page that propmts a user for te age and pops an alerts with a greeting specific to their age.
 Below are the age groups:
 [0-1[          :baby
 [1-3[          :toddler
 [3-5[          :preschooler
 [5-12[          :gradeschooler
 [12-18[          :teen        
 [18-21[          :yound adult
 [21 and above [          :adult
*/

function ageMessage(age) {
  let message = "";

  if (age > 0 && age <= 1) {
    message = "baby";
  } else if (age > 1 && age <= 3) {
    messgae = "toddler";
  } else if (age > 3 && age <= 5) {
    messgae = "preschooler";
  } else if (age > 5 && age <= 12) {
    messgae = "gradeschooler";
  } else if (age > 12 && age <= 18) {
    messgae = "teen";
  } else if (age > 18 && age <= 21) {
    messgae = "young adult";
  } else if (age > 21) {
    messgae = "adult";
  } else {
    message = "${age} is invalid: Please enter a number greater that zero!!";
  }
  return message;
}

var message = {};

function myFunction() {
  var userInput = prompt("Please enter your Age:");
  alert("Your age is " + userInput);
}
