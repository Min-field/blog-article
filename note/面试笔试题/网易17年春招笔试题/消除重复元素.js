process.stdin.resume();
process.stdin.setEncoding('utf8');

var data = '';
process.stdin.on('data', function(chuck){
    data = data + chuck; 
});
process.stdin.on('end', function(){
    data = data.split('\n');
    var lineCount = 0; 
    while(lineCount < data.length){
        var n = data[lineCount++].trim();
        if(n === '') continue; 
        var arr = data[lineCount++].trim().split(' ');
        var flag = [];
        arr.forEach(function(item, index){
            flag.push(1);
        });
        var map = {}; 
        for(var i = 0; i < arr.length; i++){
            if(typeof(map[arr[i]]) != 'undefined'){
                flag[i] = 1;
                flag[map[arr[i]]] = 0; 
            }
            map[arr[i]] = i; 
        }
        var res = [];
        for(var i = 0; i < arr.length; i++){
            if(flag[i]) res.push(arr[i]);
        }
        console.log(res.join(' '));
    }
    return ; 
})