'use strict';
const tool = Object.create(null);

tool.getSeconds = function (date, style){
    let seconds = date.getSeconds();
    switch (style) {
        case 'ss':
        case 'SS':
            if (seconds < 10) {
                seconds = '0' + seconds.toString()
            }
            break;
        default:
    }
    return seconds;
};

tool.getMinutes = function (date, style) {
    let minutes = date.getMinutes();
    switch (style) {
        case 'mm':
            if(minutes<10){
                minutes = '0'+minutes.toString()
            }
            break;
        default:
    }
    return minutes;
};

tool.getHours = function (date, style) {
    let hours = date.getHours(); // 0  1 2 3 4 5 6 7 .....
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
        case 'hhh':
            let label = hours>=18?'晚上':(hours>=12?'下午':(hours>=6?'早上':'凌晨'));
            if(hours>13){
                hours -=12;
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

tool.getTimeBasic = function (date) {
    if(!date){
        return new Date();
    }
    return new Date(date);
};

module.exports = tool;
