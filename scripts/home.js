const storagePokemon = localStorage.getItem("Pokemon");
const pokemonImg = document.querySelector("#pokemon-img");
const pokemonName = document.querySelector("#name");

function pokemon() {
  pokemonImg.src = "../images/" + storagePokemon + ".png";
  pokemonImg.alt = storagePokemon;
  pokemonName.innerHTML =
    storagePokemon.charAt(0).toUpperCase() + storagePokemon.slice(1);
}

pokemon();
