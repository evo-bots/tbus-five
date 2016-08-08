var Class = require('js-class'),
    Five = require('./base.js');

var Motor = Class(Five, {
    constructor: function (fiveMotor) {
        Five.prototype.constructor.call(this, fiveMotor);
    },

    start: function (params, done) {
        if (params.speed == 0) {
            this.stop(done);
        } else {
            var mtd = params.direction ? 'rev' : 'fwd';
            this.fiveDev[mtd].call(this.fiveDev, params.speed);
            done();
        }
    },

    stop: function (done) {
        this.fiveDev.stop();
        done();
    },

    brake: function (params, done) {
        if (params.on) {
            this.fiveDev.brake();
        } else {
            this.fiveDev.release();
        }
        done();
    }
});

module.exports = Motor;
