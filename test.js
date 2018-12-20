const watti  = require("./index");

// console.log(time);
console.log(watti.format(new Date().getTime(), 'M月dd日 周ww HH:mm:SS'));

// 1545290473105
console.log(watti.getTimeStamp(new Date()));

console.log(watti.getRange(new Date(),1545290473105));



console.log(watti.getRangeFromNow(new  Date ()));


