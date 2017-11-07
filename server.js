var log = require("./app/log/log4node.js");

var x = 123;

log.debug("The value of x is " + x);

try {
   // Connect to database ...
   log.info("Connected to database");
}
catch (e) {
   log.error("Error: Failed to connect to database");
}