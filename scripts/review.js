// scripts/review.js

document.addEventListener("DOMContentLoaded", () => {
  // localStorage review counter
  const key = "reviewCount";
  let count = Number(localStorage.getItem(key)) || 0;
  count += 1;
  localStorage.setItem(key, count);

  const countElement = document.getElementById("reviewCount");
  if (countElement) {
    countElement.textContent = count;
  }

  // Set footer year
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
