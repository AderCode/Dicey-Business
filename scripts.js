let dieOnScreen = [];
let dieCreated = 0;
let container = $("#die-container");
let total = 0;

class Die {
  constructor(value) {
    this.value = value;
    this.id = dieCreated;
    this.div = $(`<div></div>`);
    this.div.attr("class", "die");
    this.div.attr("id", this.id);
    this.p = $(`<p></p>`);
    this.div.append(this.dieFace());
    container.append(this.div);
    // this.p.text('&#9856;');
    this.div.click(() => {
      this.roll();
    });
    this.div.dblclick(() => {
      $(`#${this.id}`).remove();
      let index = dieOnScreen.findIndex(item => item.id === this.id)
      console.log(index)
    dieOnScreen.splice(index, 1);
    });
  }

  roll() {
    this.newValue = getRandomVal(1, 7);
    this.value = this.newValue;
    this.div.empty().append(this.dieFace());
    console.log(this);
  }

    dieFace(unicode) {
        if (this.value === 1) {
            unicode = '&#9856;';
            return unicode;
        } else if (this.value === 2) {
            unicode = '&#9857;';
            return unicode;
        } else if (this.value === 3) {
            unicode = '&#9858;';
            return unicode;
        } else if (this.value === 4) {
            unicode = '&#9859;';
            return unicode;
        } else if (this.value === 5) {
            unicode = '&#9860;';
            return unicode;
        } else if (this.value === 6) {
            unicode = '&#9861;';
            return unicode;
        }
    }
}

let addBtn = $("#add-die");
let rollBtn = $("#roll-die");
let sumBtn = $(`#on-screen-sum`);

addBtn.click(addDice);
rollBtn.click(rollDice);
sumBtn.click(addRolls);

function addDice() {
  let firstVal = getRandomVal(1, 7);
  let sixDie = new Die(firstVal);
  dieOnScreen.push(sixDie);
  dieCreated++
}

function rollDice() {
  for (i = 0; i < dieOnScreen.length; i++) {
    dieOnScreen[i].roll();
  }
}

function addRolls() {
  if ((total === 0)) {
    for (i = 0; i < dieOnScreen.length; i++) {
      total += dieOnScreen[i].value;
    }
    alert(total)
    setTimeout(totalReset, 0300);
    
  }
}

function getRandomVal(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function totalReset() {
    total = 0; 
}
    