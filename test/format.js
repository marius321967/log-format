const assert = require('assert');
const moment = require('moment');
const format = require('../fn');

describe('fn', () => {
    it('Should format log entry in format: [yyyy-mm-dd hh:mm:ss UTC] (level): message', () => {
        // Given
        const date = moment.utc(123456789001);
        const level = 'the_level';
        const message = 'the_messsage';
        // When
        const formatted = format(date, level, message);
        // Then
        assert.equal(formatted, '[1973-11-29 21:33:09.001 UTC] (the_level): the_messsage');
    });
});