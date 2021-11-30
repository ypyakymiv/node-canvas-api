var fetchAll = require('./internal/fetchAll');

require('dotenv').config();

/**
 * Returns all account ids
 * @return {Promise} A list of account objects: https://canvas.instructure.com/doc/api/accounts.html#Account
 */

function getAccounts(token, canvasDomain) {
  return fetchAll(token, canvasDomain + `/accounts`);
}
module.exports = getAccounts;
