
function hangmanWord (word) {
  this.word = word;
  this.length = word.length;
  this.letters = word.split("");
}

function Game () {
  this.mistakeCounter = 0;
  this.correctCounter = 0;
}

Game.prototype.randomSelect = function () {
  var wordBank = ["hello", "apple", "candy", "apart", "diver", "store"];
  wordPlaceHolderforThisdotWord = wordBank[Math.floor(Math.random()* wordBank.length)];
};

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


// var wordArray = function(word) {
//   var emptyArray = [];
//   for(var index = 0; index < word.length; index ++) {
//     emptyArray.push(word.slice(index, index + 1));
//   }
// return emptyArray;
// }

// function wordBank (bankArray, randomSelect) {
//   this.bankArray = bankArray;
//   this.randomSelect = bankArray.Math.random(index);
// }
//
// hangmanWord.prototype.userLetter = function() {
//
//   for(var index = 0; index <= word.length; index += 1) {
//     if(index === this.userLetter) {
//       return "e";
//     } else {
//       return "x";
//     };
//   }
// }
