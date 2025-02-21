
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


    // Get references to the overlay elements
    const overlayBefore = document.getElementById('overlay-before');
    const overlayAfter  = document.getElementById('overlay-after');

    // When the "Before" overlay is clicked, slide it off to the left
    overlayBefore.addEventListener('click', () => {
      overlayBefore.classList.add('slide-out-left');
      overlayBefore.addEventListener('transitionend', () => {
        overlayBefore.style.display = 'none';
      }, { once: true });
    });

    // When the "After" overlay is clicked, slide it off to the right
    overlayAfter.addEventListener('click', () => {
      overlayAfter.classList.add('slide-out-right');
      overlayAfter.addEventListener('transitionend', () => {
        overlayAfter.style.display = 'none';
      }, { once: true });
    });

    