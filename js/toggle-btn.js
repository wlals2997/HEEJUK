const toggleBtn = document.querySelector('.toggle-btn');
const navMenu = document.querySelector('.nav__menu');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

