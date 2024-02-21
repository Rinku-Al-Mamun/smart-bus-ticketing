function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function shoewElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}



function setInnerText(id, value){
    document.getElementById(id).innerText = value;
    const convertPrice = parseInt(seatprice);
    return convertPrice;


}



