// logger.js

class Logger {
  constructor (name) {
    this.count = 0;
    this.name = name;
  }

  log(message) {
    this.count++;
    console.log("[" + this.name + "] " + message);
  }
}

module.exports = new Logger("DEFAULT"); // Instance of new object
module.exports.Logger = Logger // Class
