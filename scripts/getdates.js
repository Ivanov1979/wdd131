const today = new Date();
const yearElement = document.getElementById("currentyear");
yearElement.textContent = today.getFullYear();
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = "Last Modified: " + document.lastModified;
console.log("getdates.js loaded successfully");
