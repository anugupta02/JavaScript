 var average = 0;

function getAverage (a,b){

          average = (a+b)/2;   // Global Variable
          console.log(average);
       return average;

}


var myResult = getAverage(7,11);   // Global Variable


function logResult(){
   
    console.log("the average is " +myResult + " Inside the function");

}

logResult();