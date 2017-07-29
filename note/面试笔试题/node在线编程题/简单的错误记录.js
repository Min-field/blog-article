process.stdin.resume();
process.stdin.setEncoding('utf8');

var map = {
    '3': 1, 
    '4': 2,
    '5': 3,
    '6': 4,
    '7': 5,
    '8': 6,
    '9': 7,
    '1': 8,
    'J': 9,
    'Q': 10,
    'K': 11, 
    'A': 12,
    '2': 13,
    'o': 14, 
    'O': 15
}
var input = '';
process.stdin.on('data', function(data){
    input += data;
}); 

process.stdin.on('end', function(){
    input = input.split('\n')[0];
    // console.log('herere');
    input = input.split('-');
    // console.log(input);
    input[0] = input[0].split(' ').join(' ');
    input[1] = input[1].split(' ').join(' ');
    var type1 = judgeType(input[0]);
    var type2 = judgeType(input[1]);
    if(type1 === type2){
        if(type1 === 1){
           if(input[0].indexOf('O') !== -1)
                console.log(input[0]);
           else if(input[1].indexOf('O') !== -1)
                console.log(input[1]);
           else if(input[0].indexOf('o') !== -1)
                console.log(input[0]);
           else if(input[1].indexOf('o') !== -1)
                console.log(input[1]);
           else {
                if(map[input[0].trim()[0]] < map[input[1].trim()[0]])
                    console.log(input[1]);
                else 
                    console.log(input[0]);
           }
        } else {
            if(map[input[0].trim()[0]] < map[input[1].trim()[0]])
                console.log(input[1]);
            else 
                console.log(input[0]);
        }
    } else {
        if(type1 !== 4 && type1 !== 6 && type2 !== 4 && type2 !== 6)
            console.log('ERROR');
        else {
            if(type1 === 6)
                console.log(input[0]);
            else if(type2 === 6)
                console.log(input[1]);
            else if(type1 === 4)
                console.log(input[0]);
            else if(type2 === 4)
                console.log(input[1]);
        }
    }
});

// 需要提前对10的处理
var type = [1, 2, 3, 4, 5, 6];
var judgeType = function(str){
    if(str.indexOf('o') !== -1 && str.indexOf('O') !== -1)
        return 6; 
    else if(str.indexOf('o') !== -1)
        return 1; 
    else if(str.indexOf('O') !== -1)
        return 1; 
    else 
        return type[str.slice().split(' ').join('').length - 1];
}