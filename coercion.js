// Coercion in JS :

 console.log('5' + 5);
 //const giveType = typeof {}
 const giveType = typeof '5'
 //const giveType = typeof 5
    console.log(giveType)


// Here true is 1 and false is 0
const adder = true + 5
const adder1 = false + 8
console.log(adder)
console.log(adder1)


const loginDetails = []
//login for getting details from DB

const loginID = loginDetails[0]

if(loginDetails){
    console.log('Allow user to login')
}else{
    console.log('Auth failed')
}

// Values that interpret as false:
//false
//0
//'' (Actual space or an Actual token)
//null and undefined

