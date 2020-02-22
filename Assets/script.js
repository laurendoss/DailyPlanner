
//naming of my global variables
var dailyInput9 = document.getElementById("9"); 
var dailyInput10 = document.getElementById("10"); 
var dailyInput11 = document.getElementById("11"); 
var dailyInput12 = document.getElementById("12"); 
var dailyInput13 = document.getElementById("13"); 
var dailyInput14 = document.getElementById("14"); 
var dailyInput15 = document.getElementById("15"); 
var dailyInput16 = document.getElementById("16"); 
var dailyInput17 = document.getElementById("17"); 

var dailyBtn9 = document.getElementById("inputBtn9"); 
var dailyBtn10 = document.getElementById("inputBtn10"); 
var dailyBtn11 = document.getElementById("inputBtn11"); 
var dailyBtn12 = document.getElementById("inputBtn12"); 
var dailyBtn13 = document.getElementById("inputBtn13"); 
var dailyBtn14 = document.getElementById("inputBtn14"); 
var dailyBtn15 = document.getElementById("inputBtn15"); 
var dailyBtn16 = document.getElementById("inputBtn16"); 
var dailyBtn17 = document.getElementById("inputBtn17"); 

//current time html element variable
var currentDay = document.getElementById("currentDay"); 

//applying a click function to the individual buttons
window.addEventListener("load", function(){
    currentDay.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
    let data = this.localStorage
    if(data.dailyTask9){
        dailyInput9.value = data.dailyTask9; 
    }
    if(data.dailyTask10){
        dailyInput10.value = data.dailyTask10; 
    }
    if(data.dailyTask11){
        dailyInput11.value = data.dailyTask11; 
    }
    if(data.dailyTask12){
        dailyInput12.value = data.dailyTask12; 
    }
    if(data.dailyTask13){
        dailyInput13.value = data.dailyTask13; 
    }
    if(data.dailyTask14){
        dailyInput14.value = data.dailyTask14; 
    }
    if(data.dailyTask15){
        dailyInput15.value = data.dailyTask15; 
    }
    if(data.dailyTask16){
        dailyInput16.value = data.dailyTask16; 
    }
    if(data.dailyTask17){
        dailyInput17.value = data.dailyTask17; 
    }


    // determineColors()
    
})


//Button on click functions
dailyBtn9.onclick = function(){
        localStorage.setItem("dailyTask9",dailyInput9.value); 
        
}; 
dailyBtn10.onclick = function(){
    localStorage.setItem("dailyTask10",dailyInput10.value); 
    
}; 
dailyBtn11.onclick = function(){
    localStorage.setItem("dailyTask11",dailyInput11.value); 
    

}; dailyBtn12.onclick = function(){
    localStorage.setItem("dailyTask12",dailyInput12.value); 
    
}; 
dailyBtn13.onclick = function(){
    localStorage.setItem("dailyTask13",dailyInput13.value); 
    
}; 
dailyBtn14.onclick = function(){
    localStorage.setItem("dailyTask14",dailyInput14.value); 
    
}; 
dailyBtn15.onclick = function(){
    localStorage.setItem("dailyTask15",dailyInput15.value); 
    
}; 
dailyBtn16.onclick = function(){
    localStorage.setItem("dailyTask16",dailyInput16.value); 
    
}; 
dailyBtn17.onclick = function(){
    localStorage.setItem("dailyTask17",dailyInput17.value); 
    
}; 

//from stack overflow
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));



Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
    
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

// function setColor(element, color) {
//   element.style.backgroundColor = color;
// }

// function determineColors(){
//     let input =document.getElementById("input9")
//     let inputId = input.id[5]


//     let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
//     let currentHour = currentTime[20] + currentTime[21];
//     // console.log(currentHour)
    
//     if(inputId < currentHour ){
//         $(input).css("background-color", "red")
//     } else if (inputId === currentHour){
//         $(input).css("background-color", "green")
//     } else if (inputId > currentHour){
//         $(input).css("background-color", "grey")
//     }
// }


