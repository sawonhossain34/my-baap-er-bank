
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawInput = getInputFieldId('withdraw-field');
    
    const previousWithdrawField = getElementFieldId('withdraw-total');
    
    const newWithdrawField = previousWithdrawField + newWithdrawInput;
    setTotalNumber('withdraw-total',newWithdrawField);

    // part withdraw to total balance
    const previousBalanceTotal = getElementFieldId('balance-total');

    const newBalanceTotal = previousBalanceTotal - newWithdrawInput;
    setTotalNumber('balance-total',newBalanceTotal);

})

