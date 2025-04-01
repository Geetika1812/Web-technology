// Function to show the selected section and hide others
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}

// Function to navigate to the sorting result page
function navigateToSortResult() {
    let input = document.getElementById("userInput").value;

    // Convert input string to an array of numbers
    let numbers = input.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    // Check if input is valid
    if (numbers.length === 0) {
        alert("Please enter a valid list of numbers.");
        return;
    }

    // Reverse Order Sorting Algorithm (Descending Order)
    numbers.sort((a, b) => b - a);

    // Display sorted numbers
    document.getElementById("result").textContent = "Sorted in Reverse Order: " + numbers.join(", ");

    // Show result section
    showSection('sortResult');
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();
    alert("Successfully submitted!");
    document.querySelector("form").reset();
}
