

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
  var konamiCode = ['down', 'down', 'up', 'up', 'right', 'left', 'right', 'left', 'a', 'b'];
  
  // a variable to remember the 'position' the user has reached so far.
  var konamiCodePosition = 0;
  
  // add keydown event listener
  document.addEventListener('keydown', function(e) {
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
        // score++;
        // score_span.text(score + 1000);
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  });
  
  function activateCheats() {
    $(function(event){
      score++;
      score_span.text(score + 1000);
      // var getPoints = (score_span).text(score);
      // var newScore = getPoints + 1000;
      // $(score_span).text(newScore.toFixed(1));
      return false;
    });

    $('#cannami_image').addClass("active");  
    setTimeout(function () {
      $('#cannami_image').removeClass("active");
    }, 2000);
    alert("cheats activated");
  }