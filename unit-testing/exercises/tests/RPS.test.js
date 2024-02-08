const whoWon = require('../RPS.js');

describe("whoWon", function(){

    test("returns 'TIE!' if P1 = P2", function (){
        let output = whoWon('rock','rock');
        expect(output).toBe('TIE!');
    });

    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function (){
        let output = whoWon('rock','paper');
        expect(output).toBe('Player 2 wins!');
    });

    test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function (){
        let output = whoWon('paper','scissors');
        expect(output).toBe('Player 2 wins!');
    });

    test("returns 'Player 2 wins!' if P1 = scissors & P2 = rock", function (){
        let output = whoWon('scissors','rock');
        expect(output).toBe('Player 2 wins!');
    });

    test("returns 'Invalid input!' if something other than 'rock', 'paper' and 'scissors' is passed", function (){
        let output = whoWon('abc','def');
        expect(output).toBe('Invalid input!');
    });

});