 document.getElementById(`withdraw-submit-btn`).addEventListener(`click`,function(){
    const withdraw = document.getElementById(`withdraw-filed`);
    const withdrawAmountString = withdraw.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    withdraw.value = "";
    
     

    const   withdrawCounter = document.getElementById(`withdraw-counter`);
    const withdrawCounterString =  withdrawCounter.innerText;
    const withdrawCounterAmount = parseFloat(withdrawCounterString);
    console.log(withdrawCounterAmount);

    const totalWithdraw = withdrawCounterAmount + withdrawAmount;

    withdrawCounter.innerText = totalWithdraw;


    const account = document.getElementById(`Account-blance`);
    const accountBlanceString = account.innerText;
    const AccountBlance = parseFloat(accountBlanceString);
    console.log(AccountBlance);

    const FinalwithDraw = AccountBlance - withdrawAmount

    account.innerText = FinalwithDraw;
 })