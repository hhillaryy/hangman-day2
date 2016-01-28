describe("HangmanWord", function() {
  it("will create object with these specifications", function(){
    var testWord = new HangmanWord();
    expect(testWord.word).to.equal("hello");
    expect(testWord.length).to.equal(5);
    expect(testWord.letters).to.eql(["h", "e", "l", "l", "o"]);
  });
});

describe ("Game", function () {
  it("will create a game object that includes a HangmanWord object", function(){
    var testGame = new Game();
    expect(testGame.gameWord.word).to.equal("hello");
  });
  it("will take HangmanWord and replace them with blank spaces", function(){
    var testGame = new Game();
    expect(testGame.blankSpaces()).to.eql(["_","_","_","_","_"]);
  });
  it("will return true if letterSelect is  in the word", function () {
    var testGame = new Game();
    expect(testGame.letterSelect("h")).to.equal(true);
    expect(testGame.mistakeCounter).to.equal(0);
  });
  it("will return letterSelect to be false if letter is not in the word", function (){
    var testGame = new Game();
    expect(testGame.letterSelect("c")).to.equal(false);
    expect(testGame.mistakeCounter).to.equal(1);
  });
  it("will calculate the number of times the letter appears in the word using letterCounter", function(){
    var testGame = new Game();
    expect(testGame.letterCounter("l")).to.eql([2,3]);
    expect(testGame.correctCounter).to.equal(2);
  });

  it("will return true if game is over, false if game is still in play", function(){
    var testGame = new Game ();
    testGame.mistakeCounter = 6;
    expect(testGame.isGameLost()).to.equal(true);
  });
  it("will return false if game is not over and still in play", function(){
    var testGame = new Game ();
    testGame.mistakeCounter = 2;
    expect(testGame.isGameLost()).to.equal(false);
  });
});
