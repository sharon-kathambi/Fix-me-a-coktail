document.addEventListener("DOMContentLoaded", () => {
   showDrinks("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a") 
})

function fetchDrinks() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a")
    .then(response => response.json())
    .then(data => {
      // console.log(data)
    displayDrinks(data)
})
    .catch(error => console.log("Fetch error:", error))
}

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
    //fetch drinks
    fetchDrinks(url);
    
    //display drinks
   displayDrinks(data);
    };


const form = document.querySelector(".search-form");
const input = document.querySelector("#search[name ='drink']")

form.addEventListener("keyup", function (e) {
    e.preventDefault();
    const value = input.value;
    if(!value) return;
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

// section individual drinks
const section = document.querySelector(".section-center");

function setDrink() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`)
        .then(response => response.json())
        .then(data => {
            displayDrinks(data)
        })    
    }
        //const section= document.getElementsByClassName(".section-center");      
section.addEventListener("click", function(e) {
   // e.preventDefault()
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem("drink",id)
    presentDrink()        
    })
    


//setDrink()
function viewDrinks(){
    const section = displayDrinks(data);
    if(section) {
        setDrink(section);
    }
}
function presentDrink (){
    const id = localStorage.getItem("drink");
    if(!id){
        document.location.replace("#all-cocktails")
    }
    else{ 
    const id = localStorage.getItem("drink")
    const drink = fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => response.json())
    .then(data => {
      // console.log(data)
    displayDrink(data)
    })
 //console.log(drink)
 }
   
}

function displayDrink(data){
    const drink = data.drinks[0];
    const {strDrinkThumb: image, strDrink: name, strInstructions: desc} = drink;
    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
    ];
    const img = document.querySelector(".drink-img");
    const drinkName = document.querySelector(".drink-name");
    const description = document.querySelector(".drink-desc");
    const ingredients = document.querySelector(".drink-ingredients");
    img.src = image;
    drinkName.textContent = name;
    description.textContent = desc;
    ingredients.innerHTML = list.map((item) =>{
        if(!item) return;
        return `<li>${item}</li>`;
    })
    .join("");
    presentDrink(drink)
    //console.log(drink, list);
}
//displayDrink();
function showOneDrink() {
    presentDrink()
    displayDrink()
}
showOneDrink()