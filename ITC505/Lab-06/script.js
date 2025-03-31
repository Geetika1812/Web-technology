function reverseSortArray() {
    let input = document.getElementById("userInput").value;
    
    // Convert input string to an array of numbers
    let numbers = input.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    
    // Check if input is valid
    if (numbers.length === 0) {
        document.getElementById("result").textContent = "Please enter a valid list of numbers.";
        return;
    }

    // Reverse Order Sorting Algorithm (Descending Order)
    numbers.sort((a, b) => b - a);

    // Display sorted numbers
    document.getElementById("result").textContent = "Sorted in Reverse Order: " + numbers.join(", ");
}

document.getElementById('lastModified').textContent = document.lastModified;
