pokemonImgs = document.querySelectorAll(".pokemonImg");

function pokemon(event) {
  console.log(event.target);
}

for (let index = 0; index < pokemonImgs.length; index++) {
  pokemonImgs[index].addEventListener("click", pokemon);
}
