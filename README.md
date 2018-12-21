
# waati
   
   ___A very lightweight time processing library, simple and reliable___
   
### Advantage 
   * Lightweight
   * No dependence
   * Flexible

### Api
   * 格式化时间  
        - watti.format(date, style);
        
   * 获取指定风格的时间单位
        - watti.getDaysOfWeek(date, style);     
        - watti.getDaysOfMonth(date, style);     
        - watti.getMonth(date, style);     
        - watti.getYear(date, style);     
        - watti.getHours(date, style);     
        - watti.getMinutes(date, style);
        - watti.getSeconds(date, style);
             
   * 获取时间戳
        - watti.getTimeStamp(date);
    
   * 从字符串解析日期
        - watti.strToDate(string,style); 
        - ___notes: 解析日期的时候，以new Date(0)为模板去解析日期并赋值，如果没有解析到某个值，则以new Date(0)的对应值为默认值。___
        - ___比如：传入了 ('2-2 12:23:12','M-d H:m:s'), 则返回：1970-02-02T12:23:12.000Z___
        
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
        * 星期  
           w:     1,2,3,4...  
           ww:    一，二，三...  
           www:   星期一，星期二，星期三...  
           WW:    Sunday,Monday...  
           W:     Sun,Mon...  

### Demo
    
   * 格式化时间  
```$xslt
    let temp = watti.format(new Date().getTime(), 'M月dd日 周ww HH:mm:SS');
    // 12月20日 周日 13:23:46
```
   * 获取指定风格的时间单位
```$xslt
    watti.getDaysOfWeek(1545298077931,'WW');
    // Thursday
    watti.getHours(1545298077931,'HH');
    // 17
```   
   * 获取时间戳
```$xslt
    let timeStamp = watti.getTimeStamp(new Date());
    // 1545290473105
```  
   * 从字符串解析日期
```$xslt
    let date = watti.strToDate('=2 月21 日  - 周五 01:26:33zz 2017--','=M 月dd 日  - 周ww HH:mm:SSzz yyy--');
    // Date 对象
```   
   * 获取时间差描述
```$xslt
    let str = watti.getRange(1545297915241,1545290473105);//和指定时间比较
    // 几个小时前
    let str = watti.getRangeFromNow(new Date());//和当前时间比较
    // 几秒钟前
```   

