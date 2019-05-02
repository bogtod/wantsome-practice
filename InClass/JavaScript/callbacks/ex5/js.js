const form = document.querySelector("form");
form.onsubmit = function(event) {
    // event.preventDefault;
  // luati numele cartii din input
  const name = document.querySelector('.custom-input > input').value;
  const urlQuery = `https://www.googleapis.com/books/v1/volumes?q=${name}`
  
  //apelati API-ul si folositi functia resultOfBooks ca si handler pentru raspunsul primit
  const request = new XMLHttpRequest();
        request.open('GET', urlQuery);
        request.responseType = 'json';
        request.send();
        request.onload = function() {
            resultsOfBooks(request.response)
        }
    
};


function resultsOfBooks(response) {
    console.log(response)
  //schimbati argumentele in functia de mai jos astfel incat sa primeasca response si o functie de tip care sa fie apelata ca si callback - displayBookParagraph 
    displayDetailsWithCallback(param1, param2);

}

function displayDetailsWithCallback(books, callback) {
 // up to 4 books 
 // detaliile le gasiti in volumeInfo - cautati prin obiectul principal folosind console.log()
 // stocati detaliile in variabile folosind const sau let
}

function displayBookParagraph(book) {
 // formati un text de genul 'cele 4 carti citite sunt: titlu1 titlu2 titlu3 titlu4'
  // inserati intr-un paragraph textul format
}

function addBooksToPage() {
  // BONUS
  // Sa se afiseze pe pagina detalii precum title, publisher, publishDate, pages, language si thumbnail-ul(imaginea) cartii
  //Bonus 2 - afisati si descrierea - description - iar daca descrierea e mai lunga de 15 cuvinte, adaugati "..."
  //exemplu : Describes the COMPASS model for working with preschool and elementary...
}