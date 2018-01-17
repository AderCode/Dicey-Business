let addBtn = document.getElementById('add-die');
let rollBtn = document.getElementById('roll-die');

addBtn.addEventListener('click', addDice);
rollBtn.addEventListener('click', rollDice);


function addDice() {
    alert(`The die has been added`)
};

function rollDice() {
    alert(`The die have been cast`);
};