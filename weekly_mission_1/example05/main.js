// main.js

const logger = require("./logger");

// The object could be used without initializing it, since it is already
logger.log("This is an informational message");

/**
 * Other way of creating an instance
 * const customLogger = new logger.Constructor("CUSTOM");
 * customLogger.log("This is an information message");
 */