var fetchAll = require('./internal/fetchAll');

var buildOptions = require('./internal/util');

var getOptions = require('./internal/getOptions');

require('dotenv').config();

const canvasDomain = process.env.CANVAS_API_DOMAIN;

function stringifyDate(d) {
  return `${d.getFullYear()}-${("0" + String(d.getMonth() + 1)).slice(-2)}-${("0" + d.getDate()).slice(-2)}`
}

/**
 * Retrieves all rubrics in course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Rubric objects: https://canvas.instructure.com/doc/api/rubrics.html
 */

function getAnnouncements(token, canvasDomain, courseId, ...options) {
  const oneYearAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
  const today = new Date();

  return fetchAll(token, canvasDomain + '/api/v1' + `/announcements?context_codes[]=course_${courseId}&end_date=${stringifyDate(today)}&start_date=${stringifyDate(oneYearAgo)}&latest_only=false&active_only=true&` + buildOptions([getOptions.rubric.assessments, options]));
}
module.exports = getAnnouncements;
