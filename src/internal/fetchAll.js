var request = require('request-promise');

var linkparser = require('parse-link-header');

var Bottleneck = require('bottleneck');

require('dotenv').config();

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100
});

const requestObj = (token, url) => ({
  'method': 'GET',
  'uri': "https://" + url,
  'json': true,
  'resolveWithFullResponse': true,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
});

const fetchAll = (token, url, result = []) => request(requestObj(token, url)).then(response => {
  result = [...result, ...response.body];
  const links = linkparser(response.headers.link);
  return links.next ? fetchAll(token, links.next.url, result) : result;
});

const fetchAllRateLimited = limiter.wrap(fetchAll);

module.exports = fetchAllRateLimited;
