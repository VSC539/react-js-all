//var follows global scope
var a = 'Second time declaring same var variable';

if(true){
    var a = 'This is a Var variable'
}
console.log(a)

// let, const follows block scope
// let l = 'This is forst let'
// if(true){
//     let l = 'This is a let variable'
// }
// console.log(l)