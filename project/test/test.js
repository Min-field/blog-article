class Test{
    #x;
    constructor(x, y){
        this.x = x; 
        this.y = y; 
    }
    toString(){
        // console.log(Test.name);
        return Test.name; 
    }
}

const test  = new Test(1, 2);
console.log(test.toString());

function Squre(x, y){
    this.x = x; 
    this.y = y; 
}

function squre(x, y){
    console.log('this is a test for the small letter squre');
}

console.log(squre.name);
console.log(Squre.name);