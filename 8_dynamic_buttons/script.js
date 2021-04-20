/*
1. Add Action Listner to #user_input w/ submit - element , create button function
2. Create Function - function createButton(e)
3. prevent page from refreshing - e.preventDefault
4. get input box value
5. create variable  w/ queryselector
6. create variable w/ createElement(div) to add to button_Container
7. create variable to collect user input
8. create innerHTML w/ buttton named after userInput
9. add button to button_container div
10. get api data based on user input
11. create card with API gif
12. display gif to new div / container
*/

document.getElementById("input").addEventListener("submit", createButton);
document
  .querySelector("#btn_container")
  .addEventListener("click", function (e) {
    const searchTerm = e.target.innerText;
    const API = `https://api.giphy.com/v1/gifs/search?api_key=VB6a5K43xm8SbaugVIokI8sh4Fajp7I9&q=${searchTerm}`;
    fetch(API)
      .then((res) => res.json())
      .then((json) => display(json.data));
  });

function createButton(e) {
  e.preventDefault();
  let container = document.getElementById("btn_container");
  let userInput = document.getElementById("search").value;
  document.getElementById("search").value = "";
  //let newButton = document.createElement("button");
  //   newButton.setAttribute("class", "btn btn-primary");
  //   newButton.setAttribute("type", "button");
  //   newButton.innerText = userInput;
  const myDiv = document.createElement("div");
  myDiv.innerHTML = `<button class="btn btn-primary" type="submit">${userInput}</button>
    `;
  container.appendChild(myDiv);
}

function display(data) {
  const container = document.querySelector("#card_container");
  console.log(data);

  container.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let obj = data[i];

    const myDiv = document.createElement("div");
    myDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
                <img class="card-img-top" src=${obj.images.downsized.url} alt="Card image cap">
                <div class="card-body">
                        <h5 class="card-title">${obj.title}</h5>
                        <a href=${obj.url} class="btn btn-primary">Go somewhere</a>
                </div>
        </div>
            `;
    container.appendChild(myDiv);
  }
}
