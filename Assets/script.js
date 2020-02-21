//naming of my global variables
var dailyInput9 = document.getElementById("input9"); 
var dailyInput10 = document.getElementById("input10"); 
var dailyInput11 = document.getElementById("input11"); 
var dailyInput12 = document.getElementById("input12"); 
var dailyInput1 = document.getElementById("input1"); 
var dailyInput2 = document.getElementById("input2"); 
var dailyInput3 = document.getElementById("input3"); 
var dailyInput4 = document.getElementById("input4"); 
var dailyInput5 = document.getElementById("input5"); 

var dailyBtn9 = document.getElementById("inputBtn9"); 
var dailyBtn10 = document.getElementById("inputBtn10"); 
var dailyBtn11 = document.getElementById("inputBtn11"); 
var dailyBtn12 = document.getElementById("inputBtn12"); 
var dailyBtn1 = document.getElementById("inputBtn1"); 
var dailyBtn2 = document.getElementById("inputBtn2"); 
var dailyBtn3 = document.getElementById("inputBtn3"); 
var dailyBtn4 = document.getElementById("inputBtn4"); 
var dailyBtn5 = document.getElementById("inputBtn5"); 

//applying a click function to the individual buttons

dailyBtn9.onclick = function(){
    const dailyTask9 = {"daily9":dailyInput9.value}
    console.log({"string9":dailyTask9}); 
    
    if (dailyTask9) {
        localStorage.setItem("dailyTask9",JSON.stringify(dailyTask9)); 
    }
}; 
for (let i = 0; i <localStorage.length; i++) {
    const dailyTask9 = localStorage.dailyTask9[i]; 
    const value = localStorage.getItem(dailyTask9); 
    dailyInput9.innerHTML += `${dailyTask9}: ${value}`; 
}


// $("#inputBtn9").on("click", function(event) {
//     event.preventDefault();
//     var dailyTask9 = document.getElementsByClassName("input9").value

//     localStorage.setItem("dailyTask9", dailyTask9); 
    
// })