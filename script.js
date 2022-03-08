let maxGuesses = 5;
let curGuesses = 0;
let prevGuesses = [];

let low = 1;
let high = 100;

const key = "5e8d1986";

// http://www.omdbapi.com/?i=tt3896198&apikey=5e8d1986

$.ajax({
  url: "http://www.omdbapi.com/?i=tt3896198&apikey=5e8d1986",
  type: "GET",
  success: function (result){
    console.log(result);
    movieResult(result);
  },
  error: function(error) {
    console.log(error);
  }
})

function movieResult(data){
  // called when api call is succsessfull. 
  let movieTitle = data.Title;
  document.getElementById("guess-count").innerText = movieTitle;
  const movieArr = movieTitle.split('');
  console.log(movieArr);
}