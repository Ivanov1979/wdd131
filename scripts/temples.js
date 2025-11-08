const btn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const year = document.getElementById('year');
const lastMod = document.getElementById('last-mod');

if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if (lastMod) {
  lastMod.textContent = document.lastModified;
}
