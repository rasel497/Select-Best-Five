// using common function 
function getInputValueById(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputStringValue = inputValue.value;
    if (isNaN(inputStringValue) || inputStringValue === "") {
        alert('Please enter a number!')
    }
    else {
        const inputNumber = parseFloat(inputStringValue);
        if (inputNumber < 0) {
            alert("You can't take any negative value")
        }
        else {
            return inputNumber;
        }
    }
}
function setElementById(elementid, setValue) {
    const elementField = document.getElementById(elementid);
    elementField.innerText = setValue;
}

