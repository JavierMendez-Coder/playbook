// logger.js

/**
 * this module behaviors like if it were an object with all the defined variables
 * 
 * [Module: null prototype] {
 *   DEFAULT_LEVEL: 'info',
 *   LEVELS: { error: 0, debug: 1, warn: 2, data: 3, info: 4, verbose: 5 },
 *   Logger: [class Logger],
 *   log: [Function: log],
 * }
 */

// exports a function
export function log(message) {
  console.log(message);
}

// exports a constant
export const DEFAULT_LEVEL = "info";

// exports an object
export const LEVELS = {
  error: 0,
  debug: 1,
  warn: 2,
  data: 3,
  info: 4,
  verbose: 5,
}

// exports a class
export class Logger {
  constructor(name) {
    this.name = name;
  }

  log(message) {
    console.log(`[${this.name}] ${message}`);
  }
}
