process.stdin.resume();
process.stdin.setEncoding('utf8');
var input = '';

process.stdin.on('data', function(chuck){
    input += chuck; 
}); 

process.stdin.on('end', function(){
    var lineCount = 1,
        inputLines = input.split('\n');

    var n = +inputLines[0];
    while(lineCount <= n){
        var str = inputLines[lineCount++].trim(); 
        var reg = /((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z]))^[A-Za-z][0-9A-Za-z]{7,}$/
        if(reg.test(str))
            console.log('YES');
        else
            console.log('NO');
    }
});