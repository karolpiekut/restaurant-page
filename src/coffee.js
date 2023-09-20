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

export default coffee;