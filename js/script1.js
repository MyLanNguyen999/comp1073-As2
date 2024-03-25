// * grab output id from html
const output = document.querySelector('#output');
// * grab the aside element from html
const aside = document.querySelector("aside");

// * Define the Smoothie class
class Smoothie {
    constructor(firstName, lastName, size, includeMilk, fruitChoice) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.size = size;
        this.includeMilk = includeMilk;
        this.fruitChoice = fruitChoice;
    }

    smoothieDesc() {
        output.innerHTML = `Your smoothie will be:
        <ul>
            <li> Order Name: ${this.firstName} ${this.lastName} </li>
            <li> Size: ${this.size} </li>
            <li> Milk: ${this.includeMilk} </li>
            <li> Fruit: ${this.fruitChoice} </li>
        </ul>`;
    }
}

// * create element for image
let image = document.createElement("img");

// * Function to handle form submission
function orderSmoothie(event) {
    event.preventDefault();
    // * Grab the current values of the form elements
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value; 
    let size = document.getElementById("size").value;
    let includeMilk = document.getElementById("includeMilk").value;
    let fruitChoice = document.getElementById("fruitChoice").value;

    // * Check if any required field is empty
        if (firstName === "" || 
            lastName === "" || 
            size === "" || 
            includeMilk === "" || 
            fruitChoice === "") {

            // * alert("Please select options for all fields.");
            output.textContent = `Please select options for all fields.`;

        } else {

            // * If all required fields are filled out, proceed with the review
            // * Create a Smoothie object with the user's selections
            let mySmoothie = new Smoothie(firstName, lastName, size, includeMilk, fruitChoice);

            // * check the fruit choice and show smoothie image accordingly
            if ( fruitChoice == "Mango") {
                image.setAttribute("src", "images/mango.png");
            } 
            else if ( fruitChoice == "Strawberry") {
                image.setAttribute("src", "images/strawberry.png");
            }
            else if ( fruitChoice == "Orange") {
                image.setAttribute("src", "images/orange.png");
            } 
            else if ( fruitChoice == "Vanilla") {
                image.setAttribute("src", "images/vanilla.png");
            } 
            else if ( fruitChoice == "Chocolate") {
                image.setAttribute("src", "images/chocolate.png");
            }  

            // * append the image to the aside element
                aside.appendChild(image);

            // * Call the smoothieDesc method to display the smoothie description
            mySmoothie.smoothieDesc();
                }
}

// * Add event listener to the Order button to trigger the orderSmoothie function
document.getElementById("reviewButton").addEventListener("click", orderSmoothie);

// * Grab the <aside> element from html for showing the image
// const smoothieImage = document.querySelector("aside");
