import dateNight from "./assets/date-night.jpg";
import orangeCocktail from "./assets/orange-cocktail.jpg";
import { loadMenu } from "./menu.js";
import { loadSpecials } from "./specials.js";

export function loadHome() {
    const content = document.querySelector("#content");

    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home-container");

    const tagline = document.createElement("h2");
    tagline.classList.add("tagLine");
    tagline.textContent = "Come and give your mind time to wander";
 
    const imgContainer1 = document.createElement("div");
    imgContainer1.classList.add("image-container-home");

    const dateNightPhoto = document.createElement("img");
    dateNightPhoto.src = dateNight;
    dateNightPhoto.alt = "Two people share time together with coffee and pastries."

    const introText1 = document.createElement("p");
    introText1.textContent = "Nestled among the cozy evergreen forests of Washington, Day Dreamers is a place for lovers, loners, and dreamers to share a lovely space to dream freely."    

    const imgContainer2 = document.createElement("div");
    imgContainer2.classList.add("image-container-home");

    const orangeCocktailPhoto = document.createElement("img");
    orangeCocktailPhoto.src = orangeCocktail;
    orangeCocktailPhoto.alt = "An orange cocktail with a slice of orange as garnish";

    const introText2 = document.createElement("p");
    introText2.textContent = "Complete with table service, coffee, craft cocktails, and pastries, come experience a place where dreams do come true."

    const introText3 = document.createElement("p");
    const menuLink = document.createElement("a");
    const specialsLink = document.createElement("a");

    menuLink.textContent = "MENU";
    menuLink.href = "#";
    menuLink.addEventListener("click", (event) => {
        event.preventDefault();
        content.textContent = "";
        loadMenu();
    });

    specialsLink.textContent = "SPECIALS";
    specialsLink.href = "#";
    specialsLink.addEventListener("click", (event) => {
        event.preventDefault();
        content.textContent = "";
        loadSpecials();
    })

    introText3.append("Check out our ", menuLink, " and ", specialsLink, ".");

    imgContainer1.appendChild(dateNightPhoto);
    imgContainer2.appendChild(orangeCocktailPhoto);

    homeDiv.appendChild(tagline);
    homeDiv.appendChild(imgContainer1);
    homeDiv.appendChild(introText1);    
    homeDiv.appendChild(imgContainer2);
    homeDiv.appendChild(introText2);
    homeDiv.appendChild(introText3);
    content.appendChild(homeDiv);
};