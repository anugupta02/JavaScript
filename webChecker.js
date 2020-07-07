// Username and Password checking basics in JS :

let userEmail = 'anu123abc'
let user = 'anugupta'
let password = 'astronaut5678'

console.log(password.length)
console.log(userEmail.toLowerCase())
console.log(user.toUpperCase())
console.log(userEmail.trim())

let userChecker = function (myString) {
    if((myString.includes(123)) && (myString.length > 6)){
        return true
    }
        return false
}
console.log(userChecker(userEmail))

let passChecker = function (pass) {
    if((pass.includes(5678)) && (pass.length > 8)){
        return true
    }
    return false
}
console.log(passChecker(password))

