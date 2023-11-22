pokemonImgs = document.querySelectorAll(".pokemonImg");

function pokemon(event) {
  console.log(event.target);
  localStorage.setItem("Pokemon", event.target.alt);
  window.location = "../pages/home.html";
}

for (let index = 0; index < pokemonImgs.length; index++) {
  pokemonImgs[index].addEventListener("click", pokemon);
}
