const profile = {
  user: "Javier Méndez",
  cellphoneNumber: "800 707 7073",
  age: 23,
  totalTravelTimeMinutes: 340,
  getUserAndAge: function () {
    return `User: ${this.user}, age: ${this.age}`
  },
  getGeneralInfo: function () {
    const hours = Math.floor(this.totalTravelTimeMinutes / 60);
    const minutes = this.totalTravelTimeMinutes % 60;
    return `Total traveled time: ${hours} hours and ${minutes} minutes`
  },
};

console.log(profile.getUserAndAge());
console.log(`User's cellphone: ${profile.cellphoneNumber}`);
console.log(profile.getGeneralInfo());
