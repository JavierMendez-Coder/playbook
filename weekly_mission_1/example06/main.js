// main.js

require("./patcher"); // Call of the module which modifies the object's instance
const logger = require("./logger"); // Call the logger.js module will give you the modified object

logger.customMessage();
