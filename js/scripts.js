
function hangmanWord (word) {
  this.word = word;
  this.length = word.length;
  this.letters = word.split("");
}
//if mistakeCounter equals 6, game over if correctCounter equals length of word they will win
function Game () {
  this.mistakeCounter = 0;
  this.correctCounter = 0;
}
//wordBank for random selection at the start of the game
Game.prototype.randomSelect = function () {
  var wordBank = ["hello"];
  var randomWord = wordBank[Math.floor(Math.random()* wordBank.length)];
  return randomWord;
};
//player selects letter and this will check if the letter is in the word, true or false - adds one to mistakeCounter
Game.prototype.letterSelect = function (letter, word) {
  for(var index = 0; index < word.length; index ++) {
    if (word[index] === letter) {
      return true;
    } else {
      return false;
      this.mistakeCounter += 1;
    }
  }
};
//if the above is true counts the number of time the letter appears in the word - adds one to correctCounter
Game.prototype.letterCounter = function(letter, word) {
  var letterCount = []
  for(var index = 0; index < word.length; index ++) {
    if(word[index] === letter) {
      letterCount.push(index);
    }
  }
  return letterCount;
  this.correctCounter += letterCount.length;
};

Game.prototype.isGameOver = function(){
  if(this.mistakeCounter = 6) {
    return true;
  }
};
