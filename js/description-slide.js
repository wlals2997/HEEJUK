const SCROLL_CLASS = 'scroll';

const description = document.querySelectorAll('.decription__column');
const main = document.querySelector('#main');
const mainHeight = main.getBoundingClientRect().height;
const description4 = document.querySelector('#description');

//const description1 = document.querySelector('.decription__column:first-child');
//const description2 = document.querySelector('.decription__column:nth-child(2)');
//const description3 = document.querySelector('.decription__column:last-child');
document.addEventListener('scroll',()=>{
  const currentScroll =window.scrollY;
  for(var i=0; i<description.length;i++){
    if (mainHeight < currentScroll) {
      description[i].classList.add(SCROLL_CLASS);
 
    }
 }
})

