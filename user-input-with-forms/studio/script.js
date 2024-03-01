const actions = {
    google: "https://www.google.com/search",
    duckDuckGo: "https://duckduckgo.com/",
    bing: "https://www.bing.com/search",
    ask: "https://www.ask.com/web"
};
function setSearchEngine(event){
    let searchEngine = document.querySelector("input[name=engine]:checked"); 
    let form = document.querySelector("form");
    //alert(`inside setSearchEngine function ${searchEngine.value}`);
    for(let action in actions){
        if(action === searchEngine.value){
            form.setAttribute("action",actions[action])
        }
    }
};

window.addEventListener("load",function (){
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        let serachTerm = document.querySelector("input[name=q]");
        let searchEngines = document.querySelectorAll("input[name=engine]");        
        let selectedSE = false;
        searchEngines.forEach((searchEngine) => {
            if(searchEngine.checked === true){
                selectedSE = true;
            }
        });
        if(serachTerm.value === "" || selectedSE === false){
            alert("All fields are required!");
            event.preventDefault();
        }
        setSearchEngine(event);
    });    
});