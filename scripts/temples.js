document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-mod").textContent = document.lastModified;

const btn = document.getElementById("hamburger");
const list = document.getElementById("primary-nav");

if (btn && list) {
  btn.addEventListener("click", () => {
    const isOpen = list.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
    btn.textContent = isOpen ? "✕" : "☰";
  });
}
