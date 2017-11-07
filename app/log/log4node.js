(function () {

    var logLevelEnum = {
        VERBOSE: 0,
        DEBUG: 1,
        INFO: 2,
        WARN: 3,
        ERROR: 4
    }, 
    config = require('../../config/log4node.json'),
    logLevelInt = parseInt(logLevelEnum[config.logLevel]);

    /** 
     * debug
     */
    module.exports.debug = function(message) {
        
        if (logLevelInt <= logLevelEnum.DEBUG) {
            writeMessage("DEBUG", message);
        }
    }

    /**
     * error
     */
    module.exports.error = function(message) {	

        if (logLevelInt <= logLevelEnum.ERROR) {
            writeMessage("ERROR", message);
        }
    }

    /** 
     * info
     */
    module.exports.info = function(message) {

        if (logLevelInt <= logLevelEnum.INFO) {
            writeMessage("INFO", message);
        }
    }

    /**
     * verbose
     */
    module.exports.verbose = function(message) {

        if (logLevelInt <= logLevelEnum.VERBOSE) {
            writeMessage("VERBOSE", message);
        }
    }

    /**
     * warn
     */
    module.exports.warn = function(message) {

        if (logLevelInt <= logLevelEnum.WARN) {
            writeMessage("WARN", message);
        }
    }

    /**
     * writeMessage
     */
    var writeMessage = function(loglevel, message) {
        
        var dateObject = new Date(),
            output = dateObject.toISOString();			
        
        output += " | " + loglevel;
        output += " | " + message;
        
        console.log(output);
    };

}());