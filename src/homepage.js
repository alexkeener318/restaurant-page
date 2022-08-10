function loadHomepage() {
    const content = document.getElementById("content");
    const img = document.createElement("img");
    const title = document.createElement("h1");
    const desc = document.createElement("p");
    const links = document.createElement("div");
    const homepage = document.createElement("p");
    const menu = document.createElement("p");
    const contact = document.createElement("p");

    img.setAttribute("src", "../italy.jpg");
    title.textContent = "Italy's Finest Cuisine";
    desc.textContent = "My name is Marco, creator of the tomato, and I have got to say that this is the finest Restaurant in all of the world. Never before have I tasted my creation (the tomato), so finely prepared. 2/10 probably wouldnt eat here again."
    homepage.textContent = "Homepage";
    menu.textContent = "Menu";
    contact.textContent = "Contact Us";
    homepage.setAttribute('id','homepage');
    menu.setAttribute('id','menu');
    contact.setAttribute('id','contact');
    links.appendChild(homepage);
    links.appendChild(menu);
    links.appendChild(contact);
    links.classList.add("links");

    content.appendChild(img);
    content.appendChild(title);
    content.appendChild(desc);
    content.appendChild(links);

    content.style = "display: flex; flex-direction: column; justify-content: center; align-items: center;margin: 5% 15%;padding: 64px 0px;color: white;height: 500px;"
}

export default loadHomepage;