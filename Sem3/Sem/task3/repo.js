const profilesKey = "profiles";
const loginKey = "login";

function saveProfile(login, password) {
  //   localStorage.setItem(profilesKey, JSON.stringify({ login, password }));

  if (localStorage.getItem(profilesKey)) {
    const profilesList = JSON.parse(localStorage.getItem(profilesKey));
    profilesList.push({ login, password });
    localStorage.setItem(profilesKey, JSON.stringify(profilesList));
  } else {
    localStorage.setItem(profilesKey, JSON.stringify([{ login, password }]));
  }
}

function findProfileByLogin(login) {
  const profilesList = JSON.parse(localStorage.getItem(profilesKey));
  return (
    profilesList.find((el) => {
      return el.login === login;
    }) || null
  );
}

function setLogin(login) {
  localStorage.setItem(loginKey, login);
}

function getLogin() {
  return localStorage.getItem(loginKey);
}

function delProfile() {
  localStorage.removeItem(loginKey);
}