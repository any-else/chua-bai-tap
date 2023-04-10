let pElement = document.querySelector("p");
pElement.style.display = "inline";
let aElement = document.querySelector("#an");
aElement.setAttribute("href", "#");

let menuElement = document.querySelector("#menu");
menuElement.style.display = "none";
let buttonElement = document.querySelector("button");
buttonElement.style.display = "block";
buttonElement.style.marginTop = "20px";
function an() {
  if (menuElement.style.display === "block") {
    menuElement.style.display = "none";
    aElement.innerText = "an tim kiem nang cao";
  } else {
    menuElement.style.display = "block";
    aElement.innerText = "hien tim kiem nang cao";
  }
}
