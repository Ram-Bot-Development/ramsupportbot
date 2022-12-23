const { date } = require('better-date.js');
const { Logs } = require('ram-api.js');
const write = require('write');


class ConsoleLog extends Logs {
    constructor(name) {
        super(name);
        
    }
    async Ginfo(text) {
        var fs = require('fs')
fs.appendFile('./Logs/info.log', `\n${new date("America/New_York", 12).date} - ${text}`, function (err) {
    
 });
        this.info(text);
        
    }
    Gwarn(text) {
        this.warn(text)
    
    }
    Gerror(text) {
        this.error(text)
    }

    
}



    module.exports = ConsoleLog;