// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("check if the value of organization is 'nonprofit'", function() {
    expect(launchcode.organization).toEqual('nonprofit');
  });

  test("check if the value of executiveDirector is 'Jeff'", function() {
    expect(launchcode.executiveDirector).toEqual('Jeff');
  });

  test("check if the value of percentageCoolEmployees is '100'", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("check if programsOffered contains appropriate values and have appropriate size.", function() {
    //expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });  

  test("should return 'Launch!',When passed a number that is ONLY divisible by 2", function() {
    expect(launchcode.launchOutput(4)).toEqual('Launch!');
  });

  test("should return 'Code!',When passed a number that is ONLY divisible by 3", function() { 
    expect(launchcode.launchOutput(9)).toEqual('Code!');
  });

  test("should return 'Rocks!',When passed a number that is ONLY divisible by 5", function() {
    expect(launchcode.launchOutput(25)).toEqual('Rocks!');
  });

  test("should return 'LaunchCode!',When passed a number that is divisible by 2 and 3", function() {
    expect(launchcode.launchOutput(12)).toEqual('LaunchCode!');
  });

  test("should return 'Code Rocks!',When passed a number that is divisible by 3 and 5", function() {
    expect(launchcode.launchOutput(15)).toEqual('Code Rocks!');
  });  
  // test("should return 'Launch Rocks!',When passed a number that is divisible by 2 and 5", function() {
  //   expect(launchcode.launchOutput(20)).toEqual('Launch Rocks!');
  // });

  test("should return 'Launch Rocks! (CRASH!!!!)',When passed a number that is divisible by 2 and 5", function() {
    expect(launchcode.launchOutput(20)).toEqual('Launch Rocks! (CRASH!!!!)');
  });
  
  test("should return 'LaunchCode Rocks!',When passed a number that is divisible by 2,3 and 5", function() {
    expect(launchcode.launchOutput(30)).toEqual('LaunchCode Rocks!');
  });

  test("should return 'Rutabagas! That doesn't work.',When passed a number that is not divisible by 2,3 and 5", function() {
    expect(launchcode.launchOutput(19)).toEqual("Rutabagas! That doesn't work.");
  });
  
});