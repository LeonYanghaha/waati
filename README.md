
# waati
   
   ___A very lightweight time processing library, simple and reliable___
   
### Advantage 
   * Lightweight
   * No dependence
   * Flexible

### Api

   #### 年
        y/yy/Y/YY           18,19...两位数表示年份
        yyy/YYY/yyyy/YYYYY  2018,2109
        
   #### 月
        M           1,2,3...
        MM          一，二...
        MMM         January,February...
        MMMM        Jan,Feb...
        
   #### 日
        d/D         1,2,3,.....31
        dd/DD       01,02,03....31
            
   #### 时
        h           1 2 3  ... 12小时计时法
        hh          01 02 ...12小时计时法
        hhh         凌晨1点,下午2点,晚上9点...
        H           1 2 3 ...24小时计时法
        HH          01 02 03 ...24小时计时法
        
   #### 分
        m           1,2,3....59
        mm          01,02...59
   #### 秒
        s/S         1,2,3...59
        ss/SS       01,02,03....59        

### Demo
    
```  
    let temp = watti.format(new Date().getTime(), 'M月dd日 周ww HH:mm:SS');
    // 12月20日 周日 13:23:46
```
