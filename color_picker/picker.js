/*
 Prompt user for imput
 Rainbow colors and their hexcodes
 Alert a value

*/

var colorDictionary = {
  red: "#FF0000",
  orange: "#FFA500",
  yellow: "#FFFF00",
  green: "#008000",
  blue: "#0000FF",
  indigo: "#4B0082",
  violet: "#EE82EE",
  random: ranColor(),
};

function myFunction() {
  var color = prompt(
    "Please enter a Color or Random to get the related Hex Code."
  ).toLowerCase();
  if (color != null && colorDictionary.hasOwnProperty(color)) {
    document.getElementById(
      "color_button"
    ).innerHTML = `You selected the color ${color}! Your HexCode is: ${colorDictionary[color]}\nClick here to enter new color.`;
    document.body.style.backgroundColor = colorDictionary[color];
  } else {
    alert(
      "The color you enterd is not a Rainbow Color, Please enter a Rainbow Color."
    );
  }
}

function ranColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function ranColorAlt() {
        var hexCode = "#";
        var ranColor = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];     
        if {var i = 0; i < 6; }   
        var randIdx = Math.floor(Math.random() * ranColor.length)
        hexCode += randIdx;
        
}
