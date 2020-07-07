// Generating a random number in JS

let num1 = 22
let num2 = 7

reresult = num1/num2
console.log(result.toFixed(2))

let floatRes = result.toFixed(2)
console.log(Math.floor(floatRes))
console.log(Math.ceil(floatRes))


// Here Dice program starts using random() function in JS : 

let upper = 6
let lower = 1

let myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower
console.log(myRandom)
