// listne to submit event on form #user_info

document
  .querySelector("#user_info")
  .addEventListener("submit", handleFormSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault(); //stops form refreshing the page
  console.log(evt);

  const name = evt.target.name.value;
  const email = evt.target.name.value;
  const date = evt.target.name.value;
  const password = evt.target.name.value;
  const image = evt.target.name.value;

  const container = document.getElementById("container");
  const myDiv = document.createElement("div");

  myDiv.innerHTML = `
  <p>${name}</p>
  <p>${email}</p>
  <p>${password}</p>
  <p>${date}</p>
  `;

  container.appendChild(myDiv);

  //   const fullname = evt.target.name.value;
  //   const email = evt.target.email.value;
  //   const password = evt.password.name.value;
  //   const date = evt.target.date.value;

  //   const p = document.createElement("p");
  //   p.innerHTML = name;
  //   CredentialsContainer.appendChild(p)
}
