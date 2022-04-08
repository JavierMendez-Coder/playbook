// main.js

const Logger = require("./logger"); // Invokes the module which contains the class

// Object creation
const dbLogger = new Logger("DB"); // Creates a new object, this calls by default the class' constructor

// Method invocation
dbLogger.info("This is an informational message");

// Another object creation
const accessLogger = new Logger("ACCESS");
accessLogger.verbose("this is a verbose message");