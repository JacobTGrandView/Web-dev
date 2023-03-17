// let bill = prompt("Enter your bill total");
// let iBill = Number(bill);

// if(isNaN(iBill)) {
//    console.error("Error")
// } else {
//    const tipPercent = 0.1;
//    let tip = iBill*tipPercent;
//    console.log("For bill of $" + iBill + " the tip should be $" + tip);
// }


let billTotals = [50,150,20,500];
let tips = [];

for(let bill of billTotals) {
    if(bill > 75) {
        tips.push(bill*.1);
    } else if(bill < 30) {
        tips.push(bill*.3);
    } else {
        tips.push(bill*.2);
    }
}

for (let i=0; i<billTotals.length; i++) {
    console.log(`Bill=$${billTotals[i]} Tip=$${tips[i]}`);
}