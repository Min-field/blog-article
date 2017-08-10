process.stdin.resume();
process.stdin.setEncoding('utf8');

var input = '';
process.stdin.on('data', function(data){
    input += data; 
}); 
var canculate = function(p, t){
        var finalP = 0; 
        var temp = p; 
        for(var i = 0; i < t; i++){
            finalP = finalP + temp; 
            temp = temp * (1 - p);
        }
        console.log(finalP.toFixed(2));
}
process.stdin.on('end', function(){
    var lineCount = 0;  
    var lines = input.split("\n"); 
    while(lineCount < lines.length){
        var line1 = lines[lineCount++].trim();
        if(line1 == '') 
            continue; 
        line1 = line1.split(' ');
        var m = +line1[0],
            n = +line1[1],
            x = +line1[2],
            y = +line1[3],
            t = +line1[4], 
            tmp = m; 
        var totalP = 0,
            specialP = 0;
        for(var tmp = 0; tmp < m; tmp++){
            var pLine = lines[lineCount++].trim();
            if(pLine == ''){
                // tmp--;
                continue;
            }
            pLine = pLine.split(' ');
            pLine.forEach(function(value, index){
                value = +value; 
                totalP += value; 
            }); 
            if(tmp == (x - 1))
                specialP = +pLine[y - 1];
        }
        totalP = totalP / (m * n);
        if(totalP == specialP){
            console.log('equal');
            canculate(totalP, t);
        } else if (totalP > specialP){
            console.log('ss');
            canculate(totalP, t);
        } else {
            console.log('cc');
            canculate(specialP, t);
        }
    }
})