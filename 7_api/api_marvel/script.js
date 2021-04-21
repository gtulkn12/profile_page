document
  .querySelector("#search_container")
  .addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.document.tar;
}

function createCard(card) {
  const container = document.querySelector("#card_container");

  const newDiv = document.createElement("div");

  newDiv.innerHTML = `
  `;
}

function display(search) {
  const API = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&limit=50&apikey=bc8fb4ad6e56a860a7726b8402e566fe
`;

  let response = fetch(API)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    });
}

display("black");
