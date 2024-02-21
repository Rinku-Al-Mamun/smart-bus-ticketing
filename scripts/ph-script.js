function next(){
    hideElementById('main-part');
    shoewElementById('success-continue');
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
        
        
        setInnerText("seat-price", count);


        
        
        setInnerText("seat-increment", count);

        
        

    });   
    
}


// const seatPrice = document.getElementById("seatprice").innerText;
// const convertPrice = parseInt(seatPrice);



