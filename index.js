//const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

document.addEventListener("DOMContentLoaded", ()=>{
   showDrinks("https://www.thecocktaildb.com/api/json/v1/1/search.php?s") 
})

async function showDrinks(url) {
    /*const data = await*/ fetchDrinks();
    //console.log(data)
    //fetch drinks
    //display drinks
   /*const section2 = await */displayDrinks();
   // console.log(section2)
    };


function fetchDrinks() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
    .then(response => response.json())
    .then(data => {
      // console.log(data)
    displayDrinks(data)
})
    .catch(error => console.log("Fetch error:", error))
}
//fetchDrinks();

const section = document.getElementsByClassName(".section-center");
const title = document.getElementsByClassName(".title");


//const {idDrink:id,strDrink:name,strDrinkThumb:image} = drink
function displayDrinks(cocktail){
    //return "Hello world";
    console.log(cocktail.drinks)
} 
   /* if(!drinks){
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