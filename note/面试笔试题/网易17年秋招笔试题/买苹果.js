process.stdin.resume();
process.stdin.setEncoding('utf8');

var data = '';
process.stdin.on('data', function(chuck){
    data += chuck; 
}); 

process.stdin.on('end', function(){
    var lineCount = 0; 
    var lines = data.split('\n');
    while(lineCount < lines.length){
        var n = lines[lineCount++].trim();
        if(n === '') continue; 
        n = +n;
        var res = -1; 
        for(var i = 0; i < parseInt((n / 8) + 1); i++){
            // console.log((n - i * 8) % 6);
            // console.log(i);
            if((n - i * 8) % 6 === 0){
                if(res < 0)
                    res = i + (n - i * 8) / 6; 
                else 
                    res = Math.min(res, i + (n - i * 8) / 6);

            }
        }
        console.log(res);
    }
})