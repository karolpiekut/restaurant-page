import _ from 'lodash';
import './style.css';
import ImgAvocadoBagel from './img/avocado-bagel.jpg';
import ImgBaguetteSandwich from './img/baguette-sandwich.jpg';
import ImgBeefBagel from './img/beef-bagel.jpg';
import ImgBreadDisplay from './img/bread-display.jpg';
import ImgCoffee from './img/coffee.jpg';
import ImgCroissants from './img/croissants.jpg';
import ImgDoughHands from './img/dough-hands.jpg';
import ImgFullBreakfast from './img/full-breakfast.jpg';
import ImgOmelette from './img/omelette.jpg';
import ImgPastramiSandwich from './img/pastrami-sandwich.jpg';
import ImgSalmonSlice from './img/salmon-slice.jpg';
import ImgSourdoughSandwich from './img/sourdough-sandwich.jpg';


function component() {
    const element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('header');
    const mainPic = new Image();
    mainPic.src = ImgDoughHands;
    element.appendChild(mainPic);


    return element;
}

document.body.appendChild(component());