function gradeLabs(labs) {
  for (let i=0; i < labs.length; i++) {
    let lab = labs[i];
    let result;
    try{
      result = lab.runLab(3);      
    } catch(TypeError){
      console.log("TypeError: lab.runLab is not a function");
      result = "Error thrown";
      //console.log("Error thrown");
    } finally {
      console.log(`${lab.student} code worked: ${result === 27}`);
    }   
  }
}

let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];

gradeLabs(studentLabs);
// Checking: what happens if a student named their function incorrectly?
let studentLabs2 = [
  {
      student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Mya',
      runLab: function (num) {
        return num * num;
      }
  }
];

gradeLabs(studentLabs2);
