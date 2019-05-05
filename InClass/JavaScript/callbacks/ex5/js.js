window.onload = function() {document.querySelector('.custom-input > input').focus()}
const form = document.querySelector("form");
const loading = document.querySelector("#loading");
form.onsubmit = function(event) {
  event.preventDefault();
  document.getElementById('fourBooksWrap').innerHTML = '';
  document.getElementById('booksDetails').innerHTML = '';
  loading.style.display = 'block';
  // luati numele cartii din input
  const name = document.querySelector('.custom-input > input');

  if(name.value.length === 0) {
    loading.style.display = 'none';
    let error = document.createElement('span');
    error.classList.add('error');
    error.innerText = "The search input shouldn't be empty!";
    form.insertAdjacentElement('afterend', error);
    name.focus();
  } else {
    //remove the error alert if the search is performed after an empty attempt
    if(document.querySelectorAll('.error').length > 0) {
      document.querySelector('.error').remove();
    }

    const urlQuery = `https://www.googleapis.com/books/v1/volumes?q=${name.value}`;
    //apelati API-ul si folositi functia resultOfBooks ca si handler pentru raspunsul primit
    const request = new XMLHttpRequest();
    request.open('GET', urlQuery);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      loading.style.display = 'none';
      resultsOfBooks(request.response);
    }
  }
};


function resultsOfBooks(response) {
  //schimbati argumentele in functia de mai jos astfel incat sa primeasca response si o functie de tip care sa fie apelata ca si callback - displayBookParagraph 
  displayDetailsWithCallback(response, displayBookParagraph);
}

function displayDetailsWithCallback(books, callback) {
  // up to 4 books 
  // detaliile le gasiti in volumeInfo - cautati prin obiectul principal folosind console.log()
  // stocati detaliile in variabile folosind const sau let 
  let fourBooks = [];
  for(let i = 0; i < 4; i++) {
    fourBooks.push(books.items[i].volumeInfo);
  }
  callback(fourBooks);
}

function displayBookParagraph(books) {
  console.log(books)
  // formati un text de genul 'cele 4 carti citite sunt: titlu1 titlu2 titlu3 titlu4'
  // inserati intr-un paragraph textul format
  let fourBooksWrap = document.getElementById('fourBooksWrap');
  fourBooksWrap.innerHTML = '';
  let fourBooksParagraph = document.createElement('p');
  fourBooksParagraph.innerHTML = '<strong>The first four books are:</strong>';
  let listOfBooks = document.createElement('ul');
  for(let i = 0; i < books.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerText = books[i].title;
    listOfBooks.appendChild(listItem);
  }
  
  fourBooksWrap.appendChild(fourBooksParagraph);
  fourBooksWrap.appendChild(listOfBooks);
  addBooksToPage(books);
}

function addBooksToPage(books) {
  // BONUS
  // Sa se afiseze pe pagina detalii precum title, publisher, publishDate, pages, language si thumbnail-ul(imaginea) cartii
  // language, pageCount, publishDate
  //Bonus 2 - afisati si descrierea - description - iar daca descrierea e mai lunga de 15 cuvinte, adaugati "..."
  //exemplu : Describes the COMPASS model for working with preschool and elementary...
  let booksDetails = document.getElementById('booksDetails');
  booksDetails.innerHTML = '';
  

  for(let i = 0; i < books.length; i++) {
    let book = document.createElement('div');
    let bookInfo = document.createElement('div');
    let bookImg = document.createElement('img');
    let bookDescription = document.createElement('div');
    bookImg.src = books[i].imageLinks.thumbnail;
    bookInfo.innerHTML = 
    `
      <h3>${books[i].title}</h3>
      <h4><i>by ${books[i].publisher}</i></h4>
      <p>Published: ${books[i].publishedDate}</p>
      <p>Pages: ${books[i].pageCount}</p>
      <p>Language: ${books[i].language}</p>
      <a href='${books[i].previewLink}'>See it on Google Books</a>
    `
    let booksDescription = books[i].description;
    if(booksDescription === undefined) {
      bookDescription.innerHTML = "<small><i>No description available for this book</i></small>";
    } else {
      if(booksDescription.split(' ').length > 15) {
        shorten = [];
        for(let x = 0; x < 15; x++) {
          shorten.push(booksDescription.split(' ')[x]);
        }
        bookDescription.innerHTML = `<strong>Short description:</strong><br>${shorten.join(' ')}[...]`;
      }
    }
    
    book.appendChild(bookImg);
    bookInfo.appendChild(bookDescription)
    book.appendChild(bookInfo);
    booksDetails.appendChild(book);
  }
}