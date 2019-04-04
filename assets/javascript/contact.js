
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

// This was borrowed from "https://codepen.io/gschier/pen/jkivt"
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };