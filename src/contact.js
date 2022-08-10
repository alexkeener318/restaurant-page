function loadContactUs() {
    const content = document.getElementById("content");
    const contact = document.createElement('div');
    const information = document.createElement('p');
    content.style = "";

    information.innerHTML = 'We appreciate you wanting to give us feedback! Currently, the best place to reach us is using our email: totallyRealEmailJKnotReallyWeDontCareAboutYou@LMAO.com<br><br>You can also visit our customer service page <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">here.</a>';
    contact.classList.add('contact');
    contact.appendChild(information);
    content.appendChild(contact);
}

export default loadContactUs;