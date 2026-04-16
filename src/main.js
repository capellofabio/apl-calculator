import './style.css'

const dropdownBtn = document.querySelector('#dropdown-menu');
const navList = document.querySelector('#nav-list');
const nav = document.querySelector('nav');

// Adiciona interatividade para o botao do nav
dropdownBtn.addEventListener('click', () => {
  if (navList.classList.contains('hidden')) {
    navList.classList.remove('hidden');
    navList.classList.add('flex');
    nav.classList.remove('justify-between');
  } else if (navList.classList.contains('flex')) {
    navList.classList.add('hidden');
    navList.classList.remove('flex');
    nav.classList.add('justify-between');
  }
})