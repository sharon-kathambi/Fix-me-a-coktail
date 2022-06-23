/*const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

document.addEventListener("DOMContentLoaded", ()=>{
    presentDrinks(URL)
})*/

function fetchDrinks() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
    .then(response => response.json())
    .then(data => {
       // console.log(data)
    displayDrinks(data)
})
    .catch(error => console.log("Fetch error:", error))
}
fetchDrinks();

const section = document.getElementsByClassName(".section-center");
    const title = document.getElementsByClassName(".title");

function displayDrinks({ drinks }){
    //console.log(cocktail.drinks);
    
    if(!drinks){
        //hide loading
        title.textContent = "Sorry, no drinks matched your search"
        section.innerHTML = null;
        return;
    }
}
console.log(displayDrinks());

/*const fetchDrinks = async(url) =>{

try {
    const response = await fetch(url);
    const data = await response.json();
    return data;

}catch(error) {
    console.log(data);
    }
}


const showDrinks = async(url) =>{
    const data = await fetchDrinks(url)
    //fetch drinks
    //display drinks
    console.log(data)
    }

showDrinks();*/