describe("hangmanWord", function() {
  it("will create object with these specifications", function(){
    var testWord = new hangmanWord ("hello");
    expect(testWord.word).to.equal("hello");
    expect(testWord.length).to.equal(5);
    expect(testWord.letters).to.eql(["h", "e", "l", "l", "o"]);
  });
});

describe ("game", function () {
  it("will return true if letterSelect is  in the word", function () {
    var testGame = new Game();
    expect(testGame.letterSelect("a", "apple")).to.equal(true);
  });
  it("will return letterSelect to be false if letter is not in the word", function (){
    var testGame = new Game();
    expect(testGame.letterSelect("c", "apple")).to.equal(false);
  });
  it("will calculate the number of times the letter appears in the word using letterCounter", function(){
    var testGame = new Game();
    expect(testGame.letterCounter("e", "energy")).to.eql([0,2]);
  });

  it("will alert the player in the event they lose", function(){
    var testGame = new Game ();
    expect(testGame.letterSelect("c", "apple")).to.equal(false);
    expect(testGame.letterSelect("b", "apple")).to.equal(false);
    expect(testGame.letterSelect("t", "apple")).to.equal(false);
    expect(testGame.letterSelect("m", "apple")).to.equal(false);
    expect(testGame.letterSelect("f", "apple")).to.equal(false);
    expect(testGame.letterSelect("g", "apple")).to.equal(false);
    expect(testGame.isGameOver()).to.equal(true);
  });
});
