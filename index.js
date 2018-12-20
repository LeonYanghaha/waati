'use strict';
const watti  = require("./src/watti");



// console.log(watti.getTime().getYear());


// let  dd = new Date();

// console.log(watti.getDaysOfMonth(dd));
// console.log(watti.getDaysOfWeek(dd,'www'));
// console.log(watti.getHours(dd));
// console.log('yyyy-mm-dd  hh:mm:ss');
// console.log(watti.format(new Date(), 'yyyy-MMMM-D  hh:mm:ss'));

// let yearReg = /y/i;
// console.log(yearReg.test('jhhkjYY-ui'));


let str = 'yyyy-MMMM-D  hh:mm:ss';
let arr = str.split('');
console.log(arr);
const symbolReg = /[\-\_\,\!\|\~\`\(\)\#\$\%\^\&\*\{\}\:\;\"\L\<\>\?]/;
const wordReg = /[a-zA-Z]/;
const prefetArr = [];
let tempStr = '';
for(let i = 0 ; i < arr.length ; i++){
    if (wordReg.test(arr[i])){
        tempStr += arr[i];
    }
    if (symbolReg.test(arr[i])){
        prefetArr.push(tempStr);
        prefetArr.push(arr[i]);
        tempStr = '';
    }
}
console.log(prefetArr);

