'use strict';

//Store correct answers in variables for comparison
var petsAnswer = 'y';
var siblingsAnswer = 'y';
var arabicAnswer = 'n';
var iceClimbingAnswer = 'n';
var cheesecakeAnswer = 'y';
var numCorrect = 0;
//Ask 5 yes/no questions and track number of correct answers

//validInput function converts inputs for each question to lower case, checks converted inputs to see if they match one of the acceptable answers, and returns only the first letter
function validInput(answer) {
  answer = answer.toLowerCase();
  if(answer === 'y' || answer === 'yes' || answer === 'n' || answer === 'no') {
    return answer.charAt(0);
  } else {
    document.write('<p>You entered an invalid answer.</p>');
    document.write('<hr>');
  }
}

//Question #1
//If the answer is correct, display message and increment numCorrect to keep score
var hasPets = prompt('Do I have any pets?');
document.write('<p>Do I have any pets?</p>');

if(petsAnswer === validInput(hasPets)) {
  document.write('<p>Your guess was correct! I have 4 dogs.</p>');
  document.write('<hr>');
  numCorrect++;
} else {
  document.write('<p>Your guess was incorrect.</p>');
  document.write('<hr>');
}
console.log('Answer to "has pets" question: ' + hasPets);
console.log(numCorrect + ' of 5 correct');

//Question #2
var hasSiblings = prompt('Do I have any siblings?');
document.write('<p>Do I have any siblings?</p>');

if(siblingsAnswer === validInput(hasSiblings)) {
  document.write('<p>Your guess was correct! I have one sister and two brothers.</p>');
  document.write('<hr>');
  numCorrect++;
} else {
  document.write('<p>Your guess was incorrect.</p>');
  document.write('<hr>');
}

console.log('Answer to "has siblings" question: ' + hasSiblings);
console.log(numCorrect + ' of 5 correct');

//Question #3
var speaksArabic = prompt('Do I speak Arabic?');
document.write('<p>Do I speak Arabic?</p>');

if(arabicAnswer === validInput(speaksArabic)) {
  document.write('<p>Your guess was correct! I do NOT know how to speak Arabic.</p>');
  document.write('<hr>');
  numCorrect++;
} else {
  document.write('<p>Your guess was incorrect, though I can say thank you in Arabic.</p>');
  document.write('<hr>');
}

console.log('Answer to "speaks Arabic" question: ' + speaksArabic);
console.log(numCorrect + ' of 5 correct');

//Question #4
var likesIceClimbing = prompt('Do I like to scale icy mountains?');
document.write('<p>Do I like to climb ice?</p>');

if(iceClimbingAnswer === validInput(likesIceClimbing)) {
  document.write('<p>Your guess was correct! Ice climbing has no appeal for me whatsoever.</p>');
  document.write('<hr>');
  numCorrect++;
} else {
  document.write('<p>Your guess was incorrect.</p>');
  document.write('<hr>');
}

console.log('Answer to "likes ice climbing" question: ' + likesIceClimbing);
console.log(numCorrect + ' of 5 correct');

//Question #5
var likesCheesecake = prompt('Do I think cheesecake is the best?');
document.write('<p>Do I like cheesecake?</p>');

if(cheesecakeAnswer === validInput(likesCheesecake)) {
  document.write('<p>Your guess was correct! J\'adore cheesecake!</p>');
  document.write('<hr>');
  numCorrect++;
} else {
  document.write('<p>Your guess was incorrect.</p>');
  document.write('<hr>');
}

console.log('Answer to "likes cheesecake" question: ' + likesCheesecake);
console.log(numCorrect + ' of 5 correct');

//Display final score
var yourScore = (numCorrect / 5) * 100;
if(numCorrect >= 4) {
  document.write('<h2>You guessed '+ yourScore + '% correct. Fantastic job!</h2>');
} else {
  document.write('<h2>You only guessed '+ yourScore + '% correct. Better luck next time.</h2>');
}


//array of questions and associated responses for correct and incorrect

//ORIGINAL WORKING CODE

// var hasPets = prompt('Do you think I have any pets?');
// //Convert input to all lower case or all upper case using .toLowerCase() or .toUpperCase();

