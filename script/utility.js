
function addColor(elementId) {
    const busSit = document.getElementById(elementId);
    busSit.classList.add('bg-green-500');

    const sitNumber = document.getElementById('sit-number');
    const sitNumberValue = sitNumber.innerText;
    const sit = parseInt(sitNumberValue);
    const newSit = sit - 1;
    sitNumber.innerText = newSit;

    // if(countSit > 5){
    //     busSit.classList.add('hidden');
    // }

    const countSit = document.getElementById('count-sit');
    const countSitValue = countSit.innerText;
    const sitt = parseInt(countSitValue);
    const newSitt = sitt + 1;
    countSit.innerText = newSitt;


    if (newSitt >= 4) {
        const hideElement = document.getElementById("hide-element");
        hideElement.classList.add('hidden');
        // const showElement = document.getElementById('show-element');
        // showElement.classList.remove('hidden');
    }

    // appent sit number 
    const appendSit = document.getElementById('append-method');
    const h1 = document.createElement('h1');

    const value = document.createTextNode('');
    h1.appendChild(value);

    appendSit.appendChild(h1);

    // appent text Economy 
    const appendEconomy = document.getElementById('append-method');
    const h2 = document.createElement('h1');

    const ecoValue = document.createTextNode("Economy");
    h2.appendChild(ecoValue);

    appendEconomy.appendChild(h2);

    // append ticket price 
    const appendTicketPrice = document.getElementById('append-method');
    const h3 = document.createElement('h1');

    const ticketPriceValue = document.createTextNode("550");
    h3.appendChild(ticketPriceValue);

    appendTicketPrice.appendChild(h3);


    // mot price 
    const addPrice = document.getElementById('add-price');
    const addPriceValue = addPrice.innerText;
    const price = parseInt(addPriceValue);
    const newPrice = price + 550;
    addPrice.innerText = newPrice;


}

