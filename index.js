const Btn = document.getElementById("CalBtn");
const BillAmtEl = document.getElementById("BillAmt");
const TipAmtEl = document.getElementById("TipAmt");
const resultEl = document.getElementById("Lable")

Btn.addEventListener("click", calculateTotal);

function calculateTotal(){
    const BValue = BillAmtEl.value;
    const TValue = TipAmtEl.value;
    const TotalDisp = BValue * (1 + TValue/100); //BValue + ((TValue * BValue) / 100)
    // console.log(BValue);
    // console.log(TValue);
    //console.log(TotalDisp);
    resultEl.innerText = `Total: Rs. ${TotalDisp}`;
}