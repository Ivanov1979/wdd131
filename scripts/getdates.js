const today = new Date();
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = today.getFullYear();
}
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
  lastModifiedElement.textContent = "Last Modified: " + document.lastModified;
}
console.log("getdates.js loaded successfully");
