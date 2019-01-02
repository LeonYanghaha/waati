'use strict';
const _  = require("./lib/tool");
const watti = Object.create(null);

/**
 * @describe  字符串转成日期格式
 * @param {String}  dateStr
 * @param {String}  style
 * @return {Date}   如果有参数为空，则返回null
 */
watti.strToDate = function(dateStr,style){
  if(!dateStr || !style){
    return null;
  }
  let prefectArr = _.styleToArr(style);
  let indexArr = [];
  let dateSymbolArr = [];
  let start = 0 ;
  let isErrorFlag = false;
  for(let i = 0; i<prefectArr.length; i++ ){
    let tempStr = prefectArr[i];
    if(!/[wymdhs]/i.test(tempStr)){ // 进入这个if的，都是特殊符号了
      let tempIndex = dateStr.indexOf(tempStr,start);
      // TODO   如果 tempIndex =-1 怎么办，发生这种情况的原因是：日期模板和实际传入的日期格式不一致导致的
      if(tempIndex===-1){
        console.error('error......Value is illegal');
        console.error('error......Value is illegal');
        isErrorFlag = true;
        break;
      }
      if(tempIndex!==0){
        indexArr.push([start, tempIndex]);
      }
      start = tempIndex + tempStr.length;
    }else{
      dateSymbolArr.push(tempStr);
    }
  }
  if(isErrorFlag){
    return null;
  }
  // console.log('dateSymbolArr:',dateSymbolArr);
  // TODO  这里需要做判断
  // if(indexArr[indexArr.length-1][1]<dateStr.length){
  indexArr.push([start, dateStr.length]);
  // }
  let date = new Date(0);
  for(let k = 0; k<indexArr.length; k++){
    let startIndex = indexArr[k][0];
    let endIndex = indexArr[k][1];
    let strFromDateStr = dateStr.slice(startIndex, endIndex);
    if(/y/i.test(dateSymbolArr[k])){
      date.setFullYear(parseInt(strFromDateStr)<100?parseInt(strFromDateStr)+2000:parseInt(strFromDateStr));
      continue;
    }
    if(/M/.test(dateSymbolArr[k])){
      date.setUTCMonth(_.getMonthFromSymbol(strFromDateStr, dateSymbolArr[k]));
      continue;
    }
    if(/m/.test(dateSymbolArr[k])){
      date.setMinutes(parseInt(strFromDateStr));
      continue;
    }
    if(/s/i.test(dateSymbolArr[k])){
      date.setSeconds(parseInt(strFromDateStr));
      continue;
    }
    if(/h/i.test(dateSymbolArr[k])){
      date.setUTCHours(parseInt(strFromDateStr));
      continue;
    }
    if (/^[d]/i.test(dateSymbolArr[k])){
      date.setUTCDate(parseInt(strFromDateStr))
    }
  }
  return date;
};

/**
 * @describe 返回当前时间和传入时间差的描述，比如几分钟前  几个小时之前...
 *           最终还是调用了getRange(date, focusDate)方法
 * @param {Date} date 时间，
 * @return {String}
 */
watti.getRangeFromNow = function(date){
  return watti.getRange(date,new Date());
};

/**
 * @describe 返回两个时间差的描述，比如几分钟前  几个小时之前...
 * @param {Date} date 时间，
 * @param {Date} focusDate 相对比较的时间，
 * @return {String}
 */
watti.getRange = function(date, focusDate){
  const dateStamp = _.getTimeStamp(date);
  const focusDateStamp = _.getTimeStamp(focusDate);
  let tempRange = dateStamp - focusDateStamp ;
  const oneMinutes = 1000*60;
  const tenMinutes = oneMinutes*10;
  const oneHours =  oneMinutes*60;
  const twoHours = oneHours*2;
  const oneDay = oneHours*24;
  const twoDay = oneHours*24*2;
  const oneWeek = oneDay*7;
  const oneMonth = oneDay*30;
  const oneYear = oneDay*365;
  const twoYear = oneDay*365*2;

  let lable = tempRange>=0?'前':'后';
  tempRange = Math.abs(tempRange);
  // 一分钟之内
   if (tempRange>=0 && tempRange<=oneMinutes){
     return '几秒钟'+lable;
   }
   //  大于一分钟，小于十分钟
   if (tempRange>=oneMinutes && tempRange<=tenMinutes){
    return '几分钟'+lable;
   }
   // 大于十分钟，小于一个小时
   if(tempRange>=tenMinutes && tempRange<=oneHours){
     return '几十分钟'+lable;
   }
  //  大于一个小时， 小于两个小时
  if(tempRange>=oneHours && tempRange<=twoHours){
    return '一个小时'+lable;
  }
  // 大于两个小时，小于24个小时
  if(tempRange>=twoHours && tempRange<=oneDay){
    return '几个小时'+lable;
  }
  // 大于一天，小于两天的
  if(tempRange>=oneDay && tempRange<=twoDay){
    return '一天'+lable;
  }
  // 大于两天，小于一个礼拜的
  if(tempRange>=oneDay && tempRange<=twoDay){
    return '几天'+lable;
  }
  // 大于一个礼拜，小于一个月的
  if(tempRange>=oneWeek && tempRange<=oneMonth){
    return '十几天'+lable;
  }
  // 大于一个月，小于一年的
  if(tempRange>=oneMonth && tempRange<=oneYear){
    return '几个月'+lable;
  }
  if(tempRange>=oneYear && tempRange<=twoYear){
    return '一年'+lable;
  }
  return '几年'+lable;
};

