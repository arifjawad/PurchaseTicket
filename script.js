const firstPlus = document.getElementById("firstPlus");

firstPlus.addEventListener("click", ifClickedFirstPlus());

function ifClickedFirstPlus(currentValue){
    const currentValue =document.getElementById("currentFirstClassValue").innerText;
    const updateNumber=plusClicked(currentValue);
    document.getElementById("currentFirstClassValue").innerText=updateNumber;
  
    getValue(updateNumber);
}

const firstMinus = document.getElementById("firstMinus");
firstMinus.addEventListener("click", ifClickedFirstMinus());

function ifClickedFirstMinus(currentValue){
    const currentValue =document.getElementById("currentFirstClassValue").innerText;
    const updateNumber=minusClicked(currentValue);
    if(updateNumber<0){
        document.getElementById("currentFirstClassValue").innerText=0;
     
        getValue(updateNumber,0);
    }else{
    document.getElementById("currentFirstClassValue").innerText=updateNumber;
    getValue(updateNumber,0);
   
}
}

const ecoPlus = document.getElementById("ecoPlus");
ecoPlus.addEventListener("click", ifClickedEcoPlus());

function ifClickedEcoPlus(currentValue){
    const currentValue =document.getElementById("currentEconomyValue").innerText;
    const updateNumber=plusClicked(currentValue);
 
    document.getElementById("currentEconomyValue").innerText=updateNumber;
    getValue(0,updateNumber);
}
const ecoMinus = document.getElementById("ecoMinus");
ecoMinus.addEventListener("click", ifClickedEcoMinus());

function ifClickedEcoMinus(currentValue){
    const currentValue =document.getElementById("currentEconomyValue").innerText;
    const updateNumber=minusClicked(currentValue);
 
    document.getElementById("currentEconomyValue").innerText=updateNumber;
    getValue(0,updateNumber);
}
function plusClicked(currentValue){
 
    const currentNumber = parseInt(currentValue);
    const updateNumber = currentNumber + 1;
    return updateNumber;
 
}
function minusClicked(currentValue){
 
    const currentNumber = parseInt(currentValue);
    const updateNumber = currentNumber - 1;
    return updateNumber;
 
}

function getValue(count1,count2){
 const amount1=150;
 const amount2=100;
 
 const totalAmount=(amount1*count1)+(amount2*count2);
   
subTotal(totalAmount);
}

//subtotal
function subTotal(amount) {
    const currentSubTotal=amount;
    document.getElementById("currentSubTotal").innerText=currentSubTotal;
    vatCalculate(currentSubTotal);
    return currentSubTotal;
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


