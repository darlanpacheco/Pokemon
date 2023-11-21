class Pokemon {
  _name: string;
  _type: string;
  _health: number;
  _attack: number;
  constructor(name: string, type: string, health: number, attack: number) {
    this._name = name;
    this._type = type;
    this._health = health;
    this._attack = attack;
  }
}

const type: string[] = ["Grass", "Water", "Fire", "Electric"];
const pokemons: Pokemon[] = [new Pokemon("Pikachu", "Electric", 100, 100)];
