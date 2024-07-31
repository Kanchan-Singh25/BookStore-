
const api = 'www.themealdb.com/api/json/v1/1/search.php?s=';

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('.search-input');
const imagesContainer = document.querySelector('.images-container');
const recipeDetailsContent = document.querySelector('.recipe-details-content')


const fetchImages = async (query) => {
    searchInput.value="";
    imagesContainer.innerHTML = "<h2>Loading...<h2/>";

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.meals);
   
    imagesContainer.innerHTML = " ";
    if (data.meals.length > 0) {
        console.log(data.meals.length);
        data.meals.forEach(curElem => {
            // creating new div
            const imageElement = document.createElement('div');
            imageElement.classList.add('imageDiv');
            imageElement.innerHTML = `<img src="${curElem.strMealThumb}">
            <h2>${curElem.strMeal}</h2>`;
   
            // appending recipes in the container
            imagesContainer.appendChild(imageElement);

        });
    }
    else {
        imagesContainer.innerHTML =`<h2>No image found</h2>`;
    }
}


//Adding event listener to search form

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(searchInput.value);
    const inputText = searchInput.value.trim();


    // checking input text empty or not .
    if (inputText !=='') {
        fetchImages(inputText);
    }
    else {
        imagesContainer.innerHTML = `<h2> Please enter a search query</h2>`;
    }

});











