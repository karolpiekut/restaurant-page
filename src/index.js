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
    const index = document.createElement('div');
    const indexDiv = document.createElement('div');
    index.setAttribute('id', 'index-main');
    indexDiv.setAttribute('class', 'message');
    index.appendChild(indexDiv);
    indexDiv.innerHTML = `Welcome to our bakery.<br> We are a small family-own bakery established in 1954. <br> Come and try
        our products with an amazing cup of coffee on the side.`;
    return index;
}


function coffee() {
    const coffee = document.createElement('div');
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

function bookTable() {
    const bookTable = document.createElement('div');
    const bookTableDiv = document.createElement('div');
    bookTable.setAttribute('id', 'book-main');
    bookTableDiv.setAttribute('class', 'message');
    bookTable.appendChild(bookTableDiv);
    bookTableDiv.innerHTML = `<form id="book-form">
            <h2>Book a table</h2>
            <div id="form-row-one">
                <div class="form-field" id="guest-name-form">
                    <label class="form-label" for="guest-name">Name:</label>
                    <input type="text" id="guest-name" name="guest-name">
                </div>
                <div class="form-field" id="guest-phone-form">
                    <label class="form-label" for="guest-phone">Phone number:</label>
                    <input type="tel" id="guest-phone" name="guest-phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
                    <small class="small">Format: 123-456-7890</small>
                </div>
            </div>
            <div id="form-row-two">
                <div class="form-field" id="date-form">
                    <label class="form-label" for="date">Date:</label>
                    <input type="date" id="date" name="booking-date" value="2018-07-22" min="2018-01-01"
                           max="2018-12-31"/>
                </div>
                <div class="form-field" id="guests-form">
                    <label class="form-label" for="guests-number">Number of guests:</label>
                    <select id="guests-number" name="guests-number">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="1">5</option>
                        <option value="1">6</option>
                        <option value="1">7</option>
                        <option value="1">8</option>
                    </select>
                </div>
            </div>
            <div class="form-field" id="text-form">
                <label class="form-label" for="special-requests">Special requests:</label>
                <input type="text" id="special-requests" maxlength="250">
            </div>
            <input id="book-button" type="submit" value="Book">
        </form>`
    return bookTable;
}


function menu() {
    const menu = document.createElement('div');
    const menuDiv = document.createElement('div');
    menu.setAttribute('id', 'menu-main');
    menuDiv.setAttribute('id', 'food-menu');
    menu.appendChild(menuDiv);
    menuDiv.innerHTML = `<div id="column1-menu">
            <div class="food-menu-item" id="avocado-bagel"><h4>Avocado Bagel</h4></div>
            <div class="food-menu-item" id="baguette-sandwich"><h4>Baguette Sandwich</h4></div>
            <div class="food-menu-item" id="beef-bagel"><h4>Beef Bagel</h4></div>
            <div class="food-menu-item" id="omelette"><h4>Omelette</h4></div>
        </div>
        <div id="column2-menu">
            <div class="food-menu-item" id="salmon-slice"><h4>Salmon Slice</h4></div>
            <div class="food-menu-item" id="full-breakfast"><h4>Full Breakfast</h4></div>
            <div class="food-menu-item" id="pastrami-sandwich"><h4>Pastrami Sandwich</h4></div>
            <div class="food-menu-item" id="sourdough-sandwich"><h4>Sourdough Sandwich</h4></div>
        </div>
    </div>`;
    return menu;
}

function content() {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    content.appendChild(index());
    return content;
}


document.body.appendChild(header());
document.body.appendChild(content());
//document.body.appendChild(index());
document.body.appendChild(footer());




