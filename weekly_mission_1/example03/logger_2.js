// logger_2.js

/**
 * When exporting a function/object like this:
 * > module.exports.verbose
 * 
 * We are exporting the content with the name "verbose"
 * 
 * module.exports will allow you invoke this function in another script like:
 * > const logger = require("./logger_2");
 * 
 * And use it as:
 * > logger.verbose("Heeey, that's pretty good!");
 */

module.exports.verbose = (message) => {
  console.log(`verbose: ${message}`);
};