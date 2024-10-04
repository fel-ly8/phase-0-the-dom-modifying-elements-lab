// Write your code here!
// Step 1: Remove the existing DOM node 'main#main'
const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.remove();
}

// Step 2: Create a new <h1> element
const newHeader = document.createElement('h1');

// Step 3: Set the ID of the new header
newHeader.id = 'victory';

// Step 4: Set the text content of the new header
const yourName = "John Doe"; // Replace with your actual name
newHeader.textContent = `${yourName} is the champion`;

// Append the new header to the body or another container element
document.body.appendChild(newHeader);
