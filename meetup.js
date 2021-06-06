
function tabulateAnswers() {

  var c1choice = 0;
  var c2choice = 0;
  var c3choice = 0;
  var c4choice = 0;
  

  var choices = document.getElementsByTagName('input');

  for (i=0; i<choices.length; i++) {

    if (choices[i].checked) {

      if (choices[i].value == 'c1') {
        c1choice = c1choice + 1;
      }
      if (choices[i].value == 'c2') {
        c2choice = c2choice + 1;
      }
      if (choices[i].value == 'c3') {
        c3choice = c3choice + 1;
      }
      if (choices[i].value == 'c4') {
        c4choice = c4choice + 1;
      }

    }
  }
  
  var username = prompt("Who dis?");
}

function resetAnswer() {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Thanks!";
}