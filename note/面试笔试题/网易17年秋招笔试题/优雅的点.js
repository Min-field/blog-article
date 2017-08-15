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
        var num = lines[lineCount++].trim();
        if(num === '') continue; 
        num = +num; 
        var count = 0; 
        for(var i = 0; i <= Math.sqrt(num); i++){
            var b = num - i * i; 
            if(Math.sqrt(b) === parseInt(Math.sqrt(b))){
                if(i === 0 || b === 0) 
                    count += 2; 
                else 
                    count += 4;
            }
        }
        console.log(count);
    }
})