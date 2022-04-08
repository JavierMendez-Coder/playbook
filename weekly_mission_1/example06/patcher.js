// patcher.js

/**
 * Take into account:
 *  - require("./logger") will give you the created object
 *  - require("./logger") ".Logger" will give you the class
 * 
 * In this case we are adding an extra function to the object's instance, not the class.
 */

require("./logger").customMessage = function() {
  console.log("This is a new functionality");
}