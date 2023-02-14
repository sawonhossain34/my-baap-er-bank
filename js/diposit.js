

document.getElementById('btn-diposit').addEventListener('click',function(){
    const newInputFieldResult = getInputFieldId('diposit-field');
    
    const previousElementFieldResult = getElementFieldId('diposit-total');
    
    const newTotalElementDiposit = newInputFieldResult + previousElementFieldResult;
    setTotalNumber("diposit-total",newTotalElementDiposit);
    
    // balance diposit part
    
    const previousBalanceTotal = getElementFieldId('balance-total');
    
    const newBalanceTotal = previousBalanceTotal + newInputFieldResult;
    setTotalNumber('balance-total', newBalanceTotal);
    
    
    
    })
