/*const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

document.addEventListener("DOMContentLoaded", ()=>{
    presentDrinks(URL)
})*/

function fetchDrinks() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a")
    .then(response => response.json())
    .then(data => {
       // console.log(data)
    displayDrinks(data)
})
    .catch(error => console.log("Fetch error:", error))
}
fetchDrinks();

function displayDrinks(cocktail){
    console.log(cocktail.drinks[0])
}

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