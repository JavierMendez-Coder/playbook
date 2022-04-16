const travel = {
  from: "Cd. Obregón",
  to: "Esperanza",
  timeMinutes: 20,
  distanceKm: 15.2,
  driver: "Dahir Valenzuela",
  cost: 200,
  getLocationAndDestination: function() {
    return `From ${this.from} to ${this.to}`
  },
  getGeneralInfo: function() {
    return `Travel time: ${this.timeMinutes} mins, distance: ${this.distanceKm} km, cost: $${this.cost} MXN`;
  },
};

console.log(`Driver ${travel.driver}`);
console.log(travel.getLocationAndDestination());
console.log(travel.getGeneralInfo());
