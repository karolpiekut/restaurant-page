import './style.css';
import ImgLogo from './img/logo2.png';
import bakery from  './bakery.js';
import menu from './menu.js';
import bookTable from './book.js';
import coffee from './coffee.js';

function webController(par2) {
    const content = document.getElementById("content");
    console.log(content.firstChild);
    content.firstChild.replaceWith(par2);
    //document.body.appendChild(content(par2));
}

window.menu = menu;
window.bakery = bakery;
window.bookTable = bookTable;
window.coffee = coffee;
window.webController = webController;

function header() {
    const header = document.createElement('header')
    const logo = new Image();
    logo.src = ImgLogo;
logo.setAttribute('id', 'logo');
logo.setAttribute('alt', 'charles-baker-logo');
header.innerHTML = `
    <nav id="navigation">
        <ul id="navigation-items">
            <li><button id="index-button" onclick="webController(bakery())">Bakery</button></li>
            <li><button id="menu-button" onclick="webController(menu())">Menu</a></li>
            <li><button id="coffee-button" onclick="webController(coffee())">Coffee</a></li>
            <li><button id="book-button" onclick="webController(bookTable())">Book</a></li>
        </ul>
    </nav>`;
header.insertBefore(logo, header.firstChild);
return header;
}

function content(par1) {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    content.appendChild(par1);
    return content;
}

function footer() {
    const footer = document.createElement('footer');
    footer.innerHTML = `<p>© Charles Baker 2023</p>`;
    return footer;
}

document.body.appendChild(header());
document.body.appendChild(content(bakery()));
document.body.appendChild(footer());




