let maxGuesses = 5;
let curGuesses = 0;
let prevGuesses = [];

let low = 1;
let high = 100;

const key = "5e8d1986";

let answer = "hello";

// http://www.omdbapi.com/?i=tt3896198&apikey=5e8d1986

// $.ajax({
//   url: "http://www.omdbapi.com/?i=tt3896198&apikey=5e8d1986",
//   type: "GET",
//   success: function (result){
//     console.log(result);
//     movieResult(result);
//   },
//   error: function(error) {
//     console.log(error);
//   }
// })

// function movieResult(data){
//   // called when api call is succsessfull. 
//   let movieTitle = data.Title;
//   document.getElementById("guess-count").innerText = movieTitle;
//   const movieArr = movieTitle.split('');
//   console.log(movieArr);
// }

let l1 = document.getElementById("l1");
let l2 = document.getElementById("l2");
let l3 = document.getElementById("l3");
let l4 = document.getElementById("l4");
let l5 = document.getElementById("l5");

document.onkeydown = (e) => {

  // Backspace check
  if(e.key == "Backspace"){
    if(l5.innerText.length > 0){
      l5.innerText = "";
    } else if(l4.innerText.length > 0){
      l4.innerText = "";
    } else if(l3.innerText.length > 0){
      l3.innerText = "";
    } else if(l2.innerText.length > 0){
      l2.innerText = "";
    } else if(l1.innerText.length > 0){
      l1.innerText = "";
    }
  } else if(e.key >= "a" && e.key <= "z"){
    if(l1.innerText.length < 1){
      l1.innerText = e.key;
    } else if(l2.innerText.length < 1){
      l2.innerText = e.key;
    } else if(l3.innerText.length < 1){
      l3.innerText = e.key;
    } else if(l4.innerText.length < 1){
      l4.innerText = e.key;
    } else if(l5.innerText.length < 1){
      l5.innerText = e.key;
    } 
  }
  //alert(e.key)
}