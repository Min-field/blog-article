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
        var line = lines[lineCount++].trim();
        if(line === '') continue; 
        line = line.split(' ');
        var x = +line[0],
            y = +line[1];
        console.log(rev(rev(x) + rev(y)));
    }
});

function rev(num){
    var str = new String(num);
    return parseInt(str.split('').reverse().join(''));
}