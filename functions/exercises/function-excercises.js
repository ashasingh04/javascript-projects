//Write a function makeLine(size) that returns a line with exactly size hashes.
let shapeChar = '*';
console.log("------------------------Make Line--------------------------------");
function makeLine(size,character){
    let line = "";
    //console.log(character);
    if (character === "" || character === undefined || character == null)
    {
        character = '#';
    }
    for (let i = 0; i < size; i++){
        line += character;
    }
    return line;
}
console.log(makeLine(5,shapeChar));
console.log("------------------------Make Sqaure--------------------------------");

//Write a function called makeSquare(size) that returns a size by size string of hashes. 
//The function should NOT print each row of the square. Instead, it must return a single string that contains the entire shape.
function makeSquare(size,character){
    let square = '';
    for(let i = 0; i < size; i++){
        square += makeLine(size,character) + "\n";       
    }
    return square.slice(0,-1);
}
console.log(makeSquare(5,shapeChar));
console.log("-----------------------Make Rectangle---------------------------------");

//Write a function makeRectangle(width, height) that returns a rectangle with the given width and height. Use your makeLine function to do this.
function makeRectangle(width, height,character)
{
    let rectangle = '';
    for(let i = 0; i < height; i++){
        rectangle += makeLine(width,character) + "\n";
    }
    return rectangle.slice(0,-1);
}
console.log(makeRectangle(5, 3,shapeChar));
console.log("-------------------------Make Downward Stairs------------------------------");

// Write a function makeDownwardStairs(height) that prints the staircase pattern shown below, with the given height.
// Use your makeLine function to do this.
function makeDownwardStairs(height,character)
{
    let downwardStairs = '';
    for(let i = 0; i < height; i++){
        downwardStairs += makeLine(i+1,character) + '\n';
    }
    return downwardStairs.slice(0,-1);
}
console.log(makeDownwardStairs(5,shapeChar));
console.log("----------------------Make SpaceLine------------------------------");

//Write a function makeSpaceLine(numSpaces, numChars) 
//that returns a line with exactly the specified number of spaces, followed by the specified number of hashes, followed again by numSpaces more spaces.
 function makeSpaceLine(numSpaces, numChars,character)
 {
    let spaceLine = '';
    if (character === "" || character === undefined || character == null)
    {
        character = '#';
    }
    for(let i = 0; i < numSpaces; i++)
    {
        spaceLine += " "; 
    }
    for (let j = 0; j < numChars; j++){
        spaceLine += character;
    }
    for (let k = 0; k < numSpaces; k++){
        spaceLine += " ";
    }
    return spaceLine;
 }
 console.log(makeSpaceLine(3, 5,shapeChar));
 console.log("-----------------------Make Triangle--------------------------------");
 
 //Write a function makeIsoscelesTriangle(height) that returns a triangle of the given height.
 function makeIsoscelesTriangle(height,character)
 {
    let triangle = '';
    for (let i = 0; i < height; i++){
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1,character) + '\n');
    }
    return triangle.slice(0,-1);
 }
 console.log(makeIsoscelesTriangle(5,shapeChar));
 console.log("------------------------Make Diamond------------------------------");
 //console.log(reverse(makeIsoscelesTriangle(5)));

 // Write a function makeDiamond(height) that returns a diamond where the triangle formed by the top portion has the given height.
 function reverse(str) {
    let reversed = '';
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}
 function makeDiamond(height,character)
 {
    let diamond = '';
    diamond = makeIsoscelesTriangle(height,character) + '\n' + reverse(makeIsoscelesTriangle(5,character));
    return diamond;
 }
 console.log(makeDiamond(5,shapeChar));