process.stdin.resume();
process.stdin.setEncoding('utf8');

var data = '';
process.stdin.on('data', function(chuck){
    data += chuck; 
});

process.stdin.on('end', function(){
    var lineCount = 0; 
    data = data.split('\n'); 
    while(lineCount < data.length){
        var totalTime = (1 << 30);
        var n = data[lineCount ++].trim();
        if(n == '') continue; 
        n = +n; 
        var Tx = data[lineCount ++].trim().split(' ');
        var Ty = data[lineCount ++].trim().split(' ');
        var officePos = data[lineCount ++].trim().split(' ');
        var time = data[lineCount ++].trim().split(' ');
        for(var i = 0; i < n; i++)
            totalTime = Math.min(totalTime, taxi(+officePos[0], +officePos[1], +Tx[i], +Ty[i], +time[0], +time[1])); 
        totalTime = Math.min(totalTime, taxi(+officePos[0], +officePos[1], +officePos[0], +officePos[1], +time[0], +time[1]));
        console.log(totalTime);
    }
});

function taxi(targetX, targetY, tx, ty, walkTime, taxiTime){
    var time = 0; 
    for(var i = 0; i < Math.abs(tx - 0); i++)
        time += walkTime; 
    for(var i = 0; i < Math.abs(ty - 0); i++)
        time += walkTime; 

    for(var i = 0; i < Math.abs(targetX - tx); i++)
        time += taxiTime; 

    for(var i = 0; i < Math.abs(targetY - ty); i++)
        time += taxiTime; 

    return time; 
}