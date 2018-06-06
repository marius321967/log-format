const fn = require('./fn');
const moment = require('moment');

/**
 * Format log message. Format: [yyyy-mm-dd hh:mm:ss.ms UTC] (level): message
 * Uses current date.
 * @param {String} level Log level. Will be converted to lowercase.
 * @param {String} message Log message.
 */
module.exports = (level, message) => {
    return fn(moment(), level, message);
}
module.exports.fn = fn;
