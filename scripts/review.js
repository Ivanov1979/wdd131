// scripts/review.js

document.addEventListener("DOMContentLoaded", () => {
  // localStorage counter
  const key = "reviewCount";
  let count = Number(localStorage.getItem(key)) || 0;
  count += 1;
  localStorage.setItem(key, count);

  const countSpan = document.querySelector("#reviewCount");
  if (countSpan) {
    countSpan.textContent = count;
  }

  // Footer year
  const yearSpan = document.querySelector("#year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
