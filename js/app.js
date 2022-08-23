
// card button function section
function getName(event) {
    const button = event;
    button.setAttribute("disabled", '');
    const name = event.parentElement.children[0].children[0].innerText;
    const selectdePlayerList = document.getElementById("selected-player-list");
    const li = document.createElement('li');
    li.innerText = name;
    const selectedPlayer = selectdePlayerList.children.length + 1;
    if (selectedPlayer <= 5) {
        selectdePlayerList.appendChild(li)
    }
    else {
        alert("You can't select more then 5 players");
    }
}



let totalPlayerExpenses = 0;

// calculate btn function 
document.getElementById("calculate-btn").addEventListener('click', function () {
    const selectedPlayer = document.getElementById('selected-player-list').childNodes.length;
    const perPlayerExpenses = getInputValueById('per-player-expenses');
    totalPlayerExpenses = selectedPlayer * perPlayerExpenses;
    setElementById('total-player-expenses', totalPlayerExpenses);

})

// calculate total btn function
document.getElementById("calculate-total-btn").addEventListener('click', function () {
    const managerExpenses = getInputValueById('manager-expenses');
    const coachExpenses = getInputValueById('coach-expenses');
    const total = totalPlayerExpenses + managerExpenses + coachExpenses;
    setElementById('total-expenses', total)
})