function createMenu() {
    const firstImg = document.createElement("img");
    firstImg.src = "images/carbonara.webp";
    firstImg.alt = "carbonara";
    firstImg.setAttribute("class", "food-image");

    const firstInfo = document.createElement("p");
    firstInfo.textContent = "Spaghetti Carbonara";
    firstInfo.setAttribute("class", "food-info");

    const secondImg = document.createElement("img");
    secondImg.src = "images/garlicbread.webp";
    secondImg.alt = "garlic-bread";
    secondImg.setAttribute("class", "food-image");

    const secondInfo = document.createElement("p");
    secondInfo.textContent = "Garlic Bread";
    secondInfo.setAttribute("class", "food-info");

    const thirdImg = document.createElement("img");
    thirdImg.src = "images/shepherdspie.webp";
    thirdImg.alt = "shepherds-pie";
    thirdImg.setAttribute("class", "food-image");

    const thirdInfo = document.createElement("p");
    thirdInfo.textContent = "Shepherd's Pie";
    thirdInfo.setAttribute("class", "food-info");

    const fourthImg = document.createElement("img");
    fourthImg.src = "images/mushroomsoup.jpg";
    fourthImg.alt = "mushroom-soup";
    fourthImg.setAttribute("class", "food-image");

    const fourthInfo = document.createElement("p");
    fourthInfo.textContent = "Mushroom Soup";
    fourthInfo.setAttribute("class", "food-info");

    const content = document.querySelector("#content");
    content.appendChild(firstImg);
    content.appendChild(firstInfo);
    content.appendChild(secondImg);
    content.appendChild(secondInfo);
    content.appendChild(thirdImg);
    content.appendChild(thirdInfo);
    content.appendChild(fourthImg);
    content.appendChild(fourthInfo);
}

export default createMenu;