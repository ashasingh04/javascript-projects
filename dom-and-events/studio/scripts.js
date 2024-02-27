// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init(){
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
  
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");   
    
    let rocketPositionX = 0;
    let rocketPositionY = 0;
    // Click event for "take Off" button
    takeOffButton.addEventListener("click", function(event) {
        let confirm = window.confirm("Is shuttle ready for takeoff ?");
        if(confirm) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";            
            spaceShuttleHeight.innerText = Number(spaceShuttleHeight.innerText) + 10000;
        }  
    });

    // Click event for "Landing" button
    landingButton.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        rocketPositionX = 0;
        rocketPositionY = 0;
        rocket.style.marginBottom = "0px";
        rocket.style.marginLeft = "0px";       
    });

    //Click event of "missionAbort" button
    missionAbortButton.addEventListener("click", function (event) {
        let confirmMsg = window.confirm("Confirm that you want to abort the mission.");
        if(confirmMsg) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
            rocketPositionX = 0;
            rocketPositionY = 0;
            rocket.style.marginBottom = "0px";
            rocket.style.marginLeft = "0px";
        }
    });

    //Click event of "Up/down/left/right" button 
    
    
    document.addEventListener("click", (event) => {
       
    if(event.target.id == "up" && Number(spaceShuttleHeight.innerText) < 250000){ 
        rocketPositionY += 10;    
        rocket.style.marginBottom = rocketPositionY + "px";             
        spaceShuttleHeight.innerText = Number(spaceShuttleHeight.innerText) + 10000;        
    }
    if(event.target.id == "down" && Number(spaceShuttleHeight.innerText) > 0){
        rocketPositionY -= 10;    
        rocket.style.marginBottom = rocketPositionY + "px";        
        spaceShuttleHeight.innerText = Number(spaceShuttleHeight.innerText) - 10000;
    }
    if(event.target.id == "left" && rocket.style.marginLeft !== "-230px"){
        rocketPositionX -= 10;    
        rocket.style.marginLeft = rocketPositionX + "px";
        console.log(rocket.style.marginLeft);         
    }
    if(event.target.id == "right" && rocket.style.marginLeft !== "230px"){
        rocketPositionX += 10;    
        rocket.style.marginLeft = rocketPositionX + "px";
        console.log(rocket.style.marginLeft); 
    }
   });
    
}

window.addEventListener("load", init);