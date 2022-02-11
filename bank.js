function inputField(id){
    const inputId = document.getElementById(id);
    const getInput= inputId.value;
    inputId.value = "";
    return getInput;

}
function valueAdd(value,inputValue ,isAdd){
    const valueText = document.getElementById(value);
    const amountValue = valueText.innerText;
    if(isAdd==true){
        valueText.innerText= parseFloat(amountValue)+ parseFloat(inputValue);
    }
    else{
        valueText.innerText= parseFloat(amountValue)-parseFloat(inputValue);
    }
    return  valueText.innerText;
}
document.getElementById("deposit-button").addEventListener("click",function(){
    const depositInput = inputField("deposit-id");
    const depositValue = valueAdd("deposit-value", depositInput,true);
    const balanceValue = valueAdd("balance-value",depositInput,true);
})
document.getElementById("withdraw-button").addEventListener("click",function(){
    const withdrawInput = inputField("withdraw-id");
    const withdrawValue = valueAdd("withdraw-value",withdrawInput,true);
    const newBalance = valueAdd("balance-value",withdrawInput,false);
})