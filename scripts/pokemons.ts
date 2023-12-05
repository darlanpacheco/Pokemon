class Pokemon {
  _name: string;
  _type: string;
  _health: number;
  _attack: number;
  constructor(name: string, type: string, attack: number, health: number) {
    this._name = name;
    this._type = type;
    this._attack = attack;
    this._health = health;
  }
}

const type: string[] = ["Grass", "Water", "Fire", "Electric"];

const pokemons: Pokemon[] = [
  new Pokemon("Pikachu", "Electric", 125, 125),
  new Pokemon("Charmander", "Fire", 150, 100),
  new Pokemon("Buizel", "Water", 125, 125),
  new Pokemon("Bulbasaur", "Grass", 100, 150),
  new Pokemon("Squirtle", "Water", 100, 150),
];
