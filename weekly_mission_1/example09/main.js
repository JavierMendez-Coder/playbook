// main.js

const Pokemon = require("./pokemon");

const pikachu = new Pokemon("pikachu");
const bulbasaur = new Pokemon("bulbasaur");
const squirtle = new Pokemon("squirtle");
const charmander = new Pokemon("charmander");

pikachu.sayHello();
pikachu.sayMessage("Hey!");

bulbasaur.sayHello();
bulbasaur.sayMessage("Hey!");

squirtle.sayHello();
squirtle.sayMessage("Hey!");

charmander.sayHello();
charmander.sayMessage("Hey!");
