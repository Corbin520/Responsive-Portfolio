

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAXptncHORTkRB7_WgC6aT3m4bLYhgllDY",
    authDomain: "portfolio-9c166.firebaseapp.com",
    databaseURL: "https://portfolio-9c166.firebaseio.com",
    projectId: "portfolio-9c166",
    storageBucket: "portfolio-9c166.appspot.com",
    messagingSenderId: "903055970588"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$("#submit-button").on("click", function (event) {
    // hide the page after click and thank for input
    var nameText = $("#name-input").val().trim();
    var emailText = $("#email-input").val().trim();
    var commentText = $("#message-input").val().trim();
  
    database.ref().push({
        name: nameText,
        email: emailText,
        comments: commentText,
      });
});





// // project 1
// $("#adventure-utah").on("click", function (event) {
//   console.log("Project One");

//   // https://corbin520.github.io/Project-1/
// });
// // giphy API

// / $("#giphy-api").on("click", function (event) {
//   console.log("Giphy API");

//   // https://corbin520.github.io/giphy-api/
// });

// // Trivia Game
// $("#trivia-game").on("click", function (event) {
//   console.log("Trivia Game");

//   // https://corbin520.github.io/TriviaGame/
// });

// // word guess game
// $("#word-guess").on("click", function (event) {

// });

// // Firebase Train Scheduler
// $("#train-scheduler").on("click", function (event) {
//   console.log("Firebase Train Scheduler");

//   // https://corbin520.github.io/firebase-train-scheduler/
// });

// // Psychic Game
// $("#psychic-game").on("click", function (event) {
//   console.log("Psychic Game");

//   // https://corbin520.github.io/Psychic-Game/
