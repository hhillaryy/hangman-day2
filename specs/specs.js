describe("hangmanWord", function() {
  it("will create object with these specifications", function(){
    var testWord = new hangmanWord ("hello");
    expect(testWord.word).to.equal("hello");
    expect(testWord.length).to.equal(5);
    expect(testWord.letters).to.eql(["h", "e", "l", "l", "o"]);
  });
});

describe ("game", function () {
  it("will return true if letter is  in the word", function () {
    var testGame = new Game();
    expect(testGame.letterSelect("a", "apple")).to.equal(true);
  });
  it("will return letterSelect to be false", function (){
    var testGame = new Game();
    expect(testGame.letterSelect("c", "apple")).to.equal(false);
  });
  it("will calculate the number of times the letter appears in the word", function(){
    var testGame = new Game();
    expect(testGame.letterCounter("e", "energy")).to.eql([0,2]);
  });
});

// it("will create game with given properties", function() {
//   var testGame = new Game(randomWord, letterBank);
//   var randomWord = testGame.randomSelect();
//   var testWord = new hangmanWord(randomWord);

// describe("wordArray", function (){
//   it("will make a word into an array", function(){
//     var testArray = new wordArray("hello");
//     expect(testArray).to.eql(["h", "e", "l", "l", "o"]);
//   });
// });

// describe("wordBank", function() {
//   it("it will store words for game to select", function(){
//     var testBank = new wordBank (["hello", "apple", "candy", "apart", "diver", "store"], "candy");
//     expect(testBank.bankArray).to.eql(["hello", "apple", "candy", "apart", "diver", "store"]);
//     expect(testBank.randomSelect).to.equal("");
//   });
// });


  // it("will select letter chosen by user", function (){
  //   var testWord = new hangmanWord ("hello", ["h", "e", "l", "l", "o"]);
  //   expect(testword.userLetter).to.equal("e");
