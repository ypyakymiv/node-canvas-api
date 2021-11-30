var fetch = require('./internal/fetch');

/**
 * Retrieves information about the user
 * @return {Promise} A promise that resolves to a User object: https://canvas.instructure.com/doc/api/users.html#User
*/

function getSelf(token, canvasDomain) {
  return fetch(token, canvasDomain + '/users/self');
}
module.exports = getSelf;
