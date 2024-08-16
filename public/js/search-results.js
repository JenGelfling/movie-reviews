
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
document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const url = `http://www.omdbapi.com/?t=${title}&apikey=4e8db45b`;
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        if (data.Error) {
            document.getElementById('results').innerHTML = `<p>${data.Error}</p>`;
        } else {
            document.getElementById('results').innerHTML = `
                <h2>${data.Title} (${data.Year})</h2>
                <p><strong>Director:</strong> ${data.Director}</p>
                <p><strong>Plot:</strong> ${data.Plot}</p>
                <img src="${data.Poster}" alt="${data.Title} Poster" style="width:200px;">
            `;
        }
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('results').innerHTML = '<p>There was an error fetching the data.</p>';
    }
});