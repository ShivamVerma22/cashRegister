let billAmt = document.querySelector("#bill")
let cashAmt = document.querySelector("#cash")
let btn = document.querySelector("#btn")
let bal = document.querySelector("#bal")
let displayMsg = document.querySelector("#disp")

btn.addEventListener("click", function(){
    let bill = billAmt.value;
    let cash = cashAmt.value;
    let balance = cash - bill;
    let tempBalance = balance;
    let notes2000, notes500, notes100, notes50, notes20, notes10, notes5, change2; 
    if(tempBalance >= 2000){
        notes2000 = Math.floor(tempBalance / 2000);
        tempBalance = tempBalance - (2000 * notes2000)
    } else {
        notes2000 = 0;
    }
    if(tempBalance >= 500){
        notes500 = Math.floor(tempBalance / 500);
        tempBalance = tempBalance - (500 * notes500);
    } else {
        notes500 = 0;
    }
    if(tempBalance >= 100){
        notes100 = Math.floor(tempBalance / 100);
        tempBalance = tempBalance - (100 * notes100);
    } else {
        notes100 = 0;
    }
    if(tempBalance >= 50){
        notes50 = Math.floor(tempBalance / 50);
        tempBalance = tempBalance - (50 * notes50);
    } else {
        notes50 = 0;
    }
    if(tempBalance >= 20){
        notes20 = Math.floor(tempBalance / 20);
        tempBalance = tempBalance - (20 * notes20);
    } else {
        notes20 = 0;
    }
    if(tempBalance >= 10){
        notes10 = Math.floor(tempBalance / 10);
        tempBalance = tempBalance - (10 * notes10);
    } else {
        notes10 = 0;
    }
    if(tempBalance >= 5){
        notes5 = Math.floor(tempBalance / 5);
        tempBalance = tempBalance - (5 * notes5);
    } else {
        notes5 = 0;
    }
    if(tempBalance >= 2){
        change2 = Math.floor(tempBalance / 2);
        tempBalance = tempBalance - (2 * change2);
    } else {
        change2 = 0;
    }

    bal.textContent = bal.textContent + " " + balance;
    displayMsg.textContent = displayMsg.textContent + ` 2000 x ${notes2000}, 500 x ${notes500}, 100 x ${notes100}, 50 x ${notes50}, 20 x ${notes20}, 10 x ${notes10}, 5 x ${notes5}, 2 x ${change2},  1 x ${tempBalance} `
})