// function inputField(id){
//     const inputId = document.getElementById(id);
//     const getInput= inputId.value;
//     inputId.value = "";
//     return getInput;

// }
// function valueAdd(value,inputValue ,isAdd){
//     const valueText = document.getElementById(value);
//     const amountValue = valueText.innerText;
//     if(isAdd==true){
//         valueText.innerText= parseFloat(amountValue)+ parseFloat(inputValue);
//     }
//     else{
//         valueText.innerText= parseFloat(amountValue)-parseFloat(inputValue);
//     }
//     return  valueText.innerText;
// }
// document.getElementById("deposit-button").addEventListener("click",function(){
//     const depositInput = inputField("deposit-id");
//     const depositValue = valueAdd("deposit-value", depositInput,true);
//     const balanceValue = valueAdd("balance-value",depositInput,true);
// })
// document.getElementById("withdraw-button").addEventListener("click",function(){
//     const withdrawInput = inputField("withdraw-id");
//     const withdrawValue = valueAdd("withdraw-value",withdrawInput,true);
//     const newBalance = valueAdd("balance-value",withdrawInput,false);
// })
let depositInput = document.getElementById("deposit-input");
let depositValue = document.getElementById("deposit-value");
let balanceValue = document.getElementById("balance-value");
let withdrawInput = document.getElementById("withdraw-input");
let withdrawValue = document.getElementById("withdraw-value");
function addmoney(currentMoney,newMoney){
    let result = parseFloat(currentMoney)+parseFloat(newMoney); 
    return result;
}
function reduceMoney(previousMoney,recentMoney){
    let wresult = parseFloat(previousMoney) - parseFloat(recentMoney); 
    return wresult;
}
function deposit() {
    if(depositInput.value>0){
        let depositTotal = addmoney(depositValue.innerText,depositInput.value);
        depositValue.innerText = depositTotal;
        let balanceTotal = addmoney(balanceValue.innerText,depositInput.value);
        balanceValue.innerText = balanceTotal;
        depositInput.value ="";  
    }
    else{
        alert("Give a valid number");
    }
    
}
function withdraw(){
    if(parseFloat(withdrawInput.value)<=parseFloat(balanceValue.innerText)){
        let withdrawTotal = addmoney(withdrawValue.innerText,withdrawInput.value);
        withdrawValue.innerText = withdrawTotal;
        let wbalanceTotal = reduceMoney(balanceValue.innerText,withdrawInput.value );
        balanceValue.innerText = wbalanceTotal;
    }
    else{
        withdrawInput.value ="";
        alert("sorry!!You don't have sufficient balance")
    }
}