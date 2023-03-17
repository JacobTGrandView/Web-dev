let bill = prompt("Enter your bill total");
let iBill = Number(bill);

if(isNaN(iBill)) {
    console.error("Error")
} else {
    const tipPercent = 0.1;
    let tip = iBill*tipPercent;
    console.log("For bill of $" + iBill + " the tip should be $" + tip);
}