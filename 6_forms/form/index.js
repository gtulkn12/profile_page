// listne to submit event on form #user_info

document
  .querySelector("#user_info")
  .addEventListener("submit", handleFormSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault(); //stops form refreshing the page
  console.log("submitted");
}
