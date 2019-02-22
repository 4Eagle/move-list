var movies = []
movies = loadData();
movieList = document.querySelector(".movie-list");

movieNameInput = document.querySelector(".movie-input");
addButton = document.querySelector(".add-button");
addButton.addEventListener('click', add);

movieRemoveIndex = document.querySelector(".movie-remove-index");
removeButton = document.querySelector(".remove-button");
removeButton.addEventListener('click', remove);
//alert('Hello world');
function add(){
    movies.push(movieNameInput.value);
    movieNameInput.value = '';
    print();
}

function remove(){

}

function print(){
    console.log(movies);
}

function saveData(){

}

function loadData(){
    
}