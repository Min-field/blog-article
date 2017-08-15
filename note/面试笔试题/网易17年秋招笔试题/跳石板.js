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
        var line = lines[lineCount++].trim();
        if(line === '') continue; 
        line = line.split(' ');
        var n = +line[0];
        var m = +line[1];
        var dp = new Array(m - n + 1);
        for(var i = 0; i < dp.length; i++)
            dp[i] = -1;
        // console.log(dp);
        var temp = [];
        dp[0] = 0;
        for(var i = 0; i <= m - n; i++){
            if(dp[i] === -1) continue; 
            getSub(i + n, temp);
            temp.forEach(function(item, index){
               if(i + item > m - n) return; 
               if(dp[i + item] === -1) 
                    dp[i + item] = dp[i] + 1; 
               else 
                    dp[i + item] = Math.min(dp[i + item], dp[i] + 1); 
            });
        }
        // console.log(dp);
        console.log(dp[m - n]);
    }
    function getSub(num, subArr){
        subArr.splice(0);
        // console.log(subArr);
        for(var i = 2; i < Math.sqrt(num); i++){
            if(!(num % i)){
                subArr.push(i);
                subArr.push(num / i);
            } 
        }
        if(Math.sqrt(num) === parseInt(Math.sqrt(num)))
            subArr.push(Math.sqrt(num));
    }
})