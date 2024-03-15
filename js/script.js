// * grab output id from html
const output = document.querySelector('#output');
const size = document.
// * create class for Smoothie
class Smoothie {
    size;
    includeMilk;
    fruitChoice;
    constructor(size, includeMilk, fruitChoice) {
        this.size = size;
        this.includeMilk = includeMilk;
        this.fruitChoice = fruitChoice;
    }
}

// * smoothie example for the class Smoothie created above
let milansSmoothie = new Smoothie ('small', false, 'mango');