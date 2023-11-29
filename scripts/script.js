const pokemons = document.querySelectorAll(".pokemons");

for (let i = 0; i < pokemons.length; i++) {
  pokemons[i].addEventListener("click", (event) => {
    localStorage.setItem("Pokemon", event.target.alt);
    window.location = "../pages/home.html";
  });
}
