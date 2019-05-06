// Aveti 2 functii, una in care o sa luam userii si una in care luam todos
// fiecare todo are o proprietate userId, pentru fiecare userId care este acelasi ca userId-ul din users vom printa ce title se potriveste - o sa faceti o verificare aici.
// Afisati in html un paragraph cu numele userilor, emailul si title-ul din todos.

const usersUrl = "https://jsonplaceholder.typicode.com/users";
const todosUrl = "https://jsonplaceholder.typicode.com/todos"



const getUsers = (callback) => {
    const request = new XMLHttpRequest();
        request.open('GET', usersUrl);
        request.responseType = 'json';
        request.send();
        request.onload = () => {
            const users = request.response;
            callback(users);
        };
}

const getTodos = (userObj) => {
    const request = new XMLHttpRequest();
        request.open('GET', todosUrl);
        request.responseType = 'json';
        request.send();
        request.onload = function() {
            todos = request.response;
            for(let i = 0; i < userObj.length; i++) {
                const listItem = document.createElement('p');
                listItem.textContent = `id: ${userObj[i].name}; title: ${todos[i].title}; email: ${userObj[i].email}`
                document.querySelector('#app').appendChild(listItem);
                console.log(todos[i].title)
            }
        };
}

getUsers(getTodos);





const showUserDetails = () => {
    
}


