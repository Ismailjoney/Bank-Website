//step - 1
//click button and get input value
document.getElementById(`login-submit-btn`).addEventListener(`click`,function(){
    //get email input value
    const email = document.getElementById(`user-email`);
    const userEmail = email.value;
    
    //get password input value
    const password = document.getElementById(`user-password`);
    const userPassword = password.value;
    
    if( userEmail == "mohammadismail.joney@gmail.com" && userPassword == 12345 ){
        window.location.href="amountpage.html";
    }
    else{
        alert("sawyar beta valo kori de password")
    }

 })