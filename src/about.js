function createAboutPage() {
    const firstIntro = document.createElement("p");
    firstIntro.textContent = "We hire some of the best chefs in the world to provide you with the best meals that you have ever tasted. These chefs had professional experience at famous restaurants and are eagerly waiting to cook for you!";
    firstIntro.setAttribute("class", "about-intro");
    
    const firstImage = document.createElement("img");
    firstImage.src = "images/chef.png";
    firstImage.alt = "chef";
    firstImage.setAttribute("class", "about-image");

    const secondIntro = document.createElement("p");
    secondIntro.textContent = "We also only use the finest ingredients of the highest quality! We make a promise to never compromise on the quality of your meal.";
    secondIntro.setAttribute("class", "about-intro");

    const secondImage = document.createElement("img");
    secondImage.src = "images/ingredients.jpg";
    secondImage.alt = "ingredients";
    secondImage.setAttribute("class", "about-image");

    const address = document.createElement("p");
    address.textContent = "You can locate us at: 100 Real Street in Real City, Real State.";
    address.setAttribute("class", "contact-info");

    const map = document.createElement("img");
    map.src = "images/map.jpg";
    map.alt = "map";
    map.setAttribute("class", "about-image");

    const alternate = document.createElement("p");
    alternate.textContent = "Alternatively, you can contact us via:";
    alternate.setAttribute("class", "contact-info");

    const email = document.createElement("p");
    email.textContent = "realemail@realemailaddress.com";
    email.setAttribute("class", "contact-info");

    const or = document.createElement("p");
    or.textContent = "or";
    or.setAttribute("class", "contact-info");

    const number = document.createElement("p");
    number.textContent = "+XXX XXX XXXX";
    number.setAttribute("class", "contact-info");

    const ending = document.createElement("p");
    ending.textContent = "to make any reservations!";
    ending.setAttribute("class", "contact-info");

    const content = document.querySelector("#content");
    content.appendChild(firstIntro);
    content.appendChild(firstImage);
    content.appendChild(secondIntro);
    content.appendChild(secondImage);
    content.appendChild(address);
    content.appendChild(map);
    content.appendChild(alternate);
    content.appendChild(email);
    content.appendChild(or);
    content.appendChild(number);
    content.appendChild(ending);
}

export default createAboutPage;