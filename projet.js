let url = window.location.toString().split('=')[1]
let data;
let burger = "off";

console.log(url)


    fetch('projets.json')
        .then((response) => response.json())
        .then((json) => {
            let data = json;
            data = data[url]

            document.title = data["titre"] + " - " + document.title
            document.querySelector('.image_projet').innerHTML += "<img src=" + data["image"] +" alt='image projet'><br>"
            document.querySelector('.liens_projet').innerHTML += "<a class=bouton-lien href=" + data["liens"]["site"] +"> <img class='logo_lien' src='logos/website.png'><p>Site Web</p> </a><br>"
            if (data["liens"]["github"] != null) {
                document.querySelector('.liens_projet').innerHTML += "<a class=bouton-lien href=" + data["liens"]["github"] +"> <img class='logo_lien' src='logos/github.png'><p>Github</p> </a><br>"
            }
            document.querySelector('.phone-only').innerHTML += "<a class=bouton-lien href=" + data["liens"]["site"] +"> <img class='logo_lien' src='logos/website.png'><p>Site Web</p> </a><br>"
            if (data["liens"]["github"] != null) {
                document.querySelector('.phone-only').innerHTML += "<a class=bouton-lien href=" + data["liens"]["github"] +"> <img class='logo_lien' src='logos/github.png'><p>Github</p> </a><br>"
            }
            document.querySelector('body .container .texte').innerHTML += "<h1>" + data["titre"] + "</h1><br>"
            document.querySelector('body .container .texte').innerHTML += "<p>" + data["description"] + "</p><br>"
            document.querySelector('body .container .texte').innerHTML += "<a href='" + data["liens"]["site"] + "'>" + data["liens"]["site"] + "</a><br>"
            for (const i in data["technos"]) {
                    const techno = data["technos"][i];
                    const lien_techno = data["links"][i];
                    document.querySelector('.technos').innerHTML += "<a href=" + lien_techno + "><img src=" + techno + " alt='image techno'></a><br>"
                    
            }
            document.querySelector('.showcase').innerHTML += "<img src=" + data["showcase"]["image"] +" alt='showcase'><br>"
            document.querySelector('.showcase').innerHTML += "<p>" + data["showcase"]["legende"] +"</p><br>"
            
            
        });

        document.querySelector('.burger .icon').addEventListener('click', function () {
            if (burger == "off") {
                burger = "on";
                document.querySelector('.burger-content').style.display = "block";
                document.querySelector('.burger .icon img').src = "images/cross.png";
            }
            else {
                burger = "off";
                document.querySelector('.burger-content').style.display = "none";
                document.querySelector('.burger .icon img').src = "logos/burger_icon.png";
            }
        });

