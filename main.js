var movies = [];
movies = loadData();
var movieList = document.querySelector('.movies');

var genres = movies.map(function(item){
    return item.genre;
});

var filter = genres.filter(function(genre, index){
    return genres.indexOf(genre) >= index;
});

var genreInput = document.querySelector('.genre-input');

var movieNameInput = document.querySelector('.movie-input');
var addButton = document.querySelector('.add-button');
addButton.addEventListener('click', add);

var movieRemoveIndex = document.querySelector('.movie-remove-index');
var removeButton = document.querySelector('.remove-button');
removeButton.addEventListener('click', remove);



function add(){
    if(movieNameInput.value != "" && genreInput.value != ""){
        var movieObject = {
            title: '',
            genre: ''
        };
        movieObject.title = movieNameInput.value;
        movieObject.genre = genreInput.value;
        movies.push(movieObject);
        movieNameInput.value = "";
        genreInput.value = "";
    }
    else if(movieNameInput.value == ""){
        alert('You have to write movie name!');
    }
    else{
        alert('You have to write movie genre!');
    }
    saveData();
    print();
}

function remove(){
    movies.splice(movieRemoveIndex.value-1, 1);
    movieRemoveIndex.value = '';
    saveData();
    print();
}

function print(){
    console.log(filter);
    while(movieList.firstChild){
        movieList.removeChild(movieList.firstChild);
    }
    movies.forEach(function(movie){
        var element = document.createElement('li');
        element.innerText = movie.title + " - " + movie.genre;
        movieList.appendChild(element);
    });
    console.log(movies);
}

function saveData(){
    localStorage.setItem('movies', JSON.stringify(movies));
}

function loadData(){
    return JSON.parse(localStorage.getItem('movies')) || [];
}
print();


/*
Zadanie domowe 1:
Dodać dodatkowe pole genre, określające gatunek dodawanego filmu.
Dostosować wszystkie funkcje, aby były kompatybilne z obiektami.
Obiekt z filmem może wyglądać następująco:
{
  title: 'tytul filmu',
  genre: 'gatunek filmu'
}
*/

/*
Zadanie domowe 2:
Dodać dodatkowe pole filter, filtrujące po nazwie filmu lub gatunku.
Dostosować funkcję render, aby renderowała tylko filmy odpowiadające podanemu filtrowi.
*/

/*
Zadanie domowe 3:
Poprawić wygląd aplikacji (CSS)
*/