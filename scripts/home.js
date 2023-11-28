const storagePokemon = localStorage.getItem("Pokemon");

function pokemonImg() {
  document.querySelector("#profile>img").src =
    "../images/" + storagePokemon + ".png";
  document.querySelector("#profile>img").alt = storagePokemon;
}

function pokemonName() {
  document.querySelector("#name").innerHTML =
    storagePokemon.charAt(0).toUpperCase() + storagePokemon.slice(1);
}

function circleCreator() {
  let circle = document.createElement("div");
  circle.style.width = "10px";
  circle.style.height = "10px";
  circle.style.backgroundColor = "white";
  circle.style.borderRadius = "50%";
}

pokemonImg();
pokemonName();
