// logger.js

class Logger {
  constructor(name) {
    // "this" is a variable to reference the local context value of this class
    this.name = name;
  }

  // method
  // this.name is the variable which is stored in the local context
  // message is a variable which is passed at the execution of this method
  info(message) {
    console.log(`[Object with name: ${this.name}] info: ${message}`);
  }

  verbose(message) {
    console.log(`[Object with name: ${this.name}] verbose: ${message}`);
  }
}

// this class is exported in this module
module.exports = Logger;
