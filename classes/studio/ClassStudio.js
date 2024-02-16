//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        this.scores.push(newScore);
    }
    average()
    {       
        let avg = 0;        
        let sum = this.scores.reduce((result,value) => {return (result + value)});       
        avg = Math.round(sum / this.scores.length * 10)/10;
        return avg;
    }
    status()
    {
        let avg = this.average();
        if(avg >= 90){
            return "Accepted";
        } else if(avg >= 80 && avg <= 89){
            return "Reserve";
        } else if(avg >= 70 && avg <= 79){
            return "Probationary";
        } else{
            return "Rejected";
        }
    }
}

let bear = new CrewCandidate('Bubba Bear', 135, [88,85,90]);
bear.addScore(83);
console.log(bear.scores);

let maltese = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
console.log(maltese);
console.log(maltese.average());

let gator = new CrewCandidate('Glad Gator', 225, [75,78,62]);
console.log(gator);
let crewArr = [bear, maltese, gator];
for (let crew of crewArr){
console.log(`${crew.name} earned an average test score of ${crew.average()}% and has a status of '${crew.status()}'.`);
}

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let reserveCount = 0;
let acceptedCount = 0;
while(gator.average() <= 90){
    while(gator.average() <= 80){
        gator.addScore(99);
        reserveCount ++;
    }
    gator.addScore(99);
    acceptedCount ++;
}
console.log(`${gator.name} took ${reserveCount} test to reach 'Reserve' status and took ${reserveCount + acceptedCount} to reach 'Accepted' status.`);
console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of '${gator.status()}'.`);