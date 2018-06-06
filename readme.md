Simple log message formatter for NodedJS apps - no configuration needed. This component uses [moment.js](https://momentjs.com/). 

Log format: `[yyyy-mm-dd hh:mm:ss.ms UTC] (level): message`, where `level` is log level (*error*, *info*, etc.). Level will be converted to lowercase.

This formatter is reused in several of my node services, perhaps you will find it useful too.

Dates and formatting can become tricky, so I added a test (`npm run test`).

## Usage
Install: `npm i --save @marius321967/log-format`.

Format a log entry with current time:
```js
const format = require('@marius321967/log-format');
const log_message = format('error', 'An error occurred');
```

To use a custom date:
```js
const format = require('@marius321967/log-format').fn;
const date = moment('1995-12-25');
const log_message = format(date, 'error', 'An error occurred');
```