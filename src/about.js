import greenCocktail from "./assets/green-cocktail.jpg";
import mousseParfait from "./assets/parfait.jpg";

export function loadAbout() {
    const content = document.querySelector("#content");

    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about-container");
    
    const aboutTitle = document.createElement("h2");
    aboutTitle.classList.add("about-title");
    aboutTitle.textContent = "About Day Dreamers";

    const imgContainer1 = document.createElement("div");
    imgContainer1.classList.add("image-container-about");

    const mousseParfaitPhoto = document.createElement("img");
    mousseParfaitPhoto.src = mousseParfait;
    mousseParfaitPhoto.alt = "A delicious parfait filled with strawberry mouse and chocolate cookie crumbs."

    const aboutText1 = document.createElement("p");
    aboutText1.textContent = "Day Dreamers started as a day dream of our founder, Steven Dolan, as a cozy nighttime escape where people could come for pleasant company and a place to get away after dinner that wasn't a dive bar. From his visit to Little Italy in New York City, he was deeply inspired by the simpicity of a late night cafe that only offered coffee and pastries with table service.";

    const imgContainer2 = document.createElement("div");
    imgContainer2.classList.add("image-container-about");

    const greenCocktailPhoto = document.createElement("img");
    greenCocktailPhoto.src = greenCocktail;
    greenCocktailPhoto.alt = "A full bodied light green cocktail with flowers for garnish";

    const aboutText2 = document.createElement("p");
    aboutText2.textContent = "It was from that visit that the idea of Day Dreamers came about. We hope that we can be a place that you come for a casual date, a sweet treat, or as your last stop before your late night in downtown ends. Enjoy a drink, have one of our handcrafted pastries, and let yourself dream";

    imgContainer1.appendChild(mousseParfaitPhoto);
    imgContainer2.appendChild(greenCocktailPhoto);

    aboutDiv.appendChild(aboutTitle);
    aboutDiv.appendChild(imgContainer1);
    aboutDiv.appendChild(aboutText1);
    aboutDiv.appendChild(imgContainer2);
    aboutDiv.appendChild(aboutText2);
    content.appendChild(aboutDiv);
};