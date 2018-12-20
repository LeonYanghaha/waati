const watti  = require("./index");

// console.log(time);
console.log(watti.format(new Date().getTime(), 'M月dd日 周ww HH:mm:SS'));

// 1545290473105
console.log(watti.getTimeStamp(new Date()));
console.log(new Date().getTime());
console.log(watti.getRange(1545297915241,1545290473105));

console.log(watti.getRangeFromNow(new  Date ()));

console.log(watti.getDaysOfWeek(1545298077931,'WW'));
console.log(watti.getHours(1545298077931,'HH'));


