// =============================================
// Part 1: Variables and Conditionals
// =============================================

// Variable declarations
const userAgeInput = document.getElementById('userAge');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

// Function to check age status
function checkAgeStatus() {
    // Get the value from input
    const age = parseInt(userAgeInput.value);
    
    // Validate input
    if (isNaN(age) || age <= 0) {
        ageResult.innerHTML = '<p class="error">Please enter a valid age!</p>';
        return;
    }
    
    // Conditional logic
    let message;
    if (age < 13) {
        message = `You are ${age} years old - You are a child.`;
    } else if (age >= 13 && age <= 19) {
        message = `You are ${age} years old - You are a teenager.`;
    } else if (age >= 20 && age <= 64) {
        message = `You are ${age} years old - You are an adult.`;
    } else {
        message = `You are ${age} years old - You are a senior.`;
    }
    
    // Display result
    ageResult.innerHTML = `<p>${message}</p>`;
}

// Event listener for button click
checkAgeBtn.addEventListener('click', checkAgeStatus);

// =============================================
// Part 2: Functions
// =============================================

// Function declarations
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateBtn = document.getElementById('calculateBtn');
const functionResult = document.getElementById('functionResult');

// Function to calculate sum
function calculateSum(a, b) {
    return a + b;
}

// Function to calculate product
function calculateProduct(a, b) {
    return a * b;
}

// Function to format result
function formatCalculationResult(a, b, sum, product) {
    return `
        <p>Numbers: ${a} and ${b}</p>
        <p>Sum: ${a} + ${b} = ${sum}</p>
        <p>Product: ${a} × ${b} = ${product}</p>
    `;
}

// Main function to handle calculation
function performCalculations() {
    const a = parseFloat(num1Input.value);
    const b = parseFloat(num2Input.value);
    
    // Validate inputs
    if (isNaN(a) || isNaN(b)) {
        functionResult.innerHTML = '<p class="error">Please enter valid numbers!</p>';
        return;
    }
    
    // Call functions
    const sum = calculateSum(a, b);
    const product = calculateProduct(a, b);
    
    // Format and display result
    const result = formatCalculationResult(a, b, sum, product);
    functionResult.innerHTML = result;
}

// Event listener
calculateBtn.addEventListener('click', performCalculations);

// =============================================
// Part 3: Loops
// =============================================

const loopNumberInput = document.getElementById('loopNumber');
const runLoopsBtn = document.getElementById('runLoopsBtn');
const loopResult = document.getElementById('loopResult');

// Function to demonstrate different loops
function runLoops() {
    const number = parseInt(loopNumberInput.value);
    
    // Validate input
    if (isNaN(number) || number < 1 || number > 10) {
        loopResult.innerHTML = '<p class="error">Please enter a number between 1 and 10!</p>';
        return;
    }
    
    let output = '<h3>Loop Results:</h3>';
    
    // For loop
    output += '<p><strong>For Loop (Countdown):</strong><br>';
    for (let i = number; i >= 1; i--) {
        output += `${i} `;
    }
    output += '</p>';
    
    // While loop
    output += '<p><strong>While Loop (Multiplication Table):</strong><br>';
    let count = 1;
    while (count <= 10) {
        output += `${number} × ${count} = ${number * count}<br>`;
        count++;
    }
    output += '</p>';
    
    // For...of loop with array
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    output += '<p><strong>For...of Loop (Fruits Array):</strong><br>';
    for (const fruit of fruits) {
        output += `${fruit} `;
    }
    output += '</p>';
    
    // Display results
    loopResult.innerHTML = output;
}

// Event listener
runLoopsBtn.addEventListener('click', runLoops);

// =============================================
// Part 4: DOM Manipulation
// =============================================

// DOM element references
const changeTextBtn = document.getElementById('changeTextBtn');
const toggleColorBtn = document.getElementById('toggleColorBtn');
const addItemBtn = document.getElementById('addItemBtn');
const removeItemBtn = document.getElementById('removeItemBtn');
const textToChange = document.getElementById('textToChange');
const itemList = document.getElementById('itemList');

// Counter for text changes
let textChangeCount = 0;

// Function to change text
function changeText() {
    textChangeCount++;
    const messages = [
        "You've changed this text!",
        "Text changed again!",
        "Keep clicking to see more changes!",
        "JavaScript makes this interactive!",
        "DOM manipulation is powerful!"
    ];
    
    textToChange.textContent = messages[textChangeCount % messages.length];
}

// Function to toggle background color
function toggleColor() {
    const currentColor = document.body.style.backgroundColor;
    
    if (currentColor === 'lightcyan') {
        document.body.style.backgroundColor = '#f5f7fa';
        toggleColorBtn.textContent = 'Toggle Background Color';
    } else {
        document.body.style.backgroundColor = 'lightcyan';
        toggleColorBtn.textContent = 'Reset Background Color';
    }
}

// Function to add list item
function addListItem() {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
}

// Function to remove list item
function removeListItem() {
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastElementChild);
    }
}

// Event listeners for DOM manipulation
changeTextBtn.addEventListener('click', changeText);
toggleColorBtn.addEventListener('click', toggleColor);
addItemBtn.addEventListener('click', addListItem);
removeItemBtn.addEventListener('click', removeListItem);

// Additional interactive feature: Change section header colors on click
document.querySelectorAll('h2').forEach(header => {
    header.addEventListener('click', function() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        this.style.color = randomColor;
    });
});

// Add some initial styling with JavaScript
document.querySelectorAll('section').forEach((section, index) => {
    section.style.borderLeft = `5px solid #${((1 << 24) * Math.random() | 0).toString(16)}`;
});
