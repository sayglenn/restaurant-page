function createHomepage() {
    const intro = document.createElement("p");
    intro.textContent = "Welcome to the Homepage of The Best Restaurant!";
    intro.setAttribute("class", "intro");

    const information = document.createElement("p");
    information.textContent = "We serve the best food here, no matter your wants and needs. Simply pay a visit to our wonderful restaurant and we will ensure that your hunger will be satiated.";
    information.setAttribute("class", "information");
    
    const food = document.createElement("img");
    food.src = "images/food.webp";
    food.alt = "food";
    food.setAttribute("class", "homepage-image");

    const content = document.querySelector("#content");
    content.appendChild(intro);
    content.appendChild(information);
    content.appendChild(food);
}

export default createHomepage;