process.stdin.resume();
process.stdin.setEncoding('utf8');

var data = '';
process.stdin.on('data', function(chuck){
    data += chuck; 
});

process.stdin.on('end', function(){
    var lines = data.split('\n');
    var lineCount = 0; 
    while(lineCount < lines.length){
        var n = lines[lineCount++].trim();
        if(n === '') continue; 
        n = +n; 
        console.log(rec(n));
    }
}); 

function rec(num){
    console.log(num);
    if(num == 1) return 1; 
    if(num % 2 == 0) 
        return rec(parseInt(num / 2)) + parseInt(num * num / 4); 
    else 
        return rec(num - 1) + num;  
}