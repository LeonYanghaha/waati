const _  = require("./lib/tool");
const min = Object.create(null);

min.getTime = function (date) {
    return _.getTimeBasic(date);
};

/**
 * @describe 获取星期
 * @param {Date} date
 * @param {String} style
 */
min.getDaysOfWeek = function(date, style){
    return _.getDaysOfWeek(date,style)
};

/**
 * @describe 获取日期--多少号
 * @param {Date} date
 * @param {String} style
 */
min.getDaysOfMonth = function(date, style){
   return _.getDaysOfMonth(date, style)
};

/**
 * @describe 获取月份
 * @param {Date} date
 * @param {String} style
 */
min.getMonth = function(date, style){
    return _.getMonth(date, style)
};

/**
 * @describe 获取年份
 * @param {Date} date
 * @param {String} style
 */
min.getYear = function (date, style) {
    return _.getYear(date,style)
};

/**
 * @describe  获取小时数
 * @param {Date} date
 * @param {String} style
 */
// h 1 2 3   .....12小时计时法
// hh 01 02 03  ....12小时计时法
// H 1 2 3 ....24
// HH 01 02 03 ...24
min.getHours = function (date, style) {
    return _.getHours(date,style)
};

/**
 * @describe  返回分钟数
 * @param {Date} date
 * @param {String} style
 */
min.getMinutes = function (date, style) {
    return _.getMinutes(date,style);
};

/**
 * @describe  返回秒数
 * @param {Date} date
 * @param {String} style
 */
min.getSeconds = function (date, style) {
    return _.getSeconds(date, style);
};
module.exports = min;
