'use strict';

var numCorrect = 0;

var gamer = prompt('Welcome! Please enter your name.');
alert('Thank you, ' + gamer + '. Please press the ok button when you are ready to start the game.');

function petsQuestion() {
  var hasPets = prompt('Do you think I have any pets?');
  //Convert input to all lower case or all upper case using .toLowerCase() or .toUpperCase();

  hasPets = hasPets.toLowerCase();
  //Check that input is valid using an if statement
  if (hasPets === 'y' || hasPets === 'yes') {
    alert('You answered yes. You are correct! I have 4 dogs.');
    //tracks number of correct answers
    numCorrect++;
  } else if (hasPets === 'n' || hasPets === 'no') {
    alert('You answered no. Wrong! I have 4 dogs.');
  } else {
    alert('You entered an invalid answer.');
  }
  document.getElementById('question-1').innerHTML = 'I have 4 dogs.';
  //Print a useful and descriptive console.log()
  console.log('Answer to "has pets" question: ' + hasPets);
  console.log(numCorrect + ' of 7 correct');
}

petsQuestion();

//Second yes/no question
function siblingsQuestion() {
  var hasSiblings = prompt('Do you think I have any siblings?');
  hasSiblings = hasSiblings.toUpperCase();

  if (hasSiblings === 'Y' || hasSiblings === 'YES') {
    alert('You answered yes. You are correct! I have one sister and two brothers.');
    numCorrect++;
  } else if (hasSiblings === 'N' || hasSiblings === 'NO') {
    alert('You answered no. Wrong! I have 3 siblings.');
  } else {
    alert('You entered an invalid answer.');
  }

  document.getElementById('question-2').innerHTML = 'I have one sister and two brothers.';
  console.log('Answer to "has siblings" question: ' + hasSiblings);
  console.log(numCorrect + ' of 7 correct');
}

siblingsQuestion();

//Third yes/no question
function languageQuestion() {
  var isTrilingual = prompt('Am I trilingual?');
  isTrilingual = isTrilingual.toUpperCase();

  if (isTrilingual === 'Y' || isTrilingual === 'YES') {
    alert('You answered yes. You are incorrect! I speak one language fluently and French and Korean very poorly.');
  } else if (isTrilingual === 'N' || isTrilingual === 'NO') {
    alert('You answered no. Correct!');
    numCorrect++;
  } else {
    alert('You entered an invalid answer.');
  }

  document.getElementById('question-3').innerHTML = 'I am fluent in just the English language.';
  console.log('Answer to "is trilingual" question: ' + isTrilingual);
  console.log(numCorrect + ' of 7 correct');
}

languageQuestion();

//Fourth yes/no question
function iceQuestion() {
  var likesIceClimbing = prompt('Do I like to scale icy mountains?');
  likesIceClimbing = likesIceClimbing.toUpperCase();

  if (likesIceClimbing === 'Y' || likesIceClimbing === 'YES') {
    alert('You answered yes. Wrong! Ice climbing has no appeal for me whatsoever.');
  } else if (likesIceClimbing === 'N' || likesIceClimbing === 'NO') {
    alert('You answered no. Correct!');
    numCorrect++;
  } else {
    alert('You entered an invalid answer.');
  }

  document.getElementById('question-4').innerHTML = 'I\'ve never tried ice climbing and NEVER want to.';
  console.log('Answer to "like ice climbing" question: ' + likesIceClimbing);
  console.log(numCorrect + ' of 7 correct');
}

iceQuestion();

//Fifth yes/no question
function cakeQuestion() {
  var likesCheesecake = prompt('Do I think cheesecake is the best?');
  likesCheesecake = likesCheesecake.toUpperCase();

  if (likesCheesecake === 'Y' || likesCheesecake === 'YES') {
    alert('You answered yes. You are correct! Cheesecake is my favorite dessert.');
    numCorrect++;
  } else if (likesCheesecake === 'N' || likesCheesecake === 'NO') {
    alert('You answered no. Wrong!');
  } else {
    alert('You entered an invalid answer.');
  }

  document.getElementById('question-5').innerHTML = 'Cheesecake is heavenly.';
  console.log('Answer to "likes cheesecake" question: ' + likesCheesecake);
  console.log(numCorrect + ' of 7 correct');
}

