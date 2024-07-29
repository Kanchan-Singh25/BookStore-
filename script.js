const searchInput = document.querySelector(".search-input");
const searchForm = document.querySelector("form");
const imagesContainer = document.querySelector('.images-container');

const fetchBook = async (userQuery) => {
  searchInput.value = "";
  imagesContainer.innerHTML = "<h2>Loading....</h2>";

  const response = await fetch(`https://openlibrary.org/search.json?q=${userQuery}&limit=10`)
  const data = await response.json();
  console.log(response);
  console.log(data);
  console.log(data.docs);


  imagesContainer.innerHTML = " ";
  if (data.docs.length > 0) {
    // iterate array
    data.docs.forEach(curElem => {
      const coverImage = curElem.cover_i;
      console.log(coverImage);
      const value = curElem.cover_i;
      const imageElement = document.createElement('div');
      imageElement.classList.add('imageDiv');
      imageElement.innerHTML = `
        <h2>${curElem.title}</h2>   
        <img src="https://covers.openlibrary.org/b/id/${value}-M.jpg?">      
        <h2>Author:${curElem.author_name[0]}</h2>    
        `;
      imagesContainer.appendChild(imageElement);
    });
  }
  else {
    imagesContainer.innerHTML = "<h2>Image not found</h2>"
  }

}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(searchInput.value);
  const userInput = searchInput.value
  if (userInput !== '') {
    fetchBook(userInput);
  }
  else {
    imagesContainer.innerHTML = "<h2>Please search book<h2>"
  }
})
