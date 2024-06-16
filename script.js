let colorCount = 0;
let Slide= 0

let data;
let data_skills;
let i = 0;
let keys;
let keys_skills;
let derniersProjetsKeys;
let burger = "off";
let musique = new Audio('children_of_the_ruins.mp3');
let project_box_counter = 0;



var backgroundTimeline = gsap.timeline();
    backgroundTimeline.from('.background', {
      duration: 1,
      y: 1000,
      ease: "power1.inOut",
      stagger: 0.2,
    });





function animateStar() {
    colorCount += 120;
    gsap.to(".star", {
        rotation: '+=180',
        duration: 1,
    });
}

function animateDot() {
    if (Slide != 3) {
        Slide++;
        gsap.to(".dot_active", {
            x: Slide * (75 + 50),
            duration: 1,
            ease: "",
        });
    }

    if (Slide == 3) {
        Slide = 0;
        gsap.to(".dot_active", {
            x: Slide * 125,
            duration: 1,
        });
    }

}

function AnimateSlide() { 
    if (Slide != 3) {
        gsap.to('.carousel_slide', {
            x: -Slide * 100 + '%',
            duration: 0.5,

                });
            }

    if (Slide == 3) {
        Slide = 0;
        gsap.to('.carousel_slide', {
            x: -Slide * 100 + '%',
            duration: 0.5,
            });
    
    }
}









function animate() {
    console.log(Slide)
    animateStar(), animateDot(), AnimateSlide();
}

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        console.log("clicked");
        animate();
    });
});

document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', () => {
        let id_dot = dot.id;
        id_dot = id_dot.replace("dot_", "");
        id_dot = parseInt(id_dot);
        id_dot--;
        Slide = id_dot;
        animate();
    });
});

let animation_carousel = setInterval(animate, 5000);

function clear_auto_animation() {
    clearInterval(animation_carousel);
    animation_carousel = setInterval(animate, 5000);
}

document.querySelectorAll(".star").forEach(star => {
    star.addEventListener('click', () => {
        clear_auto_animation();
    });
});

document.querySelectorAll(".dot").forEach(dot => {
    dot.addEventListener('click', () => {
        clear_auto_animation();
    });
});




document.addEventListener('DOMContentLoaded', function () {
    let musique = new Audio('Music/Fortressoflies.mp3');

    fetch('projets.json')
        .then((response) => response.json())
        .then((json) => {
            let data = json;
            keys = Object.keys(data)
            derniersProjetsKeys = keys.slice(-3);
            derniersProjetsKeys.reverse();
            console.log(keys, derniersProjetsKeys)
            console.log(data);
            let projectContainer = document.querySelector('.project_container');

            derniersProjetsKeys.forEach(function (key) {
                project_box_counter++;
                let projectElement = document.createElement('div');
                projectElement.classList.add('project-box');
                projectElement.classList.add('project_box_' + project_box_counter + '');
                projectElement.id = key;
                console.log(key);
                projectElement.innerHTML += "<img src='assets/img/projects/" + data[key].image + "' alt='image projet'><br>"; 
                projectElement.innerHTML += "<p class='img-text'>" + data[key].titre + "</p><br>";
                
                // Ajouter un gestionnaire d'événements clic
                projectElement.addEventListener('click', function () {
                    console.log(key);
                    window.open("projet.html?id=" + key, '_blank');
                });

                projectContainer.appendChild(projectElement);
            });
        });
    });


    
    function play_pause() {
        let element = document.querySelector('.music_btn img');
        let nav_element = document.querySelector('.nav-item img');
        console.log(element.src);
        if (element.src.match("play")) {
            element.src = "assets/img/icons/pause.svg";
            musique.play();
            musique.volume = 0.5;
        } else {
            element.src = "assets/img/icons/play.svg";
            musique.pause();
        }
    }

    document.querySelector('.music_btn').addEventListener('click', play_pause);


