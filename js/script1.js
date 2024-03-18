// * Define the Smoothie class
class Smoothie {
    constructor(size, includeMilk, fruitChoice) {
        this.size = size;
        this.includeMilk = includeMilk;
        this.fruitChoice = fruitChoice;
    }

    smoothieDesc() {
        output.innerHTML = `Your smoothie will be:
        <ul>
            <li> Size: ${this.size} </li>
            <li> Milk: ${this.includeMilk} </li>
            <li> Fruit: ${this.fruitChoice} </li>
        </ul>`;
    }
}

// * Function to handle form submission
function orderSmoothie(event) {
    event.preventDefault();
    // Grab the current values of the form elements
    let size = document.getElementById("size").value;
    let includeMilk = document.getElementById("includeMilk").value;
    let fruitChoice = document.getElementById("fruitChoice").value;

    // * Check if any required field is empty
        if (size === "" || includeMilk === "" || fruitChoice === "") {
            // alert("Please select options for all fields.");
            output.textContent = `Please select options for all fields.`;
        } else {
            // * If all required fields are filled out, proceed with the review
            // * Create a Smoothie object with the user's selections
            let mySmoothie = new Smoothie(size, includeMilk, fruitChoice);

            // * Call the smoothieDesc method to display the smoothie description
            mySmoothie.smoothieDesc();
                }
}

// * Add event listener to the Order button to trigger the orderSmoothie function
document.getElementById("reviewButton").addEventListener("click", orderSmoothie);

// *
const orderConfirm = document.getElementById("orderConfirm");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
orderConfirm.textContent = `Thank you for choosing us, ${firstName} ${lastName}`;
