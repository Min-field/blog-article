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