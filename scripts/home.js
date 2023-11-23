function pokemonImg() {
  document.querySelector("#profile>img").src =
    "../images/" + localStorage.getItem("Pokemon") + ".png";
}

pokemonImg();
