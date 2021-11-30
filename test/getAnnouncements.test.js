/* global test, expect */

const getAnnouncements = require('../src/getAnnouncements');
const getCoursesByUser = require('../src/getCoursesByUser');
const getSelf = require('../src/getSelf');


require('dotenv').config();

const token = process.env.CANVAS_API_TOKEN;
const canvasDomain = process.env.CANVAS_API_DOMAIN;

getSelf(token, canvasDomain).then((res) => {
  getCoursesByUser(token, canvasDomain, res.id).then((res) => {
    // console.log(res);
    // for(var i = 0; i < res.length; i++)
    getAnnouncements(token, canvasDomain, `course_${res[22].id}`).then((res) => {
      console.log(res);
    });
  });
});


// test('getAnnouncements works', () => {
//   getSelf(token, canvasDomain).then((res) => {
//     console.log(res);
//   });
//   // getAnnouncements(token, canvasDomain, )
//   // expect(typeof batchCopyCourseContent).toEqual('function')
// })
