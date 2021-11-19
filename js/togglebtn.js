const navbarMenu = document.querySelector('.navbar__menu');
const toggleBtn=document.querySelector('.navbar__toggle-btn');

function handleToggleBtn(){
   navbarMenu.classList.toggle('open');
}
toggleBtn.addEventListener('click',handleToggleBtn);