cakeQuestion();

//Sixth question
// Prompt user for a Number
// User gets 4 chances
// Test if too high or too low
function bedQuestion() {
  var myNum = 26;
  var userNum;
  var chances = 4;

  for(var i = 0; i <= 4; i++) {
    userNum = parseFloat(prompt(gamer + ', guess how many dog beds I have.'));

    if (userNum === myNum) {
      alert('Yahoo! You got it right, ' + gamer + '. \nIf you have dogs, you\'ll understand why I have so many beds for them!');
      numCorrect++;
      break;
    } else if (userNum > myNum) {
      alert('Oh darn, that\'s too high.');
    } else if (userNum < myNum) {
      alert('Your guess is too low.');
    } else if (isNaN(userNum)) {
      alert('That was in invalid guess.');
    } //end if
    chances--;
    //Alert gamer to number of chances left.
    //Break out of the for loop if there are no more chances left
    if (chances > 1) {
      alert('You have ' + chances + ' more chances.');
    } else if (chances === 1) {
      alert('You have ' + chances + ' more chance.');
    } else {
      alert('You\'re all out of chances.');
      break;
    }
  }
  document.getElementById('question-6').innerHTML = 'I have 26 dog beds scattered throughout my house and car for my 4 pups.';
  console.log('Answer to "how many dog beds" question: ' + userNum);
  console.log(numCorrect + ' of 7 correct');
}

bedQuestion();

//Seventh question
// Prompt user to guess another country I've been in
// User gets 6 chances
// Answers are stored in an array
// At the end, all correct answers are displayed to the user
function countriesQuestion() {
  var myCountries = ['Germany', 'Indonesia', 'Nepal', 'Belize', 'France', 'England', 'Italy', 'The Netherlands', 'Belgium', 'Turks and Caicos', 'Saint Martin', 'Spain', 'Japan'];
  var userGuess;
  var countryString;
  var isAMatch = false;
  //Loop through each attempt to guess
  for(var tries = 1; tries <= 6; tries++) {
    userGuess = prompt(gamer + ', guess one other country I have been to.');
    userGuess = userGuess.toLowerCase();

    //Loop through each item in array to compare with guess
    for(var a = 0; a < myCountries.length; a++) {
      //Check if there's a match to one in the array'
      if (userGuess === myCountries[a].toLowerCase()) {
        alert('Yahoo! You got it right, ' + gamer + '!');
        isAMatch = true;
        numCorrect++;
        break;
      } //end if
    } //end for
    console.log('Answer to "other countries" question: ' + userGuess);
    console.log(numCorrect + ' of 7 correct');
    if (!(isAMatch)) {
      //Tell gamer how many tries are left
      if (tries <= 5) {
        alert('Sorry, no match. You have ' + (6 - tries) + ' more chances.');
      } else if (tries === 6) {
        alert('You\'re all out of chances.');
      } //end if
    } else {
      break;
    } //end if

  } //end for

  //Loop through each item in array to concatenate for message
  for(var y = 0; y < myCountries.length; y++) {
    //Concatenate items in the array for displaying later
    if (y < 1) {
      countryString = myCountries[y];
    } else if (y >= 1) {
      countryString = countryString + ', ' + myCountries[y];
    } //end if
  } //end for
  document.getElementById('question-7').innerHTML = 'Other countries I\'ve visited are ' + countryString + '.';
} //end function

countriesQuestion();

//Display final score
var yourScore = Math.round((numCorrect / 7) * 100);
if (numCorrect >= 5) {
  alert('You got ' + numCorrect + ' out of 7. That\'s '+ yourScore + '% correct. Fantastic job, ' + gamer + '!');
} else {
  alert('You got ' + numCorrect + ' out of 7. That\'s only ' + yourScore + '% correct. Better luck next time, ' + gamer + '.');
} //end if
