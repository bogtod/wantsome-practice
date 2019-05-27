//Obiectul de mai jos il puneti intr-un fisier separat "world.json"
//faceti fech intr-un fisier separat de index.js
//importati fetch-ul in index.js
// Folosindu-va de html css si JS afisati autorul si tilul iar dedesubt video-ul sa putem da 
//play(folositi media)
// in functie de rating afisati atatea stele cat are ratingul de exemplu daca ratingul e 3 
//afisam sub video * * *

import {apiRequest} from './index.js';


apiRequest().then(response => printData(response));


const printData = arr => {
    return arr.map(item => {
        let div = document.createElement('div');
        let title = document.createElement('p');
        title.innerHTML = `Author: ${item.author} | Title: ${item.title}`;

        let video = document.createElement('iframe');
        video.style.width = "150";
        video.style.height = "150";
        video.src = item.youtubeVideo;

        let stars = document.createElement('div');
        stars.innerText = "Rating: ";
        for(let i = 0; i < item.rating; i++) {
            let star = document.createElement('i');
            star.classList.add("fas");
            star.classList.add("fa-star");
            stars.appendChild(star);
        };

        div.appendChild(title);
        div.appendChild(video);
        div.appendChild(stars)

        document.body.appendChild(div);
    });
};