// logger.js

/**
 * Export default allow us to export this class and import it
 * 
 * import MyLogger from "./logger.js"
 */

export default class Logger {
  constructor(name) {
    this.name = name;
  }

  log(message) {
    console.log(`[${this.name}] ${message}`);
  }
}
