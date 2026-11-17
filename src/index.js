import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadSpecials } from "./specials.js";
import { loadAbout } from "./about.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home-button");
const menuBtn = document.querySelector("#menu-button");
const specialsBtn = document.querySelector("#specials-button");
const aboutBtn = document.querySelector("#about-button");

function switchTab(loadFunction) {
    content.textContent = "";
    loadFunction();
}

homeBtn.addEventListener("click", () => switchTab(loadHome));
menuBtn.addEventListener("click", () => switchTab(loadMenu));
specialsBtn.addEventListener("click", () => switchTab(loadSpecials));
aboutBtn.addEventListener("click", () => switchTab(loadAbout));

loadHome();