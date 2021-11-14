const SHOWING_CLASS = 'showing';
const firstSlide = document.querySelector('.home__image-left');

function onSlide() {
   const currentSlide = document.querySelector(`.${SHOWING_CLASS}`); //showing class이다.

if (currentSlide) {
  currentSlide.classList.remove(SHOWING_CLASS);
  const nextSlide = currentSlide.nextElementSibling;

  if (nextSlide) {
    nextSlide.classList.add(SHOWING_CLASS);
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }

} else {
  firstSlide.classList.add(SHOWING_CLASS);
}
}

onSlide();
setInterval(onSlide, 3000);


