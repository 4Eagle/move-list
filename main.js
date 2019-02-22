var movies = [];
//movies = loadData();
var movieList = document.querySelector('.movies');

var movieNameInput = document.querySelector('.movie-input');
var addButton = document.querySelector('.add-button');
addButton.addEventListener('click', add);

var movieRemoveIndex = document.querySelector('.movie-remove-index');
var removeButton = document.querySelector('.remove-button');
removeButton.addEventListener('click', remove);


function add(){
    movies.push(movieNameInput.value);
    movieNameInput.value = "";
    print();
}

function remove(){
    movies.splice(movieRemoveIndex.value-1, 1);
    movieRemoveIndex.value = '';
    while(movieList.firstChild){
        movieList.removeChild(movieList.firstChild);
    }
    print();
}

function print(){
    var element = document.createElement('li');
    movies.forEach(function(movie){
        element.textContent = movie;
        movieList.appendChild(element);
    });
    console.log(movies);
}

function saveData(){

}

function loadData(){

}