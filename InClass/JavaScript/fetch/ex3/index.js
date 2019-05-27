//EX1
// PRE: vom implementa metoda separat si apoi o importam in index.js
// folosind fetch() vom face un post catre url-ul de mai jos
// trebuie sa completati in options ce metoda folosim, ce punem in body si ce punem in headers.
import { apiRequest } from "./fetch.js"


const myPost = {
  title: 'Javascript Post is bla bla',
  body: 'This is the body',
  userId: 19009
}

apiRequest(myPost).then(response => console.log('Success:', response))
.catch(error => console.error('Error:', error));


//EX2
//***bonus***//
//Folosind url-ul gresit tratati cazul in care vom avea eroare
// trebuie verificat daca raspunsul e corect iar daca nu folosim "throw new Error" - cautati ce face, apoi il prindem in .catch()
