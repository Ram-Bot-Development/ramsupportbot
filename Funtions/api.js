const { RamApiPro } = require("ram-api.js/Endpoints/pro");
const { api } = require("../config");
const { RamApi, RamApiBasic } = require("ram-api.js");

class proapi extends RamApiPro {
    constructor() {
        super(api.prokey, api.version);
    }
}
class normalapi extends RamApi {
    constructor() {
        super(api.normalkey, api.version)
    }
}
class basicapi extends RamApiBasic {
    constructor() {
        super(api.version)
    }
}

module.exports = {proapi, normalapi, basicapi};