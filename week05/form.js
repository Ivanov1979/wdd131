// scripts/form.js

// Product array provided by the assignment
const products = [
  {
    id: "fc-1888",
    name: "Flux Capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "Power Laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "Time Circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "Low Voltage Reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "Warp Equalizer",
    averagerating: 5.0
  }
];

// Populate the Product select using the array
const productSelect = document.querySelector("#product");

if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;       // value = id (per instructions)
    option.textContent = product.name; // display = name
    productSelect.appendChild(option);
  });
}
