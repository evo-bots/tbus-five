var Class = require('js-class'),
    Five = require('./base.js');

var LED = Class(Five, {
    constructor: function (fiveLED) {
        Five.prototype.constructor.call(this, fiveLED);
    },

    setPowerState: function (params, done) {
        if (params.getOn()) {
            this.fiveDev.on();
        } else {
            this.fiveDev.off();
        }
        done();
    }
});

module.exports = LED;
