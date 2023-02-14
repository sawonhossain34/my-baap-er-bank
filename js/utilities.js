
function getInputFieldId(inputFieldIdName){
    const inputAmmountNumber =document.getElementById(inputFieldIdName);
    const inputString = inputAmmountNumber.value;
    inputAmmountNumber.value='';
    const ammountNumberInput =parseFloat(inputString);
    return ammountNumberInput;
    
    
    }
    function getElementFieldId(elementFieldIdName){
        const elementAmmountNumber = document.getElementById(elementFieldIdName).innerText;
        const ammountNumberElement = parseFloat(elementAmmountNumber);
        return ammountNumberElement;
    }
    
    function setTotalNumber(idName, value){
    const nameIdName = document.getElementById(idName);
    nameIdName.innerText = value;
    }
    