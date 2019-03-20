

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

$("#firstT").on("click", function (event) {
    // update git hub projects on click of images
})