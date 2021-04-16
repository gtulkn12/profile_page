/*
When the button#counter_btn is clicked, display how many times it has been clicked in the span#click_count
*/

// YOUR CODE GOES HERE
let click = 0;
document.getElementById("counter_btn").onclick = function () {
  click++;
  document.getElementById("click_count").innerHTML = click;
};

/*
When the button#reset_btn is clicked, reset the button click counter to 0
*/

// YOUR CODE GOES HERE
document.getElementById("reset_btn").onclick = function () {
  click = 0;
  document.getElementById("click_count").innerHTML = click;
};
