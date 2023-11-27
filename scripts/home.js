const storagePokemon = localStorage.getItem("Pokemon");

function pokemonImg() {
  document.querySelector("#profile>img").src =
    "../images/" + storagePokemon + ".png";
}

function pokemonName() {
  document.querySelector("#name").innerHTML =
    storagePokemon.charAt(0).toUpperCase() + storagePokemon.slice(1);
}

pokemonImg();
pokemonName();
