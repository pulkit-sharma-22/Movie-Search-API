// Search Bar functionality
const searchInput = document.getElementById('search');

searchInput.addEventListener("keydown", (e) => {
    if (e.key === 'Enter'){
        // const test = searchInput.value;
        console.log(searchInput.value);
        searchInput.blur();
    }
})



async function fetchdata() {
    
    const url = 'https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=boy';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b77cf5ef8emsha85145b25c3e1bep1e7db3jsncdc4730dfa04',
            'x-rapidapi-host': 'imdb188.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        // the .data is thename of the thing that stores all the movie's info in this API
        const info = result.data;
        
        const items = info.map(movie => {
            const name = movie.title;
            const poster = movie.image;
            const year = movie.year;
            const section = `<li>
                                <img src="${poster}">
                                <div class="m-name">
                                    <h2>${name}</h2>
                                    <p>(${year})</p>  
                                </div>
                            </li>`;
            document.querySelector('.movies').innerHTML += section;
        });
        
        // console.log(items);
        console.log(result);

    } catch (error) {
        console.error(error);
    }

    

        // searchInput.addEventListener("input", (e) => {
        // const word = e.target.value;
        // console.log(word);
        // })

}

fetchdata();

 
