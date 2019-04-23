const header = document.querySelector('header');
const section = document.querySelector('section');
const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';



const request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();


request.onload = function() {
    const superHeroes = request.response;
    console.log(superHeroes);
    populateHeader(superHeroes);
    showHeroes(superHeroes);
};



function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    const myParagraph = document.createElement('p');
    myParagraph.textContent = `HomeTown: ${jsonObj['homeTown']} | Formed: ${jsonObj['formed']}`;
    header.appendChild(myParagraph);
};

const showHeroes = (jsonObj) => {
    const heroes = jsonObj['members'];
    for(let i = 0; i < heroes.length; i++) {
        const article = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');
        
        myH2.textContent = heroes[i].name;
        myPara1.textContent = `Identity: ${heroes[i].secretIdentity}`;
        myPara2.textContent = `Age: ${heroes[i].age}`;
        myPara3.textContent = `Superpowers: `;
        const superPowers = heroes[i].powers;

        for(let j = 0; j < superPowers.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        article.appendChild(myH2);
        article.appendChild(myPara1);
        article.appendChild(myPara2);
        article.appendChild(myPara3);
        article.appendChild(myList);

        section.appendChild(article);
    };
}