// hasPets = hasPets.toLowerCase();
// //Print question to web page
// document.write('<p>Do you think I have any pets?</p>');
// //Check that input is valid using an if statement
// if(hasPets === 'y' || hasPets === 'yes') {
//   document.write('<p>You answered yes. You are correct! I have 4 dogs.</p>');
//   //tracks number of correct answers
//   numCorrect++;
// } else if (hasPets === 'n' || hasPets === 'no') {
//   document.write('<p>You answered no. Wrong! I have 4 dogs.</p>');
// } else {
//   document.write('<p>You entered an invalid answer.</p>');
// }
// document.write('<hr>');
// //Print a useful and descriptive console.log()
// console.log('Answer to "has pets" question: ' + hasPets);
// console.log(numCorrect + ' of 5 correct');

// //Second yes/no question
// var hasSiblings = prompt('Do you think I have any siblings?');
// hasSiblings = hasSiblings.toUpperCase();

// document.write('<p>Do you think I have any siblings?</p>');

// if(hasSiblings === 'Y' || hasSiblings === 'YES') {
//   document.write('<p>You answered yes. You are correct! I have one sister and two brothers.</p>');

//   numCorrect++;
// } else if (hasSiblings === 'N' || hasSiblings === 'NO') {
//   document.write('<p>You answered no. Wrong! I have 3 siblings.</p>');
// } else {
//   document.write('<p>You entered an invalid answer.</p>');
// }
// document.write('<hr>');

// console.log('Answer to "has siblings" question: ' + hasSiblings);
// console.log(numCorrect + ' of 5 correct');

// //Third yes/no question
// var speaksArabic = prompt('Do I speak Arabic?');
// speaksArabic = speaksArabic.toUpperCase();

// document.write('<p>Do you think I speak Arabic?</p>');

// if(speaksArabic === 'Y' || speaksArabic === 'YES') {
//   document.write('<p>You answered yes. You are incorrect! I do NOT speak Arabic.</p>');
// } else if (speaksArabic === 'N' || speaksArabic === 'NO') {
//   document.write('<p>You answered no. Correct!</p>');
//   numCorrect++;
// } else {
//   document.write('<p>You entered an invalid answer.</p>');
// }
// document.write('<hr>');

// console.log('Answer to "speaks Arabic" question: ' + speaksArabic);
// console.log(numCorrect + ' of 5 correct');

// //Fourth yes/no question
// var likesIceClimbing = prompt('Do I like to scale icy mountains?');
// likesIceClimbing = likesIceClimbing.toUpperCase();

// document.write('<p>Do you think I like to climb ice?</p>');

// if(likesIceClimbing === 'Y' || likesIceClimbing === 'YES') {
//   document.write('<p>You answered yes. Wrong! Ice climbing has no appeal for me whatsoever.</p>');
// } else if (likesIceClimbing === 'N' || likesIceClimbing === 'NO') {
//   document.write('<p>You answered no. Correct!</p>');
//   numCorrect++;
// } else {
//   document.write('<p>You entered an invalid answer.</p>');
// }
// document.write('<hr>');

// console.log('Answer to "like ice climbing" question: ' + likesIceClimbing);
// console.log(numCorrect + ' of 5 correct');

// //Fifth yes/no question
// var likesCheesecake = prompt('Do I think cheesecake is the best?');
// likesCheesecake = likesCheesecake.toUpperCase();

// document.write('<p>Do you think I like cheesecake?</p>');

// if(likesCheesecake === 'Y' || likesCheesecake === 'YES') {
//   document.write('<p>You answered yes. You are correct! Cheesecake is my favorite dessert.</p>');
//   numCorrect++;
// } else if (likesCheesecake === 'N' || likesCheesecake === 'NO') {
//   document.write('<p>You answered no. Wrong! </p>');
// } else {
//   document.write('<p>You entered an invalid answer.</p>');
// }
// document.write('<hr>');

// console.log('Answer to "likes cheesecake" question: ' + likesCheesecake);
// console.log(numCorrect + ' of 5 correct');

// //Need to refactor above to follow DRY rule

// //Display final score
// var yourScore = (numCorrect / 5) * 100;
// if(numCorrect >= 4) {
//   document.write('<h2>You got '+ yourScore + '% correct. Fantastic job!</h2>');
// } else {
//   document.write('<h2>You got '+ yourScore + '% correct. Better luck next time.</h2>');
// }
