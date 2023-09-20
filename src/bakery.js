function bakery() {
    const bakery = document.createElement('div');
    const bakeryDiv = document.createElement('div');
    bakery.setAttribute('id', 'bakery-main');
    bakeryDiv.setAttribute('class', 'message');
    bakery.appendChild(bakeryDiv);
    bakeryDiv.innerHTML = `Welcome to our bakery.<br> We are a small family-own bakery established in 1954. <br> Come and try
        our products with an amazing cup of coffee on the side.`;
    return bakery;
}

export default bakery;