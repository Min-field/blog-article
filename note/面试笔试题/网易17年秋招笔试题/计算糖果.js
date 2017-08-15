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
        var line = lines[lineCount ++].trim();
        if(line === '') continue; 
        line = line.split(' ');
        var x = +line[0],
            y = +line[1],
            z = +line[2],
            p = +line[3];
        
        var a = (x + z) / 2; 
        var b = (z - x) / 2; 
        var c = (z - x - 2 * y) / 2; 

        if(parseInt(a) === a && a >= 0 && parseInt(b) === b && b >= 0 && parseInt(c) === c && c >= 0)
            console.log(a + ' ' + b + ' ' + c);
        else 
            console.log('No');
    }
})