
//alert('File is attached')

console.log(document.URL)
//console.log(document.documentURI)
console.log(document.title)
// console.log(document.characterSet)
// console.log(document.styleSheets)
// console.log(document.scripts)
// console.log(document.write)

document.title = "Iam Anu";
console.log(document.getElementById('idOne'));
const myElement = document.querySelectorAll('#idOne')
//console.log(myElement[0])


const myElement1 = document.querySelectorAll('.classOne')
 console.log(myElement1[0])


//const myPElement = document.querySelector('p')
//myPElement.textContent = 'Iam being changed using JS'
//console.log(myPElement.textContent)

// const myH1Element = document.querySelector('h1')
// myH1Element.textContent = 'H1 being changed using JS'

const myPElements = document.querySelectorAll('p')

// For replacing textContent of many p tags at once!
myPElements.forEach(function(p){
   p.textContent = 'Iam being changed using loop in JS'
}) 

// For removing textContent of many p tags at one go : 
// myPElements.forEach(function(p){
//     p.remove()
//  }) 

// Using Arrow Function to change textContent of p tags in JS : 
// const ChangeP = document.querySelectorAll('p')
// ChangeP.forEach((p)=>p.textContent='I have changed p with Arrow Function in JS')


// Creating a new element in DOM : 
const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS.'

document.querySelector('body').appendChild(myNewPara)




