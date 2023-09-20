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

export default menu;