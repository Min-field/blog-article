var throttle = function(fn, gap){
    var lastTime, 
        currTime, 
        timer; 

    return function(){
        var context = this, 
            args = arguments; 
        currTime = +new Date();
        
        if(lastTime && lastTime + gap < currTime){
            timer && clearTimeout(timer);
            timer = setTimeout(function(){        // 保证在结束的时间执行一次
                lastTime = currTime;              // 这里的lastTime是指上一次的fn执行时间
                fn.apply(content, args); 
            }, gap); 
        } else {
            lastTime = currTime;                 // 在开始和到达时间间隔的时候各执行一次
            fn.apply(context, args);        
        }
    }
}