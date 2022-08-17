
document.getElementById(`Deposite-submit-btn`).addEventListener(`click`,function(){
    //new deposite value
    const  deposite = document.getElementById(`deposite-field`);
    const  depositeAmountString = deposite.value;
    const depositeAmount = parseFloat(depositeAmountString);
    deposite.value="";
     
    //deposite counter
    const counter = document.getElementById(`deposite-counter`);
    const depositeCounterString = counter.innerText;
    const depositeCounter = parseFloat(depositeCounterString);

    const totalDeposite = depositeAmount + depositeCounter;
     
    //total deposite er new man k update/rakha hoyece counter er innerText  a
    counter.innerText = totalDeposite; 

    const account = document.getElementById(`Account-blance`);
    const accountBlanceString = account.innerText;
    const AccountBlance = parseFloat(accountBlanceString);

    const currentAccountBlance = AccountBlance + depositeAmount;
 
     
    account.innerText = currentAccountBlance;
    
})