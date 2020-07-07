// Arrow function basics in JS :

// const sayHellos = function (name) {
//     return "Hey there, " + name + " !"
// }
//
// console.log(sayHellos('Anu Gupta'))

const sayHellos = (name) => `Hey there, ${name} !`
console.log(sayHellos('Anu Gupta'))

const todos = [{
    title: 'Buy Bread',
    isDone: true
}, {
    title: 'Go to Gym',
    isDone: false
}, {
    title: 'Record youtube videos',
    isDone: true
}]

const thingsDone = todos.filter((todo)=> todo.isDone === true)
console.log(thingsDone)

const thingsNotDone = todos.filter((todo)=> todo.isDone === false)
thingsNotDone.forEach(element => console.log(element.title))


// Another Examples : 

const cameras = {
    price: 600,
    weight: 2000,
    myDes: function () {
        return `This canon camera is of ${this.price}$`
    }
}
console.log(cameras.myDes())


//This is only for React-Redux code snippets
const func = () => ({key : 'value'})
