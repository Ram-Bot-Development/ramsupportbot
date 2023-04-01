const { date } = require('better-date.js');
const { Logs } = require('ram-api.js');
const write = require('write');


class ConsoleLog extends Logs {
    constructor(name) {
        super(name);
        this.name = name
        
    }
    async Ginfo(text) {
        var fs = require('fs')
fs.appendFile('./Logs/info.log', `\n[${this.name}] ${new date("America/New_York", 12).date} - ${text}`, function (err) {
    
 });
        this.info(text);
        
    }
    Gwarn(text) {
        var fs = require('fs')
fs.appendFile('./Logs/warn.log', `\n[${this.name}] ${new date("America/New_York", 12).date} - ${text}`, function (err) {
    
 });
        this.warn(text)
    
    }
    Gerror(text) {
        var fs = require('fs')
fs.appendFile('./Logs/error.log', `\n[${this.name}] ${new date("America/New_York", 12).date} - ${text}`, function (err) {
    
 });
        this.error(text)
    }

    
}



    module.exports = ConsoleLog;