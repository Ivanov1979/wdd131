const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModifiedSpan = document.getElementById("lastmodified");
lastModifiedSpan.textContent = document.lastModified;

const tempElement = document.getElementById("temperature");
const windElement = document.getElementById("wind");
const windchillElement = document.getElementById("windchill");

const temperature = parseFloat(tempElement.textContent);
const windSpeed = parseFloat(windElement.textContent);

function calculateWindChill(t, v) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}

if (temperature <= 10 && windSpeed > 4.8) {
  const chill = calculateWindChill(temperature, windSpeed);
  windchillElement.textContent = chill.toFixed(1);
} else {
  windchillElement.textContent = "N/A";
}
