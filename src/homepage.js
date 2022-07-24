function loadHomepage() {
    const content = document.getElementById("content");
    const img = document.createElement("img");
    const title = document.createElement("h1");
    const desc = document.createElement("p");

    img.setAttribute("src", "../italy.jpg");
    title.textContent = "Italy's Finest Cuisine";
    desc.textContent = "My name is Marco, creator of the tomato, and I have got to say that this is the finest Restaurant in all of the world. Never before have I tasted my creation (the tomato), so finely prepared. 2/10 probably wouldnt eat here again."

    content.appendChild(img);
    content.appendChild(title);
    content.appendChild(desc);
}

export default loadHomepage;