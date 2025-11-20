// ========================
// Footer: year and last modified
// ========================

// Current year
const yearSpan = document.querySelector('#year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Document last modified
const lastModifiedParagraph = document.querySelector('#lastModified');
if (lastModifiedParagraph) {
  lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
}

// ========================
// Image fade-from-black on load
// ========================

// All images that should fade in
const lazyImages = document.querySelectorAll('.lazy-img');

lazyImages.forEach((img) => {
  // If the image is already loaded (cache / fast connection)
  if (img.complete && img.naturalHeight !== 0) {
    img.classList.add('loaded');
  } else {
    // When it finishes loading, add the class that triggers the CSS animation
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
  }
});
