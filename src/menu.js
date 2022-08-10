// creates header
function loadHeader() {
    const content = document.getElementById("content");
    const header = document.createElement('div');
    const homepage = document.createElement('p');
    const menu = document.createElement('p');
    const contact = document.createElement('p');

    homepage.textContent = "Homepage";
    menu.textContent = "Menu";
    contact.textContent = "Contact Us";
    homepage.setAttribute('id','homepage');
    menu.setAttribute('id','menu');
    contact.setAttribute('id','contact');
    content.style = "";

    header.appendChild(homepage);
    header.appendChild(menu);
    header.appendChild(contact);
    header.classList.add('header');
    content.appendChild(header);
}

// creates rest of page
function loadMenu() {
    const content = document.getElementById("content");
    const menu = document.createElement('div');
    const spag = document.createElement('img');
    const lasag = document.createElement('img');
    const bol = document.createElement('img');
    const desc1 = document.createElement('div');
    const desc2 = document.createElement('div');
    const desc3 = document.createElement('div');

    // sets up images
    spag.setAttribute("src", "../img/images.jpg");
    lasag.setAttribute("src", "../img/lasgna.jpg");
    bol.setAttribute("src", "../img/meetbol.jpg");

    //sets up descriptions
    const title1 = document.createElement('p');
    const mas1 = document.createElement('p');
    title1.textContent = "House Spaghetti";
    title1.classList.add('title');
    mas1.textContent = "Add descritption here for the delicious food to the left. yumm yumm get in my tummy pls so good yes yum";
    desc1.appendChild(title1);
    desc1.appendChild(mas1);

    const title2 = document.createElement('p');
    const mas2 = document.createElement('p');
    title2.textContent = "House Lasagna";
    title2.classList.add('title');
    mas2.textContent = "Add descritption here for the delicious food to the left. yumm yumm get in my tummy pls so good yes yum";
    desc2.appendChild(title2);
    desc2.appendChild(mas2);

    const title3 = document.createElement('p');
    const mas3 = document.createElement('p');
    title3.textContent = "House Meatballs";
    title3.classList.add('title');
    mas3.textContent = "Add descritption here for the delicious food to the left. yumm yumm get in my tummy pls so good yes yum";
    desc3.appendChild(title3);
    desc3.appendChild(mas3);

    // appends children to menu
    menu.appendChild(spag);
    menu.appendChild(desc1);
    menu.appendChild(lasag);
    menu.appendChild(desc2);
    menu.appendChild(bol);
    menu.appendChild(desc3);

    // applies classes
    menu.classList.add('menu');
    desc1.classList.add('desc');
    desc2.classList.add('desc');
    desc3.classList.add('desc');

    content.appendChild(menu);
}

export default loadMenu;
export { loadHeader };