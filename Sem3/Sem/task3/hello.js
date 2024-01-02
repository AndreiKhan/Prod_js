const login = getLogin();

const h1El = document.querySelector("h1");
h1El.textContent = `Hello, ${login}`;

const btnEl = document.querySelector("button");

btnEl.addEventListener("click", returnOnMain);

function returnOnMain() {
  delProfile();
  window.open("main.html", "_self");
}