const min = Object.create(null);

min.getTime = function (date) {
    return getTimeBasic(date);
};

min.getDaysOfWeek = function(date, style){
    return getDaysOfWeek(date,style)
};

min.getDaysOfMonth = function(date, style){
   return getDaysOfMonth(date, style)
};

min.getMonth = function(date, style){
    return getMonth(date, style)
};

min.getYear = function (date, style) {
    return getYear(date,style)
};

min.getHours = function (date, style) {
    return getHours(date,style)
};

min.getMinutes = function (date, style) {
    return getMinutes(date,style);
};

min.getSeconds = function (date, style) {
    return getSeconds(date, style);
};


/**
 * @describe  返回秒数
 * @param {String}
 */
const getSeconds = function (date, style){
    let localDate = getTimeBasic(date);
    let seconds = localDate.getSeconds();
    switch (style) {
        case 'ss' || 'SS':
            if (minutes < 10) {
                seconds = '0' + seconds.toString()
            }
            break;
        default:
    }
    return seconds;
};

/**
 * @describe  返回分钟数
 * @param {String}
 */
const getMinutes = function (date, style) {
    let localDate = getTimeBasic(date);
    let minutes = localDate.getMinutes();
    switch (style) {
        case 'mm' || 'MM':
            if(minutes<10){
                minutes = '0'+minutes.toString()
            }
            break;
        default:
    }
    return minutes;
};

/**
 * @describe  获取小时数
 * @param {String}
 */
    // h 1 2 3   .....12小时计时法
    // hh 01 02 03  ....12小时计时法
    // H 1 2 3 ....24
    // HH 01 02 03 ...24
const getHours = function (date, style) {
    let localDate = getTimeBasic(date);
    let hours = localDate.getHours(); // 0  1 2 3 4 5 6 7 .....
    switch (style) {
        case 'h':
            if(hours>12){
                hours = hours-12;
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
 * @describe 获取星期
 * @param {String}
 */
const getDaysOfWeek = function(date, style){
    let localDate = getTimeBasic(date);
    let day = localDate.getDay();
    const weekDict = [
        [1, '一', '星期一', 'Monday', 'Mon'],
        [2, '二', '星期二', 'Tuesday', 'Tues'],
        [3, '三', '星期三', 'Wednesday', 'Wed'],
        [4, '四', '星期四', 'Thursday', 'Thur'],
        [5, '五', '星期五', 'Friday', 'Fri'],
        [6, '六', '星期六', 'Saturday', 'Sat'],
        [7, '日', '星期日', 'Sunday', 'Sun'],
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
 * @describe 获取日期--多少号
 * @param {String}
 */
const getDaysOfMonth = function (date, style) {
    let localDate = getTimeBasic(date);
    let month = localDate.getDate();
    switch (style) {
        case 'dd' || 'DD':
            if (month<10) {
                month = '0'+month.toString();
            }
            break;
        default:
    }
    return month;
};

/**
 * @describe 获取月份
 * @param {String}
 */
const getMonth = function (date, style) {
    let localDate = getTimeBasic(date);
    let month = localDate.getMonth();
    const monthDict = [
        [ 1,"01",'一','January','Jan'],
        [ 2,"02",'二','February','Feb'],
        [ 3,"03",'三','March','Mar'],
        [ 4,"04",'四','April','Apr'],
        [ 5,"05",'五','May','May'],
        [ 6,"06",'六','June','Jun'],
        [ 7,"07",'七','July','Jul'],
        [ 8,"08",'八','August','Aug'],
        [ 9,"09",'九','September','Sept'],
        [ 10,"10",'十','October','Oct'],
        [ 11,"11",'十一','November','Nov'],
        [ 12,"12",'十二','December','Dec']
    ];

    switch (style) {
        case 'm':
            month = monthDict[month][0];
            break;
        case 'mm':
            month = monthDict[month][1];
            break;
        case 'mmm':
            month = monthDict[month][2];
            break;
        case 'MM':
            month = monthDict[month][3];
            break;
        case 'M':
            month = monthDict[month][4];
            break;
        default:
            month = monthDict[month][1];
    }
    return month;
};

/**
 * @describe 获取年份
 * @param {String}
 */
const getYear = function (date, style) {
    let localDate = getTimeBasic(date);
    let year = localDate.getFullYear();
    switch (style) {
        case 'y' || 'Y':
            year = year - (parseInt(year/100)*100);
            break;
        default:
    }
    return year;
};


const getTimeBasic = function (date) {
    if(!date){
        return new Date();
    }
    let time = null;
    try {
        time = new Date(date);
        return time;
    }catch (e) {
        // throw err = new Error("传入的参数错误");
        return "参数错误"
    }
};
module.exports = min;
