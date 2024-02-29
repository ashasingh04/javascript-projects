//Code Your Solution Below
window.addEventListener("load", function () {   
    let form = this.document.querySelector("form");
    form.addEventListener("submit", function(event){
        let testName = document.querySelector("input[name=testName]");
        let testDate = document.querySelector("input[name=testDate]");
        let rocketType = document.querySelector("select[name=rocketType]");
        let boosterCount = document.querySelector("input[name=boosterCount]");
        let windRating = document.querySelector("input[name=windRating]");
        let productionServers = document.querySelector("input[name=productionServers]");
        
        if(testName.value === "" || testDate.value === "" || rocketType.value === "" || boosterCount.value === "" || windRating.value === "" || productionServers.value === ""){
            alert("All fields are required!");
            event.preventDefault();
        }
    });
});