process.stdin.resume(); 
process.stdin.setEncoding('utf8');

var lines = '';
process.stdin.on('data', function(data){
    lines += data; 
}); 

process.stdin.on('end', function(){
    lines = lines.split('\n'); 
    var lineCount = 0; 
    while(lineCount < lines.length){
        var pointNums = lines[lineCount++].trim(); 
        if(pointNums == '')
            continue; 
        pointNums = +pointNums; 
        var xMin = 1 << 30; 
        var xMax = 0 - (1 << 30); 
        var yMin = 1 << 30; 
        var yMax = 0 - (1 << 30);
        while(pointNums--){
            var point  = lines[lineCount++].trim(); 
            if(point == ''){
                pointNums++; 
                continue; 
            }
            point = point.split(' '); 
            var x = +point[0], 
                y = +point[1];
            // console.log(x > xMax);
            // console.log("x : y"); 
            // console.log(x +  ' : ' + y);
            xMin = Math.min(xMin, x); 
            xMax = Math.max(xMax, x); 
            yMin = Math.min(yMin, y);
            yMax = Math.max(yMax, y);
            // console.log("xxxxxx");
            // console.log(xMin + ' ' + xMax + ' ' + yMin + ' ' + yMax);
        }
        var s = Math.max(xMax - xMin, yMax - yMin); 
        console.log(s*s); 
    }
})