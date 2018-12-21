const watti  = require("./index");

// console.log(time);
// console.log(watti.format(new Date().getTime(), 'M月dd日 ---周ww HH:mm:SS'));

// 1545290473105
// console.log(watti.getTimeStamp(new Date()));
// console.log(new Date().getTime());
// console.log(watti.getRange(1545297915241,1545290473105));
//
// console.log(watti.getRangeFromNow(new  Date ()));
//
// console.log(watti.getDaysOfWeek(1545298077931,'WW'));
// console.log(watti.getHours(1545298077931,'HH'));

// let arr = ['12月21日 ---周五 11:26:33zz','M月dd日 ---周ww HH:mm:SSzz'];
// console.log('输入：', arr);
// console.log(watti.strToDate(arr[0],arr[1]));
// console.log('----------------------------');


// arr = ['2月21日 周五 01:26:33zz','M月dd日 周ww HH:mm:SSzz'];
// console.log('输入：', arr);
// console.log(watti.strToDate(arr[0],arr[1]));
// console.log('----------------------------');


// arr = ['=2 月21 日  - 周五 01:26:33zz 2017--','=M 月dd 日  - 周ww HH:mm:SSzz yyy--'];
arr = ['2-2 12:23:12','M-d H:m:s'];
console.log('输入：', arr);
console.log(watti.strToDate(arr[0],arr[1]));
console.log('----------------------------');


// arr = ['02 21- 01:26:33zz 17','M dd- HH:mm:SSzz yy'];
// console.log('输入：', arr);
// console.log(watti.strToDate(arr[0],arr[1]));
// console.log('----------------------------');

console.log(watti.format(new Date(),'=M月 dd 日   周ww HH:mm:SSzz yyy--'));
