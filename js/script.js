// * grab output id from html
const output = document.querySelector('#output');
let size = document.getElementById("size").value;
let includeMilk = document.getElementById("includeMilk").value;
let fruitChoice = document.getElementById("fruitChoice").value;


// * create function getValue to grab inpur when user click button
// function getValue(){
//     // let size = document.getElementById("size").value;
//     // let fruitChoice = document.getElementById("fruitChoice").value;
//     console.log("Your fruit choice is:", fruitChoice, "and the size:", size);
    
// }

// * create class for Smoothie
class Smoothie {
    size;
    includeMilk;
    fruitChoice;
    constructor(size, includeMilk, fruitChoice) {
        this.size = size;
        this.includeMilk = includeMilk;
        this.fruitChoice = fruitChoice;
    };
    smoothieDesc(){
        // alert (`Your fruit choice is ${this.fruitChoice} with the size of ${this.size}.`);
        output.innerHTML = `Your smoothie will be:
        <ul>
            <li> Size: ${this.size} </li>
            <li> Milk: ${this.includeMilk ? "Include" : "Not include"} </li>
            <li> Fruit: ${this.fruitChoice} </li>
        </ul>`;
    }
}


// * smoothie example for the class Smoothie created above
// let milansSmoothie = new Smoothie ('large', false, 'strawberry');
// milansSmoothie.smoothieDesc();
// let orderSmoothie = new Smoothie (size, includeMilk, fruitChoice);
// orderSmoothie.smoothieDesc();

// Instantiate a Smoothie object with the input values
let mySmoothie = new Smoothie (size, includeMilk, fruitChoice);
// Call the smoothieDesc method to display the smoothie description
mySmoothie.smoothieDesc();
