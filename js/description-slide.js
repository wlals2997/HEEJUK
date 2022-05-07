const SCROLL_CLASS = 'scroll';

const description = document.querySelectorAll('.decription__column');
const main = document.querySelector('#main');
const mainHeight = main.getBoundingClientRect().height;
//getBoundingClientRect().top은 페이지 가장 위부터 그 엘리먼트의 top까지의 크기를 말합니다.

//const description1 = document.querySelector('.decription__column:first-child');
//const description2 = document.querySelector('.decription__column:nth-child(2)');
//const description3 = document.querySelector('.decription__column:last-child');
document.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  //scroll y는 내려갈수록 커집니다.
  for (var i = 0; i < description.length; i++) {
    if (mainHeight < currentScroll) {
      description[i].classList.add(SCROLL_CLASS);
    }
  }
});
