function* test(){
    yield 'test1';
    yield 'test2';
    return 'return test';
}

var testIterator = test();
testIterator.next();
console.log(typeof testIterator);
console.log(testIterator.__proto__)
console.log(testIterator);
console.table(testIterator);
