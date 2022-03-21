// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['a', 'left', 'right', 'up', 'down', 'up', 'down', 'left', 'right', 'b'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {

  document.removeEventListener('keydown');

  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  $(function(event){
    score+=1000;
    score_span.text(score);
    return false;
  });

  var audio = new Audio('assets/audio/win.mp3');
  audio.play();

  $('#cannami_image').addClass("active");  
  $('#score').addClass("shift");  
  setTimeout(function () {
    $('#cannami_image').removeClass("active");
  }, 4000);
  // alert("cheats activated");
}