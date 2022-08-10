import loadHomepage from './homepage';
import loadMenu from './menu';
import { loadHeader } from './menu';
import loadContactUs from './contact';

loadHomepage();
// gets each different button choice

const content = document.getElementById("content");
let menu = document.getElementById('menu');
let homepage = document.getElementById('homepage');
let contact = document.getElementById('contact');

function clearWebpage() {
    let lastChild = content.lastElementChild;
    while (lastChild) {
        content.removeChild(lastChild);
        lastChild = content.lastElementChild;
    }
}

function updateIds() {
    homepage = document.getElementById('homepage');
    menu = document.getElementById('menu');
    contact = document.getElementById('contact');

}

function resetEventListeners() {
    homepage.addEventListener('click', ()=>{
        console.log("WORKING");
        clearWebpage();
        loadHomepage();
        updateIds();
        resetEventListeners();
    });
    
    menu.addEventListener('click', ()=>{
        clearWebpage();
        loadHeader();
        loadMenu();
        updateIds();
        console.log("WORKING - MENU");
        resetEventListeners();
    });
    
    contact.addEventListener('click', ()=>{
        clearWebpage();
        loadHeader();
        loadContactUs();
        updateIds();
        console.log("WORKING - CONTACT");
        resetEventListeners();
    });
}

// sets eventListeners

homepage.addEventListener('click', ()=>{
    console.log("WORKING");
    clearWebpage();
    loadHomepage();
    updateIds();
    resetEventListeners();
});

menu.addEventListener('click', ()=>{
    clearWebpage();
    loadHeader();
    loadMenu();
    updateIds();
    console.log("WORKING - MENU");
    resetEventListeners();
});

contact.addEventListener('click', ()=>{
    clearWebpage();
    loadHeader();
    loadContactUs();
    updateIds();
    console.log("WORKING - CONTACT");
    resetEventListeners();
});