document.getElementById("login-button").addEventListener("click",function(){
    const getEmail = document.getElementById("email-input");
    const getPass = document.getElementById("pass-input");
    if(getEmail.value == 'mohuya@gmail.com' && getPass.value== 'mohu'){
        window.location.href = "banking.html";
    }
    else{
        alert("please give a valid username & password");
    }
})