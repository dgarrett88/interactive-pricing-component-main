// Get DOM elements
const toggleBox = document.querySelector(".toggle-checkbox");
const customRange = document.querySelector(".slider");
const customValueLabel = document.getElementById("customValueLabel");
const customPrice = document.querySelector(".price-tag");

// Define values for labels and prices
const valueLabels = ["10K", "50K", "100K", "500K", "1M"];
const price = [8, 12, 16, 24, 36];

// Function to update price and labels
const updatePrice = () => {
    const value = parseInt(customRange.value);
    customValueLabel.textContent = valueLabels[value - 1];
    
    // Apply discount if toggle is on
    if (isDiscountApplied) {
        customPrice.textContent = price[value - 1] * 0.75;
    } else {
        customPrice.textContent = price[value - 1];
    }
};

// Track whether the discount is applied
let isDiscountApplied = false;

// Event listener for toggle box click
toggleBox.addEventListener('click', () => {
    isDiscountApplied = !isDiscountApplied;
    updatePrice();
});

// Event listener for range input change
customRange.addEventListener("input", updatePrice);