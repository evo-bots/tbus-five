var Class = require('js-class'),
    Five = require('./base.js');

var LED = Class(Five, {
    constructor: function (fiveLED) {
        Five.prototype.constructor.call(this, fiveLED);
    },

    setPowerState: function (params, done) {
        if (!params.on) {
            this.fiveDev.off();
        } else if (params.brightness > 0) {
            this.fiveDev.brightness(params.brightness);
        } else {
            this.fiveDev.on();
        }
        done();
    }
});

module.exports = LED;
