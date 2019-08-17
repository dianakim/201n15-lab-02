'use strict';

var numCorrect = 0;

var gamer = prompt('Welcome! Please enter your name.');
alert('Thank you, ' + gamer + '. Please press the ok button when you are ready to start the game.');

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

//Second yes/no question
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

//Third yes/no question
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

//Fourth yes/no question
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

//Fifth yes/no question
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

//Sixth question
// Prompt user for a Number
// User gets 4 chances
// Test if too high or too low
var myNum = 26;
var userNum;
var chances = 4;

for(var i = 0; i <=4; i++) {
  userNum = parseFloat(prompt(gamer + ', guess how many dog beds I have.'));

  if (userNum > myNum) {
    alert('Oh darn, that\'s too high.');
  } else if (userNum < myNum) {
    alert('Your guess is too low.');
  } else if (isNaN(userNum)) {
    alert('That was in invalid guess.');
  } else if (userNum === myNum) {
    alert('Yahoo! You got it right, ' + gamer + '. \nIf you have dogs, you\'ll understand why I have so many beds for them!');
    numCorrect++;
    document.getElementById('question-6').innerHTML = 'I have 26 dog beds scattered throughout my house and car for my 4 pups.';
    console.log('Answer to "how many dog beds" question: ' + userNum);
    console.log(numCorrect + ' of 7 correct');
    break;
  }
  chances--;

  if (chances >= 1) {
    alert('You have ' + chances + ' more chances.');
  } else {
    alert('You\'re all out of chances.');
    console.log('Answer to "how many dog beds" question: ' + userNum);
    console.log(numCorrect + ' of 7 correct');
    break;
  }
}

//Display final score
var yourScore = Math.round((numCorrect / 7) * 100);
if (numCorrect >= 5) {
  alert('You got ' + numCorrect + ' out of 7. That\'s '+ yourScore + '% correct. Fantastic job, ' + gamer + '!');
} else {
  alert('You got ' + numCorrect + ' out of 7. That\'s only ' + yourScore + '% correct. Better luck next time, ' + gamer + '.');
}

// //Store correct answers in variables for comparison
// var petsAnswer = 'y';
// var siblingsAnswer = 'y';
// var arabicAnswer = 'n';
// var iceClimbingAnswer = 'n';
// var cheesecakeAnswer = 'y';
// var numCorrect = 0;
// //Ask 5 yes/no questions and track number of correct answers

// //validInput function converts inputs for each question to lower case, checks converted inputs to see if they match one of the acceptable answers, and returns only the first letter
// function validInput(answer) {
//   answer = answer.toLowerCase();
//   if(answer === 'y' || answer === 'yes' || answer === 'n' || answer === 'no') {
//     return answer.charAt(0);
//   // } else {
//   //   document.write('<p>You entered an invalid answer.</p>');
//   //   document.write('<hr>');
//   }
// }

// //Question #1
// //If the answer is correct, display message and increment numCorrect to keep score
// var hasPets = prompt('Do I have any pets?');
// document.write('<p>Do I have any pets?</p>');

// if(petsAnswer === validInput(hasPets)) {
//   document.write('<p>Your guess was correct! I have 4 dogs.</p>');
//   document.write('<hr>');
//   numCorrect++;
// } else {
//   document.write('<p>Your guess was incorrect.</p>');
//   document.write('<hr>');
// }
// console.log('Answer to "has pets" question: ' + hasPets);
// console.log(numCorrect + ' of 5 correct');

// //Question #2
// var hasSiblings = prompt('Do I have any siblings?');
// document.write('<p>Do I have any siblings?</p>');

// if(siblingsAnswer === validInput(hasSiblings)) {
//   document.write('<p>Your guess was correct! I have one sister and two brothers.</p>');
//   document.write('<hr>');
//   numCorrect++;
// } else {
//   document.write('<p>Your guess was incorrect.</p>');
//   document.write('<hr>');
// }

// console.log('Answer to "has siblings" question: ' + hasSiblings);
// console.log(numCorrect + ' of 5 correct');

// //Question #3
// var speaksArabic = prompt('Do I speak Arabic?');
// document.write('<p>Do I speak Arabic?</p>');

// if(arabicAnswer === validInput(speaksArabic)) {
//   document.write('<p>Your guess was correct! I do NOT know how to speak Arabic.</p>');
//   document.write('<hr>');
//   numCorrect++;
// } else {
//   document.write('<p>Your guess was incorrect.</p>');
//   document.write('<hr>');
// }

// console.log('Answer to "speaks Arabic" question: ' + speaksArabic);
// console.log(numCorrect + ' of 5 correct');

// //Question #4
// var likesIceClimbing = prompt('Do I like to scale icy mountains?');
// document.write('<p>Do I like to climb ice?</p>');

// if(iceClimbingAnswer === validInput(likesIceClimbing)) {
//   document.write('<p>Your guess was correct! Ice climbing has no appeal for me whatsoever.</p>');
//   document.write('<hr>');
//   numCorrect++;
// } else {
//   document.write('<p>Your guess was incorrect.</p>');
//   document.write('<hr>');
// }

// console.log('Answer to "likes ice climbing" question: ' + likesIceClimbing);
// console.log(numCorrect + ' of 5 correct');

// //Question #5
// var likesCheesecake = prompt('Do I think cheesecake is the best?');
// document.write('<p>Do I like cheesecake?</p>');

// if(cheesecakeAnswer === validInput(likesCheesecake)) {
//   document.write('<p>Your guess was correct! J\'adore cheesecake!</p>');
//   document.write('<hr>');
//   numCorrect++;
// } else {
//   document.write('<p>Your guess was incorrect.</p>');
//   document.write('<hr>');
// }

// console.log('Answer to "likes cheesecake" question: ' + likesCheesecake);
// console.log(numCorrect + ' of 5 correct');

// //Display final score
// var yourScore = (numCorrect / 5) * 100;
// if(numCorrect >= 4) {
//   document.write('<h2>You guessed '+ yourScore + '% correct. Fantastic job!</h2>');
// } else {
//   document.write('<h2>You only guessed '+ yourScore + '% correct. Better luck next time.</h2>');
// }

//array of questions and associated responses for correct and incorrect
