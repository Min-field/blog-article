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
        var queue = data[lineCount++].trim();
        if(queue === '') continue; 
        var bubble1 = bubble(queue, 'G', 0), 
            bubble2 = bubble(queue, 'G', 1),
            bubble3 = bubble(queue, 'B', 0),
            bubble4 = bubble(queue, 'B', 1);
        console.log(Math.min(bubble1, bubble2, bubble3, bubble4));
    }
});

function bubble(str, char, flag){
    // console.log(str);
    var str = str.split('');
    var count = 0; 
    if(flag == 0){
        for(var i = 0; i < str.length; i++)
            for(var j = str.length - 1; j >= i + 1; j--)
                if(str[j] === char && str[j] !== str[j - 1])
                    swap(j, j - 1);       
    } else {
        for(var i = str.length - 1; i >= 0; i--)
            for(var j = 0; j < i; j++)
                if(str[j] === char && str[j] !== str[j + 1])
                    swap(j, j + 1); 
    }

    function swap(index1, index2){
        var temp = str[index1]; 
        str[index1] = str[index2]; 
        str[index2] = temp; 
        count ++; 
    }
    // console.log(count);
    return count; 
}