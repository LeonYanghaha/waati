'use strict';
const tool = Object.create(null);
/**
 * @describe 将style转成数组
 * @param {String} style
 * @return {Array}
 */
tool.styleToArr = function(style){

  let arr = style.split('');
  const wordReg = /[wymdhs]/i;
  const prefectArr = [];
  let isSameFlag = -1;  // 0 -> str     1->other   -1->init value
  for(let i = 0; i < arr.length; i++){
    let tempVal = arr[i];
    if (wordReg.test(tempVal)){
      if(isSameFlag === 1  || isSameFlag === -1){
        prefectArr.push(tempVal);
      }else{
        prefectArr.push(prefectArr.pop() + tempVal);
      }
      isSameFlag = 0;
    }else {
      if(isSameFlag === 0 || isSameFlag===-1){
        prefectArr.push(tempVal);
      }else{
          prefectArr.push(prefectArr.pop() + tempVal);
      }
      isSameFlag = 1;
    }
  }
  return prefectArr;
};

/**
 * @describe 返回秒数
 * @param {Date} date
 * @param {String} style
 * @return {Number}
 */
tool.getSeconds = function (date, style){
  let seconds = date.getSeconds();
  switch (style) {
    case 'ss':
    case 'SS':
      if (seconds < 10) {
        seconds = '0' + seconds.toString();
      }
      break;
    default:
  }
  return seconds;
};

/**
 * @describe 返回分钟
 * @param {Date} date
 * @param {String} style
 * @return {number}
 */
tool.getMinutes = function (date, style) {
  let minutes = date.getMinutes();
  switch (style) {
    case 'mm':
      if(minutes<10){
        minutes = '0'+minutes.toString();
      }
      break;
    default:
  }
  return minutes;
};

/**
 * @describe 返回小时数
 * @param {Date} date
 * @param {String} style
 * @return {number}
 */
tool.getHours = function (date, style) {
  let hours = date.getHours(); // 0  1 2 3 4 5 6 7 .....
  switch (style) {
    case 'h':
      if(hours>12){
        hours = hours - 12;
      }
      break;
    case 'hh':
      if(hours<10){
        hours = '0' + hours.toString();
      }
      if(hours>12){
        hours = hours-12;
      }
      break;
    case 'hhh':
      let label = hours>=18?'晚上':(hours>=12?'下午':(hours>=6?'早上':'凌晨'));
      if(hours>13){
        hours -= 12;
      }
      hours = label + hours.toString();
      break;
    case 'H':
      break;
    case 'HH':
      if(hours<10){
        hours = '0' + hours.toString();
      }
      break;
    default:
  }
  return hours;
};

/**
 * @describe 返回星期
 * @param {Date} date
 * @param {String} style
 * @return {String}
 */
tool.getDaysOfWeek = function(date, style){
  let day = date.getDay();
  const weekDict = [
    [7, '日', '星期日', 'Sunday', 'Sun'],
    [1, '一', '星期一', 'Monday', 'Mon'],
    [2, '二', '星期二', 'Tuesday', 'Tues'],
    [3, '三', '星期三', 'Wednesday', 'Wed'],
    [4, '四', '星期四', 'Thursday', 'Thur'],
    [5, '五', '星期五', 'Friday', 'Fri'],
    [6, '六', '星期六', 'Saturday', 'Sat'],
  ];
  switch (style) {
    case 'w':
      day = weekDict[day][0];
      break;
    case 'ww':
      day = weekDict[day][1];
      break;
    case 'www':
      day = weekDict[day][2];
      break;
    case 'WW':
      day = weekDict[day][3];
      break;
    case 'W':
      day = weekDict[day][4];
      break;
    default:
      day = weekDict[day][0];
  }
  return day;
};

/**
 * @describe 返回日期，几号
 * @param {Date} date
 * @param {String} style
 * @return {Number}
 */
tool.getDaysOfMonth = function (date, style) {
  let month = date.getDate();
  switch (style) {
    case 'dd':
    case 'DD':
      if (month<10) {
        month = '0'+month.toString();
      }
      break;
    default:
  }
  return month;
};

/**
 * @describe 返回月份
 * @param {Date} date
 * @param {String} style
 * @return {String}
 */
tool.getMonth = function (date, style) {
  let month = date.getMonth();
  const monthDict = [
    [ 1,'一','January','Jan'],
    [ 2,'二','February','Feb'],
    [ 3,'三','March','Mar'],
    [ 4,'四','April','Apr'],
    [ 5,'五','May','May'],
    [ 6,'六','June','Jun'],
    [ 7,'七','July','Jul'],
    [ 8,'八','August','Aug'],
    [ 9,'九','September','Sept'],
    [ 10,'十','October','Oct'],
    [ 11,'十一','November','Nov'],
    [ 12,'十二','December','Dec']
  ];

  switch (style) {
    case 'M':
      month = monthDict[month][0];
      break;
    case 'MM':
      month = monthDict[month][1];
      break;
    case 'MMM':
      month = monthDict[month][2];
      break;
    case 'MMMM':
      month = monthDict[month][3];
      break;
    default:
      month = monthDict[month][0];
  }
  return month;
};

/**
 * @describe 获取年份
 * @param {Date} date
 * @param {String} style
 * @return {Number}
 */
tool.getYear = function (date, style) {
  let year = date.getFullYear();
  switch (style) {
    case 'y':
    case 'Y':
    case 'yy':
    case 'YY':
      year = year - (parseInt(year/100)*100);
      break;
    default:
  }
  return year;
};

/**
 * @describe 将传入的字符串/数字...转成统一格式的Date对象
 * @param {Object} date
 * @return {Date}
 */
tool.getTimeBasic = function (date) {
  if(!date){
    return new Date();
  }
  return new Date(date);
};

/**
 * @describe  获取时间戳
 * @param {Date} date
 * @return {number}
 */
tool.getTimeStamp = function(date){
  return tool.getTimeBasic(date).getTime();
};

/**
 * @describe  将月份的各种表达转成0，1，2..11
 * @param {String} str
 * @param {String} style
 * @return {number}
 */
tool.getMonthFromSymbol = function(str, style){
  const monthDict = [
    [ 1,'一','January','Jan'],
    [ 2,'二','February','Feb'],
    [ 3,'三','March','Mar'],
    [ 4,'四','April','Apr'],
    [ 5,'五','May','May'],
    [ 6,'六','June','Jun'],
    [ 7,'七','July','Jul'],
    [ 8,'八','August','Aug'],
    [ 9,'九','September','Sept'],
    [ 10,'十','October','Oct'],
    [ 11,'十一','November','Nov'],
    [ 12,'十二','December','Dec']
  ];
  let index = 1;
  switch (style) {
    case 'M':
      index = 0;
      break;
    case 'MM':
      index = 1;
      break;
    case 'MMM':
      index = 2;
      break;
    case 'MMMMM':
      index = 3;
      break;
  }
  let month = -1;
  for(let i = 0; i<=11; i++){
    if(String(str) === String(monthDict[i][index])){
      month = monthDict[i][0]-1;
      break;
    }
  }
  return month;
};

module.exports = tool;
