process.stdin.resume();
process.stdin.setEncoding('utf8');

var table = new Array(31); 
var table1 = new Array(31);
var table2 = new Array(31);
table[0] = 0; 
table[1] = 3; 
table[2] = 9; 
table1[2] = 3; 
table2[2] = 6; 

for(var i = 3; i < table.length; i++){
    table1[i] = table1[i - 1] + table2[i - 1];
    table2[i] = table1[i - 1] * 2 + table2[i - 1];
    table[i] = table1[i] + table2[i];
}
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
        line = +line; 
        console.log(table[line]);
    }
})