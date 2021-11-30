var request = require('request-promise');

require('dotenv').config();

const deleteRequest = (token, url, body) => request({
  'method': 'DELETE',
  'uri': "https://" + url,
  'json': true,
  'form': body,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
}).then(response => response).catch(err => console.log(err));

module.exports = deleteRequest;
