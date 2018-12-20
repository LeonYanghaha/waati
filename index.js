'use strict';
const watti  = require("./src/watti");



// console.log(watti.getTime().getYear());


// let  dd = new Date();

// console.log(watti.getDaysOfMonth(dd));
// console.log(watti.getDaysOfWeek(dd,'www'));
// console.log(watti.getHours(dd));
// console.log('yyyy-mm-dd  hh:mm:ss');
console.log(watti.format(new Date(), 'yyyy年MM月-DD  HH、mm。ss'));

// let yearReg = /y/i;
// console.log(yearReg.test('jhhkjYY-ui'));
