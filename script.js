let billAmt = document.querySelector("#bill");
let cashAmt = document.querySelector("#cash");
let btn = document.querySelector("#btn");
let clr = document.querySelector("#clr");
let bal = document.querySelector("#bal");
let err = document.querySelector("#err");
let displayMsg = document.querySelector("#disp");
let displayBoard = document.querySelector(".displayboard");

billAmt.addEventListener("input", function(){
    if(isNaN(billAmt.value)){
        err.style.display = "block";
        err.textContent = "Bill Amount should be only Number"
    } else {
        if(billAmt.value > 0){
            err.style.display = "none";
            cashAmt.style.display = "initial";
        } else{
            err.style.display = "block";
            cashAmt.style.display = "none";
            if(billAmt.value === "") {
                err.textContent = "Bill Amount cannot be Empty"
            } else if(billAmt.value < 0) {
                err.textContent = "Bill Amount cannot be Negative"
            }
        } 
    }
})

cashAmt.addEventListener("input", function(){
    if(isNaN(cashAmt.value)){
        err.style.display = "block";
        err.textContent = "Cash Amount should be only Number"
    } else {
        if(cashAmt.value > 0){
            if((Number(cashAmt.value) >= Number(billAmt.value))){
                err.style.display = "none";
                btn.style.display = "block";
            } else {
                err.style.display = "block";
                btn.style.display = "none";
                err.textContent = "Bill cannot be more than Cash received"
            }
        } else {
            err.style.display = "block";
            btn.style.display = "none";
            if(cashAmt.value === "") {
                err.textContent = "Cash Amount cannot be Empty"
            } else if(cashAmt.value < 0) {
                err.textContent = "Cash Amount cannot be Negative"
            } 
        } 
    }
})

btn.addEventListener("click", calculate);

function calculate() {
    let balance = cashAmt.value - billAmt.value;
    let tempBalance = balance;
    let notesValueArray = [2000, 500, 100, 50, 20, 10, 5, 2, 1];
    let notesNumberArray = []; 
    notesValueArray.forEach((e) => {
        if(tempBalance >= e){
            notesNumberArray.push(Math.floor(tempBalance / e));
            tempBalance = tempBalance - (e * notesNumberArray[notesNumberArray.length - 1]);
        } else {
            notesNumberArray.push(0);
        }
    })
    if(Number(cashAmt.value) === Number(billAmt.value)){
        bal.style.display = "block";
        bal.textContent = `Balance : 0`
        displayMsg.style.display = "block";
        displayMsg.textContent = `Cash and Bill are equal, nothing to return`
    } else {
        display(notesValueArray, notesNumberArray, balance);
    }
    disableInputs();
}

function display(notesValueArray, notesNumberArray, balance){
    bal.style.display = "block";
    bal.textContent = `Balance : ${balance}`
    displayMsg.style.display = "block";
    displayMsg.textContent = `Return cash in following denominations :`
    notesValueArray.forEach((e, index) => {
        displayBoard.innerHTML = displayBoard.innerHTML + 
                                `<div class="notes">
                                    <h1 class="note">${e}</h1>
                                    <h2 class="number">${notesNumberArray[index]}</h2>
                                </div>`
    })
}

function disableInputs() {
    billAmt.disabled = true;
    cashAmt.disabled = true;
    btn.disabled = true;
    clr.style.display = "initial"
}

clr.addEventListener("click", function() {
    billAmt.disabled = false;
    billAmt.value = ""
    cashAmt.disabled = false;
    cashAmt.value = ""
    btn.disabled = false;
    clr.style.display = "none";
    displayBoard.innerHTML = "";
    displayMsg.style.display = "none";
    bal.style.display = "none";
    btn.style.display = "none";
    cashAmt.style.display = "none";
})