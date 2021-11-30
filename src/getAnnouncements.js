var fetchAll = require('./internal/fetchAll');

var buildOptions = require('./internal/util');

var getOptions = require('./internal/getOptions');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

/**
 * Retrieves all rubrics in course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Rubric objects: https://canvas.instructure.com/doc/api/rubrics.html
 */

function getAnnouncements(token, canvasDomain, courseId, ...options) {
  return fetchAll(token, canvasDomain + '/api/v1' + `/announcements?context_codes[]=${courseId}&latest_only=true&` + buildOptions([getOptions.rubric.assessments, options]));
}
module.exports = getAnnouncements;
