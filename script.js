// Get DOM elements
const toggleBox = document.querySelector(".toggle-checkbox");
const customRange = document.querySelector(".slider");
const customValueLabel = document.getElementById("customValueLabel");
const desktopPriceTag = document.querySelector(".desktop-row .price-tag");
const mobilePriceTag = document.querySelector(".mobile-row .price-tag");
const discountText = document.querySelector(".discount-text");

// Define values for labels and prices
const valueLabels = ["10K", "50K", "100K", "500K", "1M"];
const price = [8, 12, 16, 24, 36];

// Function to update price and labels
const updatePrice = () => {
    const value = parseInt(customRange.value);
    
    // Apply discount if toggle is on
    let calculatedPrice = isDiscountApplied ? price[value - 1] * 0.75 : price[value - 1];

    customValueLabel.textContent = valueLabels[value - 1];
    desktopPriceTag.textContent = calculatedPrice;
    mobilePriceTag.textContent = calculatedPrice;

    // Calculate the progress based on the range
    const range = customRange.max - customRange.min;
    const progress = ((value - customRange.min) / range) * 100;

    customRange.style.background = `linear-gradient(to right, #a5f3eb ${progress}%, #ccc ${progress}%)`;
};

// Function to update discount text
const updateDiscountText = () => {
    if (window.matchMedia("(max-width: 600px)").matches) {
        discountText.textContent = '-25%';
    } else {
        discountText.textContent = '25% discount';
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

// Event listener for window resize
window.onresize = updateDiscountText;

// Update discount text on page load
updateDiscountText();

// Runs the track gradient on page load
updatePrice();
