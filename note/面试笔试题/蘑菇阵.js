process.stdin.resume();
process.stdin.setEncoding('utf8');

var data= '';
process.stdin.on('data', function(chuck){
    data = data + chuck;
}); 

process.stdin.on('end', function(){
    var lines = data.split('\n');
    var lineCount = 0; 
    while(lineCount < lines.length){
        var line = lines[lineCount++].trim(); 
        if(line === '') continue; 
        line = line.split(' ');
        var m = +line[0],
            n = +line[1],
            k = +line[2],
            temp = k; 
        var dp = [],
            flag = [];

        for(var i = 0; i <= m; i++){
            dp.push([]);
            flag.push([]);
            for(var j = 0; j <= n; j++){
                dp[i].push(0);
                flag[i].push(0);
            }
        }   
        while(temp--){
            var pos = lines[lineCount++].trim();
            if(pos === ''){
                temp++; 
                continue; 
            }
            pos = pos.split(' ');
            var posX = +pos[0],
                posY = +pos[1];
            flag[posX][posY] = 1; 
        }

        dp[1][0] = 1; 
        dp[0][1] = 1;
        for(var i = 1; i <= n; i++)
            for(var j = 1; j <= m; j++){
                if(flag[i][j]){
                    dp[i][j] = 0; 
                    continue; 
                } else if(j === 1 || j === m){
                    console.log('j == 1')
                    dp[i][j] = dp[i - 1][j]; 
                } else if(i === 1 || i === n){
                    console.log('i == 2')
                    dp[i][j] = dp[i][j - 1];
                } else 
                    dp[i][j] = 0.5 * dp[i - 1][j - 1] + 0.5 * dp[i][j - 1];       
            }
        console.log(dp);
        console.log(dp[m][n]);
    }
})