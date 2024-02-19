

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
    const sitN = parseInt(countSitValue);
    const newSitN = sitN + 1;
    countSit.innerText = newSitN;


    if ( newSit < 4) {
        const hideElement = document.getElementById(elementId);

        // busSit.setAttribute('disabled',true);
        hideElement.setAttribute('disabled',true);
        
        // const showElement = document.getElementById('show-element');
        // showElement.classList.remove('hidden');
    }

    // append sit number 
    const appendSit = document.getElementById('append-method');
    const h1 = document.createElement('h1');

    const value = document.createTextNode(elementId);
    h1.appendChild(value);

    appendSit.appendChild(h1);

    // append text Economy 
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


    // add price 

    priceAdd('add-price');
    priceAdd('discount-price-id');
}





