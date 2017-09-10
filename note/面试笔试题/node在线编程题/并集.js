process.stdin.resume();
process.stdin.setEncoding('utf8');

var data = '';
process.stdin.on('data', (chuck) => {
    data += chuck; 
});

process.stdin.on('end', () => {
    var lines = data.split('\n');
    var lineCount = 0; 
    while(lineCount < lines.length){
        var nm = lines[lineCount++].trim();
        var set1 = lines[lineCount++].trim();
        var set2 = lines[lineCount++].trim(); 
        set1 = set1.split(' ');
        set2 = set2.split(' ');
        set1.forEach((item, index) => set1[index] = +item);
        set2.forEach((item, index) => set2[index] = +item);
        var set = new Set([...set1, ...set2]);
        set = Array.from(set);
        set.sort( (a, b) => a - b);
        console.log(set.join(' '));
    }
})