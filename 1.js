for(i=0;i<10;i++){
//console.log(i)
}

let name = 'Anu'
let scr = 100
let bon = 20

let totalScore = scr + bon
//console.log(name)
//console.log(totalScore)

let firstName = 'Anu'
firstName = 'Akash'
let lastName = 'Gupta'

let fullName = firstName + '$$' + lastName
//console.log(fullName)
//console.log(firstName + '-' + lastName)

var score = 100
score = 130
const bonus = 50

var finalScore = (score + bonus) * 1.8
//console.log(finalScore)

var complex = ((4 + 4) * 5)/2
// console.log(complex)

let tempInFahrenheit = 100

//do calculation
// (T(°F) - 32) × 5/9
let celsius = (tempInFahrenheit - 32) * 5/9
//console.log(celsius)

//Null Values
//temp is coming from Website API
var temp = 0

//done some calculations
temp = 2
//Null and undefined are completely different from 0 value
//console.log("Current Temprature is : "+ temp)

//Grade system

//10 - Great job
//5 - Work hard
//2 - poor
//0 - fail

//Boolean - true/false

let Grade = true
//console.log(Grade)

let actualGrade = 10
actualGrade = 7
let myGrade = (actualGrade <= 10)
//console.log(myGrade)

//If-else statements or cases :

var whoIsHere = 'user'
//whoIsHere = 'anu'
if(whoIsHere === 'user'){
    // console.log('Greeting message for user')
    // console.log('Allow access to view all courses')
}else if(whoIsHere === 'teacher'){
    console.log('Greeting message for teacher')
    console.log('Allow access to his courses')
}else {
    console.log('MESSAGE : please verify your email')
    console.log('Send user an email for verification')
}


// && - AND operator - Both sides need to be true
// || - OR operator - One side need to be true

let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if(!isVerified && isLoggedIn && hasPaymentToken){
    console.log('Greeting message to user')
    console.log('Grant access to paid course')
}else if(isVerified || isGuest){
    console.log('Allow free previews')
}else{
    console.log('MESSAGE : please contact admin')
}


//Scope in JS:

let iAmGlobal = 'someValue'

if(true){
    var iamLocal = 'someMoreValue'
    iAmGlobal = 'captainMarvel'
    // console.log(iAmGlobal);
   // console.log(iamLocal);
}

//console.log(iamLocal);
//console.log(iAmGlobal);



//Kings Territory Problem in JS

 let king = 'John'

if(true){
     let king = 'Jane'

    if(true){
       let king = 'Ram'
        console.log(king);
    }
}

if(true) {
    //console.log("Iam second part i.e; Global king : " + king);
}

//Arrays and Templates Literals in JS :

const superHeroes = ['Iron Man', 'Captain America','Spider Man','Thor']

//console.log(superHeroes)
//console.log(superHeroes[0])
//console.log(superHeroes[superHeroes.length - 1])

// Note : Tildes sybmol - ` `
console.log(`We have ${superHeroes[superHeroes.length - 1]} as a stronger super hero`);
//console.log(`We have total ${superHeroes.length} super heroes`);
//console.log(`We have ${superHeroes} as a super heroes`);


// 3 Must known methods 4 []s in JS :

const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

//numbers[1] = 'Something'
//console.log(numbers)

//start
// console.log(numbers.shift())
// console.log(numbers)

// numbers.unshift('Something')
// console.log(numbers)

//end
// console.log("The element to be deleted is: "+numbers.pop())
// console.log(numbers)
//numbers.push('Seven')
//console.log(numbers.push())
//console.log(numbers)

//Middle
numbers.splice(2, 2, 'Something')
console.log(numbers)


//Functions in JS :


