const yearOfBirthday = prompt("Enter ur date of Birthday:");
const city = prompt("Enter ur city:");
const favoriteSport = prompt("Enter ur favorite sport:");
const age = yearOfBirthday? new Date().getFullYear() - yearOfBirthday: "Sad, that you didn want enter ur year";

let cityText;

const capitals = { Kyiv: "Ukraine", Washington: "USA", London: "Britain" };
if (city) {
  if (Object.keys(capitals).includes(city)) {
    cityText = `You live in the capital of ${capitals[city]}`;
  } else {
    cityText = `You live in the city ${city}`;
  }
} else {
  cityText = "Sad, that you didn want enter ur city";
}

let sportText = "";

const sports = { Football: "Ronaldo", Box: "Wilder", Basketball: "Jordan" };
if (favoriteSport) {
  if (Object.keys(sports).includes(favoriteSport)) {
    sportText = `Well, do you wanna become as a ${sports[favoriteSport]}?`;
  }
} else {
  sportText = "Sad, that you didn want enter ur sport";
}

alert(`${age}\n${cityText}\n${sportText}`);
