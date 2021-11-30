var request = require('request-promise');

require('dotenv').config();

const putRequest = (token, url, body) => request({
  'method': 'PUT',
  'uri': "https://" + url,
  'json': true,
  'form': body,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
}).then(response => response);

module.exports = putRequest;
