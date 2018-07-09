// add solution here

function theBeatlesPlay(musicians, instruments) {
  var plays = []
  for (var i = 0; i < musicians.length; i++) {
    plays.push(musicians[i] + " plays " + instruments[i])
  }
  return plays
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  
var johnLennonFacts = function(factoid) {
  var i = 0;
  var arrayLength = factoid.length
  var exclamations = [];
  
  while (arrayLength > 0) {
    exclamations.push(factoid[i] + "!!!")
    i++;
    arrayLength--;
  }
  return(exclamations);
}

johnLennonFacts(facts)


var iLoveTheBeatles = function(number) {
  var newarray = [];
  number++;
  if (number === 18) {
    return("I love the Bealtes!")
  }
  var i = 0;
  do {
    
  }
}