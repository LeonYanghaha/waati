'use strict';
const _  = require("./lib/tool");
const watti = Object.create(null);

/**
 * @describe 格式化时间
 * @param {Date} date
 * @param {String} style
 * @return {String}
 */
watti.format = function(date,  style){
    let localDate = _.getTimeBasic(date);
    if(!style){
        return localDate.toLocaleString()
    }
    let arr = style.split('');
    const wordReg = /[wymdhs]/i;
    const prefectArr = [];
    let prefectArrIndex =-1 ;
    for(let i = 0; i < arr.length; i++){
        if (wordReg.test(arr[i])){
            if(prefectArrIndex===-1){
                prefectArr.push(arr[i]);
                prefectArrIndex = prefectArr.length ;
            }else{
                prefectArr.push(prefectArr.pop()+arr[i])
            }
        }else {
            prefectArr.push(arr[i]);
            prefectArrIndex = -1;
        }
    }
    for(let k = 0; k<prefectArr.length; k++) {
        let temp = prefectArr[k].toString();
        if(/y/i.test(temp)){
            prefectArr[k] = _.getYear(localDate,prefectArr[k]);
            continue;
        }
        if (/M/.test(temp)){
            prefectArr[k] = _.getMonth(localDate,prefectArr[k]);
            continue;
        }
        if (/d/i.test(temp)){
            prefectArr[k] = _.getDaysOfMonth(localDate,prefectArr[k]);
            continue;
        }
        if (/m/.test(temp)){
            prefectArr[k] = _.getMinutes(localDate,prefectArr[k]);
            continue;
        }
        if(/h/i.test(temp)){
            prefectArr[k] = _.getHours(localDate,prefectArr[k]);
            continue;
        }
        if(/s/i.test(temp)){
            prefectArr[k] = _.getSeconds(localDate,prefectArr[k]);
        }
        if(/w/i.test(temp)){
            prefectArr[k] = _.getDaysOfWeek(localDate,prefectArr[k]);
        }
    }
    return prefectArr.join('');
    /**
     *  感觉这种做法很难处理
     *   1.字符串的长度是发生变化的。
     *   2.用户的输入不确定。
     *   3.被替换出来的字符串也有可能会匹配正则。
     *
     *   导致的结果就是：情况会很复杂
     */
    //  style   yyyy-mm-dd  hh:mm:ss
    // const yearRegArr = [/y/i, /yyyy/,/YYYY/,/yyy/,/YYY/,/yy/,/YY/,/y/,/Y/];
    // if (yearRegArr[0].test(style)) {
    //     for(let i = 1; i<yearRegArr.length; i++){
    //         if(yearRegArr[i].test(style)){
    //             let tempStyleStr = yearRegArr[i].toString();
    //             let tempYear = _.getYear(localDate,tempStyleStr.slice(1,tempStyleStr.length-1));
    //             formatDate = formatDate.replace(yearRegArr[i],tempYear);
    //             break;
    //         }
    //     }
    // }
    // let monthRegArr = [/M/i,/MMMM/,/MMM/,/MM/,/M/];
    // if(monthRegArr[0].test(style)){
    //     for(let i = 1; i<monthRegArr.length; i++){
    //         if(monthRegArr[i].test(style)){
    //             let tempStyleStr = monthRegArr[i].toString();
    //             let tempMonth = _.getMonth(localDate,tempStyleStr.slice(1,tempStyleStr.length-1));
    //             formatDate = formatDate.replace(monthRegArr[i],tempMonth);
    //             break;
    //         }
    //     }
    // }

    // let dayRegArr = [/d/i,/DD/,/dd/,/D/,/d/];
    // if(dayRegArr[0].test(style)){
    //     for(let i = 1; i<dayRegArr.length; i++){
    //         if(dayRegArr[i].test(style)){
    //             let tempStyleStr = dayRegArr[i].toString();
    //             let tempDay = _.getMonth(localDate,tempStyleStr.slice(1,tempStyleStr.length-1));
    //             formatDate = formatDate.replace(dayRegArr[i],tempDay);
    //             break;
    //         }
    //     }
    // }
};

/**
 * @describe 获取时间
 * @param {Date} date
 * @return {Date}
 */
watti.getTime = function (date) {
    return _.getTimeBasic(date);
};

/**
 * @describe 获取星期
 * @param {Date} date
 * @param {String} style
 *    w     1,2,3,4...
 *    ww    一，二，三...
 *    www   星期一，星期二，星期三...
 *    WW    Sunday,Monday...
 *    W     Sun,Mon...
 */
watti.getDaysOfWeek = function(date, style){
    return _.getDaysOfWeek(_.getTimeBasic(date),style)
};

/**
 * @describe 获取日期--多少号
 * @param {Date} date
 * @param {String} style
 *      d/D    1,2,3,.....31
 *      dd/DD  01,02,03....31
 */
watti.getDaysOfMonth = function(date, style){
   return _.getDaysOfMonth(_.getTimeBasic(date), style)
};

/**
 * @describe 获取月份
 * @param {Date} date
 * @param {String} style
 *       M      1,2,3...
 *       MM     一，二...
 *       MMM    January,February...
 *       MMMM   Jan,Feb...
 */
watti.getMonth = function(date, style){
    return _.getMonth(_.getTimeBasic(date), style)
};

/**
 * @describe 获取年份
 * @param {Date} date
 * @param {String} style
 *      y/yy/Y/YY           18,19...两位数表示年份
 *      yyy/YYY/yyyy/YYYYY  2018,2109
 */
watti.getYear = function (date, style) {
    return _.getYear(_.getTimeBasic(date),style)
};

/**
 * @describe  获取小时数
 * @param {Date} date
 * @param {String} style
 *     h    1 2 3  ... 12小时计时法
 *     hh   01 02 ...12小时计时法
 *     hhh
 *     H    1 2 3 ...24小时计时法
 *     HH   01 02 03 ...24小时计时法
 */
watti.getHours = function (date, style) {
    return _.getHours(_.getTimeBasic(date),style)
};

/**
 * @describe  返回分钟数
 * @param {Date} date
 * @param {String} style
 *      m   1,2,3....59
 *      mm 01,02...59
 */
watti.getMinutes = function (date, style) {
    return _.getMinutes(_.getTimeBasic(date),style);
};

/**
 * @describe  返回秒数
 * @param {Date} date
 * @param {String} style
 *     s/S   1,2,3...59
 *     ss/SS 01,02,03....59
 */
watti.getSeconds = function (date, style) {
    return _.getSeconds(_.getTimeBasic(date), style);
};

module.exports = watti;
