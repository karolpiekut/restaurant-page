import './style.css';
import ImgLogo from './img/logo2.png';
import bakery from  './bakery.js';
import menu from './menu.js';
import bookTable from './book.js';
import coffee from './coffee.js';

function header() {
    const header = document.createElement('header')
    const logo = new Image();
    logo.src = ImgLogo;
logo.setAttribute('id', 'logo');
logo.setAttribute('alt', 'charles-baker-logo');
header.innerHTML = `
    <nav id="navigation">
        <ul id="navigation-items">
            <li><button id="index-button">Bakery</button></li>
            <li><button id="menu-button">Menu</a></li>
            <li><button id="coffee-button">Coffee</a></li>
            <li><button id="book-button">Book</a></li>
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

function webController(par2) {
    document.body.appendChild(header());
    document.body.appendChild(content(par2));
    document.body.appendChild(footer());
}

webController(menu());

//document.getElementById('index-button').addEventListener('click', webController(index()));
//document.getElementById('menu-button').addEventListener('click', webController(menu()));
//document.getElementById('coffee-button').addEventListener('click', webController(coffee()));
//document.getElementById('book-button').addEventListener('click', webController(bookTable()));




