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
        var n = lines[lineCount++].trim();
        var nums; 
        if(n === '') continue; 
        while(lineCount < lines.length){
            nums = lines[lineCount++].trim(); 
            if(nums === '') continue; 
            nums = nums.split(' '); 
            n = +n; 
            nums.forEach(function(item, index){
                nums[index] = +nums[index];
            });
            break;
        }

        var count = 0; 
        while(nums.length > 1){
            // console.log('xxxx');
            if(nums[0] > nums[nums.length - 1]){
                var add1 = nums[nums.length - 1],
                    add2 = nums[nums.length - 2]; 
                nums.splice(nums.length - 2, 2);
                nums.push(add1 + add2);
                count ++; 
            } else if(nums[0] < nums[nums.length - 1]){
                var add1 = nums[0],
                    add2 = nums[1]
                nums.splice(0, 2);
                nums.unshift(add1 + add2);
                count ++; 
            } else {
                nums.splice(0, 1);
                nums.splice(nums.length - 1, 1);
            }
        }
        console.log(count);
    }
})