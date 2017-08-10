process.stdin.resume();
process.stdin.setEncoding('utf8');

var input = '';

process.stdin.on('data', function(data){
    input += data; 
}); 

process.stdin.on('end', function(){
    var lineCount = 0; 
    lines = input.split('\n');
    while(lineCount < lines.length){
    var line1 = lines[lineCount++].trim();
    if(line1 == '') continue; 
    var line2 = lines[lineCount++].trim();
    if(line2 == '') continue; 
    line1 = line1.trim().split(' ');
    line2 = line2.trim().split(' ');
    var limit = +line1[1];
    var count = 0; 
    var total = 0; 
    var arr = line2;
    if(+line1[2] > +line1[0])
        return 0; 
    var n = +line1[0],
        c = +line1[2];
    var arr = line2;
    for(var i = 0; i < c; i++){
        var tmp = +arr[i];
        total += tmp;
    }
    if(total <= limit)
        count++;
    for(var i = c; i < n; i++){
        var tmp1 = +arr[i];
        var tmp2 = +arr[i-c];
        total = total + tmp1 - tmp2; 
        if(total <= limit)
            count ++; 
    }

    console.log(count);
    }
})