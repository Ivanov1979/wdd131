// scripts/review.js

document.addEventListener("DOMContentLoaded", () => {
  const key = "reviewCount";

  const currentCount = Number(localStorage.getItem(key)) || 0;
  const newCount = currentCount + 1;

  localStorage.setItem(key, String(newCount));

  const countSpan = document.querySelector("#reviewCount");
  if (countSpan) {
    countSpan.textContent = newCount;
  }
});
