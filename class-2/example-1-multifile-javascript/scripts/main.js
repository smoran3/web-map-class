import { get_current_datetime } from "./my_function.js";

let today = get_current_datetime();

// Update the <h1> tag with today's date and time
const myHeading = document.querySelector("h1");
myHeading.textContent = "The current date is " + today;
