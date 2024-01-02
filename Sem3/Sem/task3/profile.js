const loginEl = document.getElementById("login");
const passwordEl = document.getElementById("password");
const btnLoginEl = document.getElementById("btn");
const errorMassageEl = document.getElementById("errorMassage");


btnLoginEl.addEventListener("click", loginProfile);

function loginProfile() {
  const login = loginEl.value;
  const password = passwordEl.value;

  const profile = findProfileByLogin(login);

  if (profile && password === profile.password) {
    setLogin(login);
    window.open("hello.html", "_self");

  } else {
    errorMassageEl.textContent = "Вы ввели неверный логин и пароль";
  }
}