
# waati
   
   ___A very lightweight time processing library, simple and reliable___
   
### Advantage 
   * Lightweight
   * No dependence
   * Flexible

### Api
   * 格式化时间
        -watti.format(date, style);
        
   * 获取指定的时间单位
        - watti.getDaysOfWeek(date, style);     
        - watti.getDaysOfMonth(date, style);     
        - watti.getMonth(date, style);     
        - watti.getYear(date, style);     
        - watti.getHours(date, style);     
        - watti.getMinutes(date, style);
        - watti.getSeconds(date, style);
             
   * 获取时间戳
        - watti.getTimeStamp(date);
        
   * 获取时间差描述
        - watti.getRange(date，date);           
        - watti.getRangeFromNow(date); 
         
   * tips:关于时间指令的描述： 
        * 年  
           y/yy/Y/YY:           18,19...两位数表示年份  
           yyy/YYY/yyyy/YYYYY:  2018,2109  
           
        * 月  
           M:           1,2,3...  
           MM:          一，二...  
           MMM:         January,February...  
           MMMM:        Jan,Feb...  
           
        * 日  
           d/D:         1,2,3,.....31  
           dd/DD:       01,02,03....31  
               
        * 时  
           h:           1 2 3  ... 12小时计时法  
           hh:          01 02 ...12小时计时法  
           hhh:         凌晨1点,下午2点,晚上9点...  
           H:           1 2 3 ...24小时计时法  
           HH:          01 02 03 ...24小时计时法  
           
        * 分  
           m:           1,2,3....59  
           mm:          01,02...59  
        * 秒  
           s/S:         1,2,3...59  
           ss/SS:       01,02,03....59  

### Demo
    
   * 格式化时间  
```$xslt
    let temp = watti.format(new Date().getTime(), 'M月dd日 周ww HH:mm:SS');
    // 12月20日 周日 13:23:46
```
   * 获取时间戳
```$xslt
    let timeStamp = watti.getTimeStamp(new Date());
    // 1545290473105
```   
   * 获取时间差描述
```$xslt
    let str = watti.getRange(new Date(),1545290473105);//和指定时间比较
    // 几分钟前
    let str = watti.getRangeFromNow(new Date());//和当前时间比较
    // 几秒钟前
```   

