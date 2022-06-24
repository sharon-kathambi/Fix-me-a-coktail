//const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s";

document.addEventListener("DOMContentLoaded", () => {
   showDrinks("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a") 
})

/*async function showDrinks(url, data = {}) {
    const data2 = await fetchDrinks(url);
    console.log(data2)
    //fetch drinks
    //display drinks
   const section2 = await displayDrinks(data);
    console.log(section2)
    };*/

/*const form = document.querySelector(".search-form");
const input = document.querySelector("#search[name ='drink']")
    
form.addEventListener("keyup", function (e) {
     e.preventDefault();
     const value = input.value;
     if(!value) return;
     /*function presentDrinks() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        .then(response => response.json())
        .then(data => {
            displayDrinks(data)
        })  
     }
     presentDrinks();
    showDrinks(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`);
    console.log(input.value);
    });*/

function fetchDrinks() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a")
    .then(response => response.json())
    .then(data => {
      // console.log(data)
    displayDrinks(data)
})
    .catch(error => console.log("Fetch error:", error))
}
//const display = fetchDrinks();

//const section = document.getElementsByClassName(".section-center");
//const title = document.getElementsByClassName(".title");


//const {idDrink:id,strDrink:name,strDrinkThumb:image} = drink
function displayDrinks({drinks}){
    const section = document.querySelector(".section-center");
    const title = document.querySelector(".title");
    //return "Hello world";
    console.log(drinks)

    if(!drinks){
        //hide loading
        title.textContent = "Sorry, no drinks matched your search"
        section.innerHTML = null;
        return;
    }
    const newDrinks = drinks.map((drink) =>{
        //console.log(drink)
        const {idDrink:id,strDrink:name,strDrinkThumb:image} = drink
        return `<a href="#drinks_content">
        <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}"/>
            <h4>${name}</h4>
        </article>
    </a>`
    }).join("");
    //hide loading
   title.textContent = "";
   section.innerHTML = newDrinks; 
   return section;
}
function showDrinks(url, data = {}) {
    fetchDrinks(url);
    //console.log(data2)
    //fetch drinks
    //display drinks
   displayDrinks(data);
   // console.log(section2)
    };


const form = document.querySelector(".search-form");
const input = document.querySelector("#search[name ='drink']")

form.addEventListener("keyup", function (e) {
    e.preventDefault();
    const value = input.value;
    if(!value) return;
    //showDrinks(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
    //console.log(input.value);
    function presentDrinks() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
        .then(response => response.json())
        .then(data => {
            displayDrinks(data)
        })  
     }
     presentDrinks();

});


//console.log(displayDrinks());

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