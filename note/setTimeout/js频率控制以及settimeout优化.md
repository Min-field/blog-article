- [x] js 频率控制原理
- [x] js settimeout 队列如何优化
- [x] Js缓存机制，异步请求如何缓存
- [ ] js 状态机 和 对状态管理机制的理解
- [x] 虚拟dom和真实dom的区别
- [ ] 使用webpack搭建vue的测试环境

##### js 频率控制原理

js频率控制 是通过js节流来实现的

在界面如鼠标移动，resize等很频繁的操作时，如果不对js做节流控制，事件处理函数会不断的执行，可能会占用极大的内存和cpu，在某些老式的计算机上可能会导致浏览器崩溃。在这个时候就需要某种控制方式去修改js函数的调用频率，这就是js的频率控制

具体的控制方式用两种，一种是通过消除抖动的方式（debounce) ， 具体的为如果未达到间隙时间，则一直等待，用比较通俗的方式解释就是，比如在电梯中，一个人进入电梯，则15s后启动电梯，如果在15s内如果又又一个进入电梯，则继续等待，这就是debounce的防抖动模式，即对每一次的频繁操作只启动一次事件处理。具体的代码是通过定时器来实现

```javascript
var debounce = function (fn, delay){
    var timer = null; 
    return function(){
        var context = this,
            args = arguments; 
        timer && clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(this, arguments);
        }, delay);
    }
}
```

上述的节流方式，虽然在某种意义上极大改善了程序性能，在浏览器上也能跑的很好，但是，这个防抖动模式在某些情况下处理的并不好，比如说是在一个拖动中，如果使用这种方式节流，我们看到的拖动是在我们拖动很久之后，页面并没用发生任何的变化，但是在拖动很久停下来之后，拖动目标却瞬间到达了我们想要它到达的位置，这样就会显的很奇怪，浏览器对页面的重绘速度大概是一秒60次，也就是平均16ms重绘一次，而我们想要做的仅仅是让页面的重绘速度变的慢一点，比如说50ms，这样就出现一种叫throttle的节流方式，用电梯来解释就是，一个人进入电梯后，15s后启动电梯，不管在这15s内有没有人继续进入电梯，这就是throttle的原理，具体的也是用定时器来实现，给定一个函数，以及一个间隔时间，可以实现在某个间隔时间内实现函数的调用。

```javascript
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
                lastTime = currTime; 
                fn.apply(content, args); 
            }, gap); 
        } else {
            lastTime = currTime;                 // 在开始和到达时间间隔的时候各执行一次
            fn.apply(context, args);        
        }
    }
}
```

