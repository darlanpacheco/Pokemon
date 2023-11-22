function pokemonImg() {
  document.querySelector("#profileImg").src =
    "../images/" + localStorage.getItem("Pokemon") + ".png";
}

pokemonImg();
