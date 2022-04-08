// logger.js

class Logger {
  constructor(name) {
    // Create this object will store this values
    this.count = 0;
    this.name = name;
  }

  log(message) {
    this.count++; // Increase by 1 the count attribute when calling this method
    console.log("[" + this.name + "] " + message);
  }
}

module.exports = new Logger("DEFAULT"); // Instance creation and export of the object
