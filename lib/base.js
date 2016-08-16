var Class = require('js-class');

var Five = Class({
    constructor: function (fiveDev) {
        this.fiveDev = fiveDev;
    },

    setDevice: function (dev) {
        this.device = dev;
    }
});

module.exports = Five;
