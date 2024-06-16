let data;
let keys
let burger = "off";


fetch('projets.json')
        .then((response) => response.json())
        .then((json) => {
            let data = json;
            keys = Object.keys(data)
            let projectContainer = document.querySelector('.container');
            keys = keys.reverse();
            keys.forEach(function (key) {
                let projectElement = document.createElement('div');
                projectElement.classList.add('project-box');
                projectElement.id = key;
                console.log(key);
                projectElement.innerHTML += "<h3 class='titre_projet'>" + data[key].titre + "</h3>";
                projectElement.innerHTML += "<img src='assets/img/projects/" + data[key].image + "' alt='image projet'>";
                if (window.matchMedia("(min-width: 600px)").matches) {
                    projectElement.innerHTML += "<p class='description_projet'>" + data[key].description + "</p>"
                  } else {
                    projectElement.innerHTML += "<p class='description_projet'>" + data[key].short_description + "</p>"
                  }
                projectElement.innerHTML += "<a class=bouton-lien href='projet.html?id=" + projectElement.id + "' target='_blank'> <p>Voir Plus</p> <img class='logo_lien' src='assets/img/icons/arrow_left.png'></a>"
              
            
                projectContainer.appendChild(projectElement);
            });
        });