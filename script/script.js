
function hide (){
    const discountSection = document.getElementById('discount');
    const headerSection = document.getElementById('head');
    discountSection.classList.add('hidden')
    headerSection.classList.add('hidden')
}

function colorA1(){
    addColor("sit");
}
function colorA2(){
    addColor("sit2");
}
function colorA3(){
    addColor("sit3");
}
function colorA4(){
    addColor("sit4");
}
function colorB1(){
    addColor("sit5");
}
function colorB2(){
    addColor("sit6");
}
function colorB3(){
    addColor("sit7");
}
function colorB4(){
    addColor("sit8");
}

document.getElementById('apply-input').addEventListener('keyup',function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('apply-button')
    if(text === "NEW10" || text === 'Couple 20'){
        deleteButton.removeAttribute('disabled');

    }
    else{
        deleteButton.setAttribute('disabled',true);
    }
})
