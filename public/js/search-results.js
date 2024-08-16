// document.addEventListener('DOMContentLoaded', () => {
//     const searchBar = document.getElementById('search-bar');
//     const resultsContainer = document.getElementById('results-container');
//     const searchTitle = document.getElementById('search-title');

//     searchBar.addEventListener('keyup', async (event) => {
//         const title = searchBar.value.trim();

//         if (title.length < 3) {
//             resultsContainer.innerHTML = '';
//             searchTitle.textContent = 'Results for:';
//             return;
//         }

//         try {
//             const response = await fetch(`/movie?title=${encodeURIComponent(title)}`);

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();

//             if (data.Error) {
//                 resultsContainer.innerHTML = `<p>${data.Error}</p>`;
//                 searchTitle.textContent = `Results for "${title}":`;
//             } else {
//                 searchTitle.textContent = `Results for "${data.Title}":`;

//                 resultsContainer.innerHTML = `
//                     <div class="movie-card container d-flex flex-column">
//                         <div class="movie-card-title">
//                             <h5>${data.Title}</h5>
//                         </div>
//                         <div class="container d-flex">
//                             <img class="movie-card-poster" src="${data.Poster}" alt="${data.Title} Poster" style="width:200px;">
//                             <p class="movie-card-p">${data.Plot}</p>
//                         </div>
//                     </div>
//                 `;
//             }
//         } catch (error) {
//             console.error('Fetch error:', error);
//             resultsContainer.innerHTML = '<p>There was an error fetching the data.</p>';
//             searchTitle.textContent = `Results for "${title}":`;
//         }
//     });
// });




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