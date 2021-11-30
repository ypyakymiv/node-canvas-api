var fetchAll = require('./internal/fetchAll');

/**
 * Get all courses a user is enrolled in
 * @param {Number} userId the user id.
 * @return {Promise} A promise that resolves to an array of Course object: https://canvas.instructure.com/doc/api/courses.html
*/

function getCoursesByUser(token, canvasDomain, userId) {
  return fetchAll(token, canvasDomain + `/users/${userId}/courses`);
}
module.exports = getCoursesByUser;
