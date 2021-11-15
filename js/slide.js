const SCROLL_CLASS = 'js-scroll';
const scrollUp = document.querySelectorAll('.scrollup');

console.log(scrollUp);

function imageAnimation() {
  const homeheight = home.getBoundingClientRect().height;
  const windowHeight = window.innerHeight / 1.2;
  for (var i = 0; i < scrollUp.length; i++) {
    if (homeheight < windowHeight) {
      scrollUp[i].classList.add(SCROLL_CLASS);
    }
  }
}

window.addEventListener('scroll', imageAnimation);
// const SCROLL = 'js-scroll';