/**
 * @describe 格式化时间
 * @param {Date} date
 * @param {String} style
 * @return {String}
 */
watti.format = function(date,  style){
  let localDate = _.getTimeBasic(date);
  if(!style){
    return localDate.toLocaleString();
  }
  let prefectArr = _.styleToArr(style);

  for(let k = 0; k<prefectArr.length; k++) {
    let temp = prefectArr[k].toString();
    if(/y/i.test(temp)){
      prefectArr[k] = _.getYear(localDate, prefectArr[k]);
      continue;
    }
    if (/M/.test(temp)){
      prefectArr[k] = _.getMonth(localDate, prefectArr[k]);
      continue;
    }
    if (/^[d]/i.test(temp)){
      prefectArr[k] = _.getDaysOfMonth(localDate, prefectArr[k]);
      continue;
    }
    if (/m/.test(temp)){
      prefectArr[k] = _.getMinutes(localDate, prefectArr[k]);
      continue;
    }
    if(/h/i.test(temp)){
      prefectArr[k] = _.getHours(localDate, prefectArr[k]);
      continue;
    }
    if(/s/i.test(temp)){
      prefectArr[k] = _.getSeconds(localDate, prefectArr[k]);
      continue;
    }
    if(/w/i.test(temp)){
      prefectArr[k] = _.getDaysOfWeek(localDate, prefectArr[k]);
    }
  }
  return prefectArr.join('');
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
 * @return {string}
 */
watti.getDaysOfWeek = function(date, style){
  return _.getDaysOfWeek(_.getTimeBasic(date), style);
};

/**
 * @describe 获取日期--多少号
 * @param {Date} date
 * @param {String} style
 *      d/D    1,2,3,.....31
 *      dd/DD  01,02,03....31
 * @return {int}
 */
watti.getDaysOfMonth = function(date, style){
  return _.getDaysOfMonth(_.getTimeBasic(date), style);
};

/**
 * @describe 获取月份
 * @param {Date} date
 * @param {String} style
 *       M      1,2,3...
 *       MM     一，二...
 *       MMM    January,February...
 *       MMMM   Jan,Feb...
 * @return {String}
 */
watti.getMonth = function(date, style){
  return _.getMonth(_.getTimeBasic(date), style);
};

/**
 * @describe 获取年份
 * @param {Date} date
 * @param {String} style
 *      y/yy/Y/YY           18,19...两位数表示年份
 *      yyy/YYY/yyyy/YYYYY  2018,2109
 * @return {int}
 */
watti.getYear = function (date, style) {
  return _.getYear(_.getTimeBasic(date), style);
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
 * @return {int}
 */
watti.getHours = function (date, style) {
  return _.getHours(_.getTimeBasic(date), style);
};

/**
 * @describe  返回分钟数
 * @param {Date} date
 * @param {String} style
 *      m   1,2,3....59
 *      mm 01,02...59
 * @return {int}
 */
watti.getMinutes = function (date, style) {
  return _.getMinutes(_.getTimeBasic(date), style);
};

/**
 * @describe  返回秒数
 * @param {Date} date
 * @param {String} style
 *     s/S   1,2,3...59
 *     ss/SS 01,02,03....59
 * @return {int}
 */
watti.getSeconds = function (date, style) {
  return _.getSeconds(_.getTimeBasic(date), style);
};

/**
 * @describe  返回时间戳
 * @param {Date} date
 * @return {int}
 */
watti.getTimeStamp = function(date){
  return _.getTimeStamp(date);
};
module.exports = watti;
