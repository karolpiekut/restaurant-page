import _ from 'lodash';
import './style.css';
import ImgAvocadoBagel from './img/menu-img/avocado-bagel.jpg';
import ImgBaguetteSandwich from './img/menu-img/baguette-sandwich.jpg';
import ImgBeefBagel from './img/menu-img/beef-bagel.jpg';
import ImgBreadDisplay from './img/bread-display.jpg';
import ImgCoffee from './img/coffee.jpg';
import ImgDoughHands from './img/dough-hands.jpg';
import ImgFullBreakfast from './img/menu-img/full-breakfast.jpg';
import ImgOmelette from './img/menu-img/omelette.jpg';
import ImgPastramiSandwich from './img/menu-img/pastrami-sandwich.jpg';
import ImgSalmonSlice from './img/menu-img/salmon-slice.jpg';
import ImgSourdoughSandwich from './img/menu-img/sourdough-sandwich.jpg';
import ImgLogo from './img/logo2.png';

function header() {
    const header = document.createElement('header')
    const logo = new Image();
    logo.src = ImgLogo;
    logo.setAttribute('id', 'logo');
    logo.setAttribute('alt', 'charles-baker-logo');
    header.innerHTML = `
    <nav id="navigation">
        <ul id="navigation-items">
            <li><a href="">Bakery</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Coffee</a></li>
            <li><a href="">Book</a></li>
        </ul>
    </nav>`;
    header.insertBefore(logo, header.firstChild);
    return header
}

function footer() {
    const footer = document.createElement('footer');
    footer.innerHTML = `<p>© Charles Baker 2023</p>`;
    return footer;
}

function index() {
    const index = document.createElement('main');
    const indexDiv = document.createElement('div');
    index.setAttribute('id', 'index-main');
    indexDiv.setAttribute('class', 'message');
    index.appendChild(indexDiv);
    indexDiv.innerHTML = `Welcome to our bakery.<br> We are a small family-own bakery established in 1954. <br> Come and try
        our products with an amazing cup of coffee on the side.`;
    return index;
}

function coffee() {
    const coffee = document.createElement('main');
    const coffeeDiv = document.createElement('div');
    coffee.setAttribute('id', 'coffee-main');
    coffeeDiv.setAttribute('class', 'message');
    coffee.appendChild(coffeeDiv);
    coffeeDiv.innerHTML = `Our delicious range of coffees is responsibly sourced from Central and Southern America.<br><br> We
        work
        directly with the growers to bring the most value to our customers as well as the return for the people who work
        their a**** off on the fields. <br><br> Our coffee is roasted in house (that's where the amazing smell comes from)
        and available to buy in 500g and 1kg bags. <br><br>If you require any additional information - ask one of our
        colleagues, and they will be more than happy to tell you more about them.`;
    return coffee;
}




document.body.appendChild(header());
document.body.appendChild(index());
document.body.appendChild(footer());

let test1 = document.getElementById('content');
console.log(`test1: ${test1}`);
let test2 = document.querySelector('#content');
console.log(`test2: ${test2}`);


