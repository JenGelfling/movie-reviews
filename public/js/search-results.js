
const searchForm = document.getElementById("search-form")
const searchBar = document.getElementById("search-bar")

let search = ''
let resultsFor = document.querySelector("#results-h4")
let fetchedMovies = []

searchForm.addEventListener('keydown', function(event) {
    if (event.key === 'Enter'){
        event.preventDefault();
        let search = searchBar.value
        buildLink(search);
    }
});





buildLink(search)

async function buildLink(search) {
    urlLink = `http://www.omdbapi.com/?s=${search}&apikey=4e8db45b`

    let response = await fetchFromApi(urlLink);
    buildAndAppend(search, response);

}

async function fetchFromApi(url){
    let result;
     
    const response = await fetch(url, {
        method: 'GET'

    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        result = data;
    })
    
    fetchedMovies = result;
    return result;
}

function buildAndAppend(search, response) {
    if (response.Response === "False"){ 
        resultsFor.textContent = `No results found for: "${search}"`
        let searchResults = document.querySelector("#search-results")
        searchResults.innerHTML = ``
    } else {
    let searchResults = document.querySelector("#search-results")
    searchResults.innerHTML = ``
    for (let i = 0; i < response.Search.length; i++) {
        let tempCard = buildElement(search, response.Search[i]);

        searchResults.append(tempCard);
    }
}
}

function buildElement(search, data) {
    console.log(resultsFor)
    let div = document.createElement("div");
    resultsFor.textContent = `Results for: "${search}"`
    div.setAttribute("class", "movie-card container d-flex")
    div.innerHTML = `
<a href="/"><img id="movie-card-poster" href="/" src="${data.Poster}" alt="Poster"></a>
                <div class="container d-flex flex-column">
                  <a href="/" class="movie-card-h4 text-black">${data.Title}</a>
                  <a href="/" class="movie-card-h4 text-black">${data.Year}</a>
                </div>
    `
        ;
    return div;
}
