import Traveler from './traveler.js'

/*
Este es un ejemplo de como modularizar clases y usarlas mediante módulos.
*/

const traveler = new Traveler("Javier", "LaunchX", "Node JS", "Abril 2022")
console.log(traveler)
console.log(traveler.getNameAndUsername()) // Método de la clase padre
console.log(traveler.getGeneralInfo()) // Método de la clase hija