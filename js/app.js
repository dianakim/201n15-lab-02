'use strict';
//Ask 5 yes/no questions and track number of correct answers
var numCorrect = 0

var hasPets = prompt('Do you think I have any pets?');
//Convert input to all lower case or all upper case using .toLowerCase() or .toUpperCase() 
hasPets = hasPets.toLowerCase();
//Print question to web page
document.write("<p>Do you think I have any pets?</p>");
//Check that input is valid using an if statement
if(hasPets === 'y' || hasPets === 'yes') {
  document.write("<p>You answered yes. You are correct! I have 4 dogs.</p>");
  //tracks number of correct answers
  numCorrect++;
} else if (hasPets === 'n' || hasPets === 'no') {
  document.write("<p>You answered no. Wrong! I have 4 dogs.</p>");
} else {
  document.write("<p>You entered an invalid answer.</p>");
}
document.write("<hr>");
//Print a useful and descriptive console.log()
console.log('Answer to "has pets" question: ' + hasPets);
console.log(numCorrect + ' of 5 correct');

//Second yes/no question
var hasSiblings = prompt('Do you think I have any siblings?'); 
hasSiblings = hasSiblings.toUpperCase();

document.write("<p>Do you think I have any siblings?</p>");

if(hasSiblings === 'Y' || hasSiblings === 'YES') {
  document.write("<p>You answered yes. You are correct! I have one sister and two brothers.</p>");
  //tracks number of correct answers
  numCorrect++;
} else if (hasSiblings === 'N' || hasSiblings === 'NO') {
  document.write("<p>You answered no. Wrong! I have 3 siblings.</p>");
} else {
  document.write("<p>You entered an invalid answer.</p>");
}
document.write("<hr>");
//Print a useful and descriptive console.log()
console.log('Answer to "has siblings" question: ' + hasSiblings);
console.log(numCorrect + ' of 5 correct');