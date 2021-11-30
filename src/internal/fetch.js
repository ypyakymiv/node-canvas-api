var request = require('request-promise');

var Bottleneck = require('bottleneck');

require('dotenv').config();

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100
});

const requestObj = (token, url) => ({
  'method': 'GET',
  'uri': url,
  'json': true,
  'resolveWithFullResponse': true,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
});

const fetch = (token, url) => request(requestObj(token, url)).then(response => response.body);

const fetchRateLimited = limiter.wrap(fetch);

module.exports = fetchRateLimited;
