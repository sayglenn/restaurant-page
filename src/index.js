import createHomepage from "./home";
import createMenu from "./menu";
import createAboutPage from "./about";

createHomepage();

const buttonHome = document.querySelector("#home");
const buttonMenu = document.querySelector("#menu");
const buttonAbout = document.querySelector("#about");
const content = document.querySelector("#content");

buttonHome.addEventListener("click", () => {
    content.innerHTML = "";
    createHomepage();
    buttonHome.setAttribute("class", "active");
    buttonMenu.setAttribute("class", "inactive");
    buttonAbout.setAttribute("class", "inactive");
});

buttonMenu.addEventListener("click", () => {
    content.innerHTML = "";
    createMenu();
    buttonHome.setAttribute("class", "inactive");
    buttonMenu.setAttribute("class", "active");
    buttonAbout.setAttribute("class", "inactive");
});

buttonAbout.addEventListener("click", () => {
    content.innerHTML = "";
    createAboutPage();
    buttonHome.setAttribute("class", "inactive");
    buttonMenu.setAttribute("class", "inactive");
    buttonAbout.setAttribute("class", "active");
});
