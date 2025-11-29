document.addEventListener("DOMContentLoaded", () => {
  const key = "reviewCount";

  let count = Number(localStorage.getItem(key)) || 0;
  count++;

  localStorage.setItem(key, count);

  document.querySelector("#reviewCount").textContent = count;
});
