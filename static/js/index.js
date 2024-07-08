window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.header');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});


// const fetchMoviesPromesa  = () => {
//     //COLOCAR LOGICA DE ESPERA
//     fetch('http://127.0.0.1:5000/api/movies/',options)
//     .then(response => response.json()) // CONVERTIR A FORMATO JSON LA RESPUESTA DEL SERVIDOR
//     .then(responseTransform => {
//         console.log(responseTransform);  
//         let movies = responseTransform.results;
//         const divPopular = document.querySelector('#popular-list');
//         movies.forEach(movie => {
//             const html = `
//                     <div class="movie-item">
//                         <a href="./templates/detail-movie.html" >
//                             <img  class="movie-item-img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
//                             <div class="movie-item-detail">
//                                 <p class="movie-item-detail-title">${movie.title}</p>
//                                 <p class="movie-item-detail-subtitle">${movie.release_date} - ${movie.vote_average}</p>
//                             </div>
//                         </a>
//                     </div>
//             `;
//             divPopular.insertAdjacentHTML('beforeend',html);
//         });
        
//     })
//     .catch(error => console.error(error));
// }

// const fetchMoviesAyncAwait = async () => {
//     try {
//         // Hace una solicitud HTTP GET a la URL del servidor seguida de '/movie/popular'. La palabra clave await pausa la ejecución hasta que la promesa devuelta por fetch se resuelva. La variable 'response' contendrá la respuesta HTTP.
//         const response =  await fetch(`http://127.0.0.1:5000/api/movies/`, 
//         option);
//         // const response = await axios(`${URLSERVER}/movie/popular`, options);
//         console.log('Esperando resolución');
//         // Utiliza la palabra clave await para pausar la ejecución hasta que la promesa devuelta por response.json() se resuelva. La variable 'data' contendrá el cuerpo de la respuesta JSON.
//         const data = await response.json();
//         const movies = data.results;
//         console.log(data);

//         const divPopular = document.querySelector('#popular-list');
//         movies.forEach(movie => {
//             const html = `
//                     <div class="movie-item">
//                         <a href="./templates/detail-movie.html" >
//                             <img  class="movie-item-img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
//                             <div class="movie-item-detail">
//                                 <p class="movie-item-detail-title">${movie.title}</p>
//                                 <p class="movie-item-detail-subtitle">${movie.release_date} - ${movie.vote_average}</p>
//                             </div>
//                         </a>
//                     </div>
//             `;
//             divPopular.insertAdjacentHTML('beforeend',html);
//         });

//     } catch (err) {
//         console.error(err)
//     }
    
// }

// fetchMoviesPromesa();
