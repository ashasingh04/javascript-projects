let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function() {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function() {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function() {return Math.floor(Math.random()*11)}
};

let Beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function() {return Math.floor(Math.random()*11)}
};

let Tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function() {return Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.

superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
superChimpTwo["astronautID"] = 3;
Beagle["astronautID"] = 4;
Tardigrade["astronautID"] = 5;

// Create an array to hold the animal objects.
let crew = [superChimpOne,salamander,superChimpTwo,Beagle,Tardigrade];

// Print out the relevant information about each animal.
function crewReports(animalObj)
{
   return `${animalObj.name} is a ${animalObj.species}. They are ${animalObj.age} years old and ${animalObj.mass} kilograms. Their ID is ${animalObj.astronautID}.`;
}
for(let i = 0; i < crew.length; i++)
{
   console.log(crewReports(crew[i]));
}

// Start an animal race!
function fitnessTest(candidates){
   let results = [];
   let numSteps;
   let turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }
  console.log(fitnessTest(crew));