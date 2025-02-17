
// Select all slides and navigation buttons
const slides = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('.nav-button');

// Function to change the active slide
function goToSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  navButtons.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
}

// Attach click events to each navigation button
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const index = parseInt(btn.getAttribute('data-index'), 10);
    goToSlide(index);
  });
});

