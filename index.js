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
  
var johnLennonFacts = function(facts) {
  var i = 0;
  var arrayLength = facts.length
  var exclamations = [];
  
  while (arrayLength > 0) {
    exclamations.push(facts[i] + "!!!")
    i++;
    arrayLength--;
  }
}
}