const books = [
    {title: 'The Power of Habit',
     author: 'Charles Duhigg',
     read: true,
     url: "https://images-na.ssl-images-amazon.com/images/I/41owDNwBMNL._SX324_BO1,204,203,200_.jpg"
    },
    {title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck',
    read: false,
    url: 'https://images.gr-assets.com/books/1436227012l/40745.jpg'
    }];
  
  // Creati o pagina web care are un h1 cu "Book List"
  // adugati un script style unde sa tinem js-ul
  //Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra
  //BONUS: folositi ul si li pentru a face display la carti
  //BONUS: adaugati o proprietaet pentru fiecare carte cu URL de la coverul cartii si adaugati un element img pentru fiecare (nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)
  //BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.

    const ul = document.querySelector('ul')

  for(let i = 0; i < books.length; i++) {
        const li = document.createElement('li')
        const img = document.createElement('img')
        img.setAttribute('src', books[i].url)
        
        li.innerHTML = `
        <strong>${books[i].title}</strong> 
        
        Author: ${books[i].author}
        `
        if(books[i].read) {
            li.style.backgroundColor = 'green'
        }
        li.appendChild(img)
        ul.appendChild(li)
  }

