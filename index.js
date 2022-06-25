// affichage du prix par défaut
let valuePrice = document.getElementById('price');
let priceFrequence = document.querySelector ('.priceBox p');
let price = 16;
valuePrice.textContent = `\$ ${price}.00`;
priceFrequence.textContent = '/ month';


// change la couleur et le prix lorsque l'utilisateur passe au paiment par année
function changeYear() {

let toggleSwitch = document.querySelector('input[type=checkbox]');
toggleSwitch.addEventListener('click', () => {
    changeColor();
    yearPrice();
})

}

changeYear();

// change la couleur du slider lorsque l'utilisateur passe au mode année
function changeColor() {
    let rangeBar = document.querySelector('input[type=range]');
    let toggleSwitch = document.querySelector('input[type=checkbox]');
    let checked = toggleSwitch.checked;
    let slideBar = document.querySelector('.fillBar');
    if(checked === true) {
            slideBar.classList.add('fillYear');
            slideBar.classList.remove('fillMonth');
            rangeBar.style.setProperty('--bgcolor', 'hsl(15, 100%, 70%)');
            rangeBar.style.setProperty('--shadowcolor', 'hsl(14, 92%, 95%)');

    } else {
        slideBar.classList.add('fillMonth');
        slideBar.classList.remove('fillYear');
        rangeBar.style.setProperty('--bgcolor', 'hsl(174, 86%, 45%)');
        rangeBar.style.setProperty('--shadowcolor', 'hsl(174, 77%, 80%)');
    }
}

// modification des données en fonction de la valeur du slider
function changeRangeValue() {
    let rangeBar = document.querySelector('input[type=range]');

    rangeBar.addEventListener('input', (e) => {
        let value = e.target.value;
        let slideBar = document.querySelector('.fillBar');
        slideBar.style.width = `${value}%`
        changeValue(value);
        yearPrice();
    })
}

changeRangeValue();


// changement des données du formulaire en fonction de la valeur selectionnée par l'utilisateur sur la slide bar
function changeValue(value) {
    let valuePageView = document.getElementById('pageviews');
    switch(value) {
        case '0':
        valuePageView.textContent = '10K '
        price = 8
        break;

        case '25':
        valuePageView.textContent = '50K '
        price = 12
        break;

        case '50':
        valuePageView.textContent = '100K '
        price = 16
        break;

        case '75':
        valuePageView.textContent = '500K '
        price = 24
        break;

        case '100':
        valuePageView.textContent = '1M '
        price = 32
        break;
    }
}

// changement du prix lorsque l'on passe à un abonnement à l'année
function yearPrice() {
    let toggleSwitch = document.querySelector('input[type=checkbox]');
    let checked = toggleSwitch.checked;
    let valuePrice = document.getElementById('price');
    let yearPrice;

    if(checked === true) {
        yearPrice = (price * 12)*0.75;
        valuePrice.textContent = `\$ ${yearPrice}.00`;
        priceFrequence.textContent = '/ year';
    } else {
        valuePrice.textContent = `\$ ${price}.00`;
        priceFrequence.textContent = '/ month';
    }
}







