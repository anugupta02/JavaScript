const myTodos = []

myTodos.push('Buy Bread')
myTodos.push('Record videos for youtube')
myTodos.push('Go to Gym')

myTodos.forEach(function (todo,index) {
    //console.log(`Your task no. ${index + 1} is: ${todo}`)
})

let getMyGrade = function (currentMarks, totalMarks) {
    let myPercent = (currentMarks/totalMarks) * 100
    let myGrade = ''

    if(myPercent >= 90){
        myGrade = 'A'
    }else if(myPercent >= 80){
        myGrade = 'B'
    }else if(myPercent >= 70){
        myGrade = 'C'
    }else if(myPercent >= 60){
        myGrade = 'D'
    }else {
        myGrade = 'F'
    }
    return `Your grade is ${myGrade} and percentage ${myPercent}`

}

let yourResult = getMyGrade(92,100)
//console.log(yourResult)


//Very Imp topics in JS :

// == operator is (Equality) --> it checks whether the value is equal or not.
// === operator (Identify) --> it checks whether actually the object which we are
// referencing in the memory is exactly the same object that we are referencing
// in the memory are same or not.

let myVar = {}
let myVar2 = myVar
console.log(myVar === myVar2);


// Objects in JS :
let myYoutubeVideo = {
    title: 'Kings Territory Problem in JS',
    videoLength: 15,
    videoCreator: 'Anu Gupta',
    videoDescription: 'this is video description and a long one'
}

//console.log(myYoutubeVideo)
//console.log(`Hey new Video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`)

//Self-work:

let myNewCourse = {
    courseName: 'JS in Advance',
    Price: 2000,
    courseDescription: 'This course contains JS advance level topics',
    courseAuthor: 'Anu Gupta'
}
//console.log(`Hey! My new course is ${myNewCourse.courseName} at price ${myNewCourse.Price} and I ${myNewCourse.courseAuthor} just
//uploaded a new video whose description is ${myNewCourse.courseDescription}`)


// Function that takes object and gives object in JS :

//myYoutubeVideo.title = 'ForEach loop in JS'
//console.log(`Hey new Video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`)
//console.log(myYoutubeVideo)

let myYoutubeVideo1 = {
    title: 'Loops in JS',
    videoLength: 25,
    videoCreator: 'Anu Gupta',
    videoDescription: 'this is video description and a long one'
}

let myYoutubeVideo2 = {
    title: 'Functions in JS',
    videoLength: 10,
    videoCreator: 'Anu Gupta',
    videoDescription: 'this is video description and a long one'
}

let changeVideoLength = function (myObject) {
  return `Time of this video is: ${myObject.videoLength + 2}`
}

//console.log(changeVideoLength(myYoutubeVideo2))
//changeVideoLength(myYoutubeVideo1)

let changeVideoFormat = function (myObject) {
return{
    format1 : `Time of this video is ${myObject.videoLength + 2}`,
    format2 : `Time of this video is ${myObject.videoLength + 1}`
}
}
let add1 = changeVideoFormat(myYoutubeVideo2)
//console.log(add1.format1)
console.log(add1.format2)
