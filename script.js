document.addEventListener("DOMContentLoaded", function () {
    const customRange = document.querySelector(".slider");
    const customValueLabel = document.getElementById("customValueLabel");
    const customPrice = document.querySelector(".price-tag");
  
    console.log("customRange:", customRange);
    console.log("customValueLabel:", customValueLabel);
  
    const valueLabels = ["10K", "50K", "100K", "500K", "1M"];

    const price = [8, 12, 16, 24, 36 ]
  
    customRange.addEventListener("input", () => {
      const value = parseInt(customRange.value);
      console.log("Value:", value); // Check if the value is calculated correctly
      customValueLabel.textContent = valueLabels[value - 1];
      customPrice.textContent = price[value - 1];
    });
  });
  