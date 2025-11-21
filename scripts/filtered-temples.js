const temples = [
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    dedicatedYear: 2005,
    area: 11500,
    imageUrl: "images/aba-nigeria-temple.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    dedicatedYear: 2004,
    area: 17500,
    imageUrl: "images/accra-ghana-temple.jpg"
  },
  {
    templeName: "Bern Switzerland Temple",
    location: "Zollikofen, Switzerland",
    dedicated: "1955-09-11",
    dedicatedYear: 1955,
    area: 35546,
    imageUrl: "images/bern-switzerland-temple.jpg"
  },
  {
    templeName: "Campinas Brazil Temple",
    location: "Campinas, Brazil",
    dedicated: "2002-05-17",
    dedicatedYear: 2002,
    area: 48100,
    imageUrl: "images/campinas-brazil-temple.jpg"
  },
  {
    templeName: "Cardston Alberta Temple",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923-08-26",
    dedicatedYear: 1923,
    area: 81500,
    imageUrl: "images/cardston-alberta-temple.jpg"
  },
  {
    templeName: "Denver Colorado Temple",
    location: "Denver, Colorado, USA",
    dedicated: "1986-10-24",
    dedicatedYear: 1986,
    area: 29200,
    imageUrl: "images/denver-colorado-temple.jpg"
  },
  {
    templeName: "Freiberg Germany Temple",
    location: "Freiberg, Germany",
    dedicated: "1985-06-29",
    dedicatedYear: 1985,
    area: 21500,
    imageUrl: "images/freiberg-germany-temple.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, USA",
    dedicated: "1919-11-27",
    dedicatedYear: 1919,
    area: 42300,
    imageUrl: "images/laie-hawaii-temple.jpg"
  },
  {
    templeName: "Lima Peru Temple",
    location: "Lima, Peru",
    dedicated: "1986-01-10",
    dedicatedYear: 1986,
    area: 96000,
    imageUrl: "images/lima-peru-temple.jpg"
  },
  {
    templeName: "Antofagasta Chile Temple",
    location: "Antofagasta, Chile",
    dedicated: "2024-12-15",
    dedicatedYear: 2024,
    area: 21000,
    imageUrl: "images/antofagasta-chile-temple.jpg"
  },
  {
    templeName: "Ciudad Juárez Mexico Temple",
    location: "Ciudad Juárez, Mexico",
    dedicated: "2000-02-26",
    dedicatedYear: 2000,
    area: 10900,
    imageUrl: "images/ciudad-juarez-mexico-temple.jpg"
  },
  {
    templeName: "Concepción Chile Temple",
    location: "Concepción, Chile",
    dedicated: "2018-10-28",
    dedicatedYear: 2018,
    area: 23095,
    imageUrl: "images/concepcion-chile-temple.jpg"
  }
];

const container = document.querySelector("#temple-cards");

function renderTemples(list) {
  container.innerHTML = "";
  const fragment = document.createDocumentFragment();

  list.forEach((temple) => {
    const card = document.createElement("article");
    card.classList.add("temple-card");
    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" decoding="async">
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;
    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

const oldTemples = temples.filter(t => t.dedicatedYear < 1900);
const newTemples = temples.filter(t => t.dedicatedYear > 2000);
const largeTemples = temples.filter(t => t.area > 90000);
const smallTemples = temples.filter(t => t.area < 10000);

renderTemples(temples);

document.querySelector("#home").addEventListener("click", () => renderTemples(temples));
document.querySelector("#old").addEventListener("click", () => renderTemples(oldTemples));
document.querySelector("#new").addEventListener("click", () => renderTemples(newTemples));
document.querySelector("#large").addEventListener("click", () => renderTemples(largeTemples));
document.querySelector("#small").addEventListener("click", () => renderTemples(smallTemples));

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
