const util = require('util');

/**
 * Format log message. Format: [yyyy-mm-dd hh:mm:ss.ms UTC] (level): message
 * @param {*} date A moment.js date
 * @param {String} level Log level. Will be converted to lowercase.
 * @param {String} message Log message.
 */
module.exports = (date, level, message) => {
    return util.format(
            '[%s] (%s): %s',
            date.utc().format('YYYY-MM-DD HH:mm:ss.SSS UTC'),
            level.toLowerCase(),
            message);
}