//// Carousel
const slides = document.querySelectorAll('.showcase__carousel__slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (
    current.nextElementSibling.classList.contains('showcase__carousel__slide')
  ) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

//// Search Filter
const citiesSearch = document.querySelector('#search');
const cityCards = document.querySelectorAll('.cities__row__card');

citiesSearch.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();

  Array.from(cityCards).forEach((cityCard) => {
    const cityHeading = cityCard.childNodes[3].childNodes[1].innerText.toLowerCase();

    if (cityHeading.indexOf(term) === -1) {
      cityCard.style.display = 'none';
    } else {
      cityCard.style.display = 'block';
    }
  });
});

//// Copyright year
const footerDate = document.querySelector('#footer__date');

window.addEventListener('load', () => {
  const currentDate = new Date();

  footerDate.innerText = currentDate.getFullYear();
});
