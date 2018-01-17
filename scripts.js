let addBtn = document.getElementById('add-die');
let rollBtn = document.getElementById('roll-die');

addBtn.addEventListener('click', addDice);
rollBtn.addEventListener('click', rollDice);


function addDice() {
    alert(`A value of ${getRandomVal(0, 100)}`)
};

function rollDice() {
    alert(`The die have been cast`);
};

function getRandomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}