// add solution here

function theBeatlesPlay(musicians, instruments) {
  var plays = []
  for (var i = 0; i < musicians.length; i++) {
    plays.push(musicians[i] + " plays " + instruments[i])
  }
  return plays
}

function johnLennonFacts() {
  const facts = [
 
  ];
  
  var exclamation = [];
  var i = 0;
  while (i < facts.length) {
    exclamation.push(facts[i] + "!!!");
    i++;
  }
  return exclamation
}