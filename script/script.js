

// header and discount section hidden 
function hide() {
    const discountSection = document.getElementById('discount');
    const headerSection = document.getElementById('head');
    discountSection.classList.add('hidden')
    headerSection.classList.add('hidden');
}
// ticket section hide and success section unhide 
function ticketSectionHide() {
    const ticketSection = document.getElementById('ticket-section');
    const successSection = document.getElementById('success-section');
    ticketSection.classList.add('hidden');
    successSection.classList.remove("hidden");
}
// added color in the sit button 
function sitA1() {
    addColor("A1");
}
function sitA2() {
    addColor("A2");
}
function sitA3() {
    addColor("A3");
}
function sitA4() {
    addColor("A4");
}
function sitB1() {
    addColor("B1");
}
function sitB2() {
    addColor("B2");
}
function sitB3() {
    addColor("B3");
}
function sitB4() {
    addColor("B4");
}
// cupon discount 
document.getElementById('apply-input').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const deleteButton = document.getElementById('apply-button')
    if (text === "NEW15" || text === 'Couple 20') {
        deleteButton.removeAttribute('disabled');
        
    }
    else {
        deleteButton.setAttribute('disabled', true);
    }
})
// add price 
function priceAdd(elementId) {
    const addPrice = document.getElementById(elementId);
    const addPriceValue = addPrice.innerText;
    const price = parseInt(addPriceValue);
    const newPrice = price + 550;
    addPrice.innerText = newPrice;
}
// reload website for continue button 
function reload() {
    location.reload();
}
// discount math 
function grandPrice() { 
    const addPrice = document.getElementById('discount-price-id');
    const addPriceValue = addPrice.innerText;
    const price = parseInt(addPriceValue);
    const discount = price * 0.15 || price * 0.20;
    const newPrice = price - discount;
    addPrice.innerText = newPrice;

    const showElement = document.getElementById('coupon');
    showElement.classList.add('hidden');
}
