var Class = require('js-class'),
    Five = require('./base.js');

var Motor = Class(Five, {
    constructor: function (fiveMotor) {
        Five.prototype.constructor.call(this, fiveMotor);
    },

    start: function (params, done) {
        var speed = params.getSpeed();
        if (speed == 0) {
            this.stop(done);
        } else {
            var mtd = params.getDirection() ? 'rev' : 'fwd';
            this.fiveDev[mtd].call(this.fiveDev, speed);
            done();
        }
    },

    stop: function (done) {
        this.fiveDev.stop();
        done();
    },

    brake: function (params, done) {
        if (params.getOn()) {
            this.fiveDev.brake();
        } else {
            this.fiveDev.release();
        }
        done();
    }
});

module.exports = Motor;
