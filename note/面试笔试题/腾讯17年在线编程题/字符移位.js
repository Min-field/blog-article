process.stdin.resume();
process.stdin.setEncoding('utf8'); 

var input = '';
process.stdin.on('data', function(data){
    input += data; 
});

process.stdin.on('end', function(){
    var lines = input.split('\n');
    var lineCount = 0; 
    while(lineCount < lines.length){
        var line = lines[lineCount++].trim();
        if(line == '') continue; 
        var lastIndex = line.length - 1; 
        for(var i = line.length - 1; i >= 0; i--){
            if(line[i] <= 'Z' && line[i] >= 'A'){
                var tmp = line[i];
                for(var j = i + 1; j <= lastIndex; j++){
                    console.log(line[j]);
                    line[j-1] = line[j];
                    line[j-1] = "";
                    console.log(line);
                }
                line[lastIndex] = tmp;
                lastIndex --; 
            }
        }
        console.log(line);   
        var test = '12345';
        test[1] = 'j';
        console.log(test);
    }
    return 0;
})