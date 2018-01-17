let dieOnScreen = [];

let container = $('#die-container')

class Die {
    constructor (value) {
        this.value = value
        this.div = $(`<div></div>`);
        this.div.attr('class','die');
        this.div.attr('id', dieOnScreen.length + 1)
        this.p = $(`<p></p>`);
        this.div.append(this.p)
        container.append(this.div);
        this.p.text(value)
        this.div.click( () => {
            this.roll()
        });


    }

    roll() {
        this.newValue = getRandomVal(1, 7);
        this.value = this.newValue; 
        this.p.text(this.newValue);    
        console.log(this)   
    }
}

let addBtn = document.getElementById('add-die');
let rollBtn = document.getElementById('roll-die');

addBtn.addEventListener('click', addDice);
rollBtn.addEventListener('click', rollDice);


function addDice() {
    let firstVal = getRandomVal(1, 7)
    let sixDie = new Die(firstVal);
    dieOnScreen.push(sixDie)
};

function rollDice() {
    for (i = 0; i < dieOnScreen.length; i++) {
        dieOnScreen[i].roll()
}
};

function getRandomVal(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}