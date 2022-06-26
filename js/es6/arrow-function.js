// const multipleTen = (num) => {
//     return num * 10;
// }
//==================================
// const multipleTen = (num) => num * 10;
//==================================
// const multipleTen = num => num * 10;

//==================================
// default parameters
const multipleTen = (num = 1) => num * 10;

console.log(multipleTen(10));
console.log(multipleTen());
