// Code your orbitCircumference function here:
function orbitCircumference(radius)
{  
  let circumference = Math.round(2*Math.PI*radius);
  return circumference;
}

// Code your missionDuration function here:
function missionDuration(completedOrbitNum,radius = 2000,speed = 28000)
{
  //Calculate how long it will take our animals to complete a certain number of orbits (time = distance/speed). 
  let circumference = orbitCircumference(radius);
  let distance = completedOrbitNum * circumference ;
  let time =  distance / speed;
  //Round the answer to 2 decimal places.
  return Math.round(time*100)/100;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr)
{
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidateObj,radius,speed)
{
  let spaceWalkTime = missionDuration(3,radius,speed);
  let o2Used = Math.round(candidateObj.o2Used(spaceWalkTime)*1000)/1000;
  return `${candidateObj.name} will perform the spacewalk, which will last ${spaceWalkTime} hours and require ${o2Used} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 let radius = 3000;
 let completedOrbitNum = 5;
 let speed = 28000;
 console.log(`The mission will travel ${orbitCircumference(radius)} km around the planet, and it will take ${missionDuration(completedOrbitNum,radius,speed)} hours to complete.`);
 let crewMember = selectRandomEntry(crew);
 console.log(oxygenExpended(crewMember,radius,speed));

 //function to select the animal with the smallest oxygen consumption.
function selectByO2Consumption(crewArr)
{
  let crewMember = crewArr[0];;
  for (let i = 0; i < crewArr.length; i++)
  {    
    if(crewArr[i].o2Used(1) < crewMember.o2Used(1)){
      crewMember = crewArr[i];
    }
  }
  return crewMember;
}
let candidateByO2Used = selectByO2Consumption(crew);
console.log(oxygenExpended(candidateByO2Used,radius,speed));