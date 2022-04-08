// logger_1.js

/**
 * This is also a function declaration
 * 
 * module.exports will allow you invoke this function in another script like:
 * > const logger = require("./logger_1");
 * 
 * And use it as:
 * > logger("Heeey, that's pretty good!");
 */

module.exports = (message) => {
  console.log(`info: ${message}`);
};
