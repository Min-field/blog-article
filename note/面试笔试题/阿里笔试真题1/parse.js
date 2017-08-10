// 实现一个parse ，作用如下
// var object = {
//  b: { c: 4 }, d: [{ e: 5 }, { e: 6 }]
// };
// console.log( parse(object, ‘b.c’) == 4 ) //true
// console.log( parse(object, ‘d[0].e’) == 5 ) //true
// console.log( parse(object, ‘d.0.e’) == 5 ) //true
// console.log( parse(object, ‘d[1].e’) == 6 ) //true
// console.log( parse(object, ‘d.1.e’) == 6 ) //true
// console.log( parse(object, ‘f’) == ‘undefined’ ) //true

var parse = function(obj, str){
    str.replace('[', '.').replace(']', '').split('.').forEach( (item, index) => obj && (obj = obj[item]));
    return obj;
}q

var object = {
 b: { c: 4 }, d: [{ e: 5 }, { e: 6 }]
};
console.log( parse(object, 'b.c') == 4 ) //true
console.log( parse(object, 'd[0].e') == 5 ) //true
console.log( parse(object, 'd.0.e') == 5 ) //true
console.log( parse(object, 'd[1].e') == 6 ) //true
console.log( parse(object, 'd.1.e') == 6 ) //true
console.log(parse(object, 'f'));
console.log( parse(object, 'f') == undefined ) //true
