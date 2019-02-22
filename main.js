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
    if(movieNameInput.value != ""){
        movies.push(movieNameInput.value);
        movieNameInput.value = "";
    }
    else{
        alert('You have to write movie name!');
    }
    print();
}

function remove(){
    movies.splice(movieRemoveIndex.value-1, 1);
    movieRemoveIndex.value = '';
    print();
}

function print(){
    while(movieList.firstChild){
        movieList.removeChild(movieList.firstChild);
    }
    movies.forEach(function(movie){
        var element = document.createElement('li');
        element.innerText = movie;
        movieList.appendChild(element);
    });
    console.log(movies);
}

function saveData(){

}

function loadData(){

}