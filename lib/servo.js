var Class = require('js-class'),
    Five = require('./base.js');

var Servo = Class(Five, {
    constructor: function (fiveServo) {
        Five.prototype.constructor.call(this, fiveServo);
    },

    setPosition: function (params, done) {
        this.fiveDev.to(params.getAngle());
        done();
    },

    stop: function (done) {
        this.fiveDev.stop();
        done();
    }
});

module.exports = Servo;
