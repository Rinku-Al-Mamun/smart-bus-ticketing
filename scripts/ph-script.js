function next(){
    hideElementById('main-part');
    shoewElementById('success-continue');
}
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function shoewElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}





// function seatSelect(){
//     const 
//     setBacgroundColorById()
// }


const allSeatKbd = document.getElementsByClassName("kbd");
let count = 0;

for (const kbd of allSeatKbd) {
    kbd.addEventListener("click", function handleSelect(e){
        count = count + 1;
        
        if(){
            count =count + 550
        }
        setInnerText("seat-price", count);


        
        
        setInnerText("seat-increment", count);

        
        

    });   
    
}


// const seatPrice = document.getElementById("seatprice").innerText;
// const convertPrice = parseInt(seatPrice);



function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
    const convertPrice = parseInt(seatprice);
    return convertPrice;


}