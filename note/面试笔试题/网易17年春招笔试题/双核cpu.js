process.stdin.resume();
process.stdin.setEncoding("utf8");

var data = "";
process.stdin.on("data", function(chuck) {
    // console.log(chuck);
    data = data + chuck;
});

process.stdin.on("end", function() {
    // console.log(data);
    data = data.split("\n");
    var lineCount = 0;

    while (lineCount < data.length) {
        // console.log(data);
        // console.log(lineCount);
        // console.log(data[lineCount]);
        var n = data[lineCount++].trim();
        if (n === "") continue;
        var temp = +n;
        // console.log(typeof temp);
        // console.log(temp);
        var arr = data[lineCount++].trim();
        if (arr === "") {
            temp++;
            continue;
        }
        arr = arr.split(" ");
        var dp = [],
            sum = 0;
        arr.forEach(function(item, index) {
            arr[index] = (+arr[index]) >> 10; 
            sum += arr[index];
        });
        for (var i = 0; i <= sum; i++) 
            dp.push(0);
        // console.log(dp);
        // console.log(arr);
        var sumTemp = sum;
        sum = (sum / 2).toFixed(0);
        dp[0]  = 1;
        for (var i = 0; i < arr.length; i++) 
            for (var j = dp.length - 1; j >= 0; j--){
                if(j - arr[i] >= 0)
                    dp[j] = dp[j] || dp[j - arr[i]];
            }
        var closest1 = -1,
            closest2 = -1;
        for (var i = sum; i <= dp.length; i++)
            if (dp[i]) {
                closest1 = i;
                break;
            }
        for (var i = sum - 1; i >= 0; i--)
            if (dp[i]) {
                closest2 = i;
                break;
            }
        // console.log(dp);
        if (Math.abs(closest1 - sum) < Math.abs(closest2 - sum)) {
            console.log(Math.max(closest1, sumTemp - closest1) << 10);
        } else console.log(Math.max(closest2, sumTemp - closest2) << 10);
    }
});
