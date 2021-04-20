document
  .querySelector("#btn_container")
  .addEventListener("click", function (e) {
    const searchTerm = e.target.innerText;
    const API = `https://api.giphy.com/v1/gifs/search?api_key=VB6a5K43xm8SbaugVIokI8sh4Fajp7I9&q=${searchTerm}`;
    fetch(API)
      .then((res) => res.json())
      .then((json) => display(json.data));
  });

function display(data) {
  const container = document.querySelector("#card_container");

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

  //   const container = document.querySelector("#container");
  //   const myDiv = document.createElement("div");

  //   myDiv.innerHTML = `
  // <div class="card" style="width: 18rem;">
  //         <img class="card-img-top" src="..." alt="Card image cap">
  //         <div class="card-body">
  //                 <h5 class="card-title">Card title</h5>
  //                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //                 <a href="#" class="btn btn-primary">Go somewhere</a>
  //         </div>
  // </div>
  //           `;
}

///////////////////Testing Examples Below

// fetch(API)
//   .then((res) => res.json())
//   .then((json) => {
//     console.log(json.data);
//   })
//   .catch((error) => console.log(error));

//Axios

// axios.get(API).then((data) => console.log(data.data.data));

// function getData(searchTerm) {
//         const API =
//   'https://api.giphy.com/v1/gifs/search?api_key=VB6a5K43xm8SbaugVIokI8sh4Fajp7I9&q=${searchTerm}';

// fetch(API)
//   .then((res) => res.json())
//   .then((json) => {
//     console.log(json.data);
//   })
//   .catch((error) => console.log(error));
// }

// document.querySelector(".btn")

// async function(){
//         const gifs = awaits getData("elonmusk")
// }

// async function getData(searchTerm) {
//         const API =
//   'https://api.giphy.com/v1/gifs/search?api_key=VB6a5K43xm8SbaugVIokI8sh4Fajp7I9&q=${searchTerm}';

//   try{

//   const res = await fetch(API)
//   const json = await res.json()

//   return json.data;
//   } catch (error) {
//           console.log(error);
//   }
// }
