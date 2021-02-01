
const f_SeatPlus = document.getElementById("f_SeatPlus");
f_SeatPlus.addEventListener("click", ifClickedFirstClassPlus);

const f_SeatMinus = document.getElementById("f_SeatMinus");
f_SeatMinus.addEventListener("click", ifClickedFirstClassMinus);

function ifClickedFirstClassPlus(){
    const currentValue =document.getElementById("currentFirstClassValue").innerText;
    let updateNumber= plusClicked(currentValue);
    document.getElementById("currentFirstClassValue").innerText=updateNumber;
    subTotal();
   
}

function ifClickedFirstClassMinus(){
    const currentValue =document.getElementById("currentFirstClassValue").innerText;
    let updateNumber=minusClicked(currentValue);
    if(updateNumber<0){
        updateNumber=0;
        document.getElementById("currentFirstClassValue").innerText=updateNumber;
        
    }else{
    document.getElementById("currentFirstClassValue").innerText=updateNumber;
  
}  subTotal();
}

const eco_SeatPlus = document.getElementById("eco_SeatPlus");
eco_SeatPlus.addEventListener("click", ifClickedEcoPlus);

function ifClickedEcoPlus(){
    const currentValue =document.getElementById("currentEconomyValue").innerText;
    let updateNumber= plusClicked(currentValue);
    document.getElementById("currentEconomyValue").innerText=updateNumber;
    subTotal();

}

const eco_SeatMinus = document.getElementById("eco_SeatMinus");
eco_SeatMinus.addEventListener("click", ifClickedEcoMinus);

function ifClickedEcoMinus(){
    const currentValue =document.getElementById("currentEconomyValue").innerText;
    let updateNumber=minusClicked(currentValue);
     if(updateNumber<0){
        updateNumber=0;
        document.getElementById("currentEconomyValue").innerText=updateNumber;
      
    }else{
    document.getElementById("currentEconomyValue").innerText=updateNumber;
 
}  subTotal();
}

function plusClicked(currentValue){
 
    const currentNumber = parseInt(currentValue);
    let updateNumber = currentNumber + 1;
    return updateNumber;
 
}
function minusClicked(currentValue){
 
    const currentNumber = parseInt(currentValue);
    let updateNumber = currentNumber - 1;
    return updateNumber;
 
}


function subTotal() {
    const currentFirstValue =document.getElementById("currentFirstClassValue").innerText;
    let firstClassTotal = parseInt(currentFirstValue);
    const currentEcoValue =document.getElementById("currentEconomyValue").innerText;
    let ecoClassTotal = parseInt(currentEcoValue);
    let currentSubTotal=(firstClassTotal*150)+(ecoClassTotal*100);
    document.getElementById("currentSubTotal").innerText=currentSubTotal;
    vatCalculate(currentSubTotal);
}


function vatCalculate(subTotal) {
    const vat=10;

    const charge =(vat/100)*subTotal;
    document.getElementById("charge").innerText=charge;
    total(subTotal,charge);
    return charge;
}

function total(subTotal,charge) {
    const sum= subTotal +charge;
    document.getElementById("total").innerText=sum;
    return sum;
}


const bookingBtn=document.getElementById("submit");
bookingBtn.addEventListener('click',function(){
    const bookingArea =document.getElementById("booking-area");
    const ticketArea =document.getElementById("ticket-area");
    printTicket();
    bookingArea.style.display="none";
    ticketArea.style.display="block";

});

function printTicket(){
    let departFrom =document.getElementById("departFrom").value;
    const destinationTo =document.getElementById("destinationTo").value;
    const departDate =document.getElementById("departDate").value;
    const returnDate =document.getElementById("returnDate").value;
    const total =document.getElementById("total").innerText;
   
    document.getElementById("departFromPrint").innerText=departFrom;
    document.getElementById("destinationToPrint").innerText=destinationTo;
    document.getElementById("departDatePrint").innerText=departDate;
    document.getElementById("returnDatePrint").innerText=returnDate;
    document.getElementById("totalPrint").innerText=total;
}