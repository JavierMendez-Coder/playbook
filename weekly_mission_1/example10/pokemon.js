// pokemon.js

class Pokemon {
  constructor(name) {
    const newName = this.capitalize(name);
    this.name = newName;
  }

  sayHello() {
    console.log(`A wild ${this.name} greets you!`);
  }

  sayMessage(message) {
    console.log(`${this.name} says: "${message}"`);
  }

  capitalize(word) {
    let chars = word.toLowerCase().split('');
    chars[0] = chars[0].toUpperCase();
    return chars.join("");
  }
}

export default Pokemon;
