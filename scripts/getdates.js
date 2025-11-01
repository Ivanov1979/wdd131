const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

const lm = document.getElementById("lastModified");
if (lm) {
  const d = new Date(document.lastModified);
  const fmt = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" };
  lm.textContent = d.toLocaleString(undefined, fmt).replace(",", "");
}
