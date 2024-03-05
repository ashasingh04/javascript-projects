//TODO: Add Your Code Below

window.addEventListener("load", function () {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      const sortedJson = json.sort((a, b) => {
        return Number(a.hoursInSpace) - Number(b.hoursInSpace);
      });
      console.log(sortedJson);
      const div = document.querySelector("#container");
      const count = document.querySelector("h3");

      count.innerText = `Count: ${sortedJson.length}`;
      for (let i in sortedJson) {
        div.innerHTML += `
        <div class="astronaut">
            <div class= "bio">
            <h3>${sortedJson[i].firstName} ${sortedJson[i].lastName}</h3>
            <ul>
                <li>Hours in space: ${sortedJson[i].hoursInSpace}</li>
                <li class="active${sortedJson[i].active}">Active: ${sortedJson[i].active}</li>
                <li>Skills: ${sortedJson[i].skills}</li>
            </ul>
            </div>
            <img class="avatar" src="${sortedJson[i].picture}">
        </div>
        `;
      }
    });
  });
});
