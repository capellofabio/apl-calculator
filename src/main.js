import './style.css'

const dropdownBtn = document.querySelector('#dropdown-menu');
const navList = document.querySelector('#nav-list');
const nav = document.querySelector('nav');

const monsterDataBtn = document.querySelector('#include-monster-data');

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

// Adiciona interatividade no SVG do botao de execucao da calculadora
monsterDataBtn.addEventListener('click', () => {
  if (monsterDataBtn.classList.contains('toggle-on')) {
    // Toggle Value
    monsterDataBtn.classList.remove('toggle-on');
    monsterDataBtn.classList.add('toggle-off')

    // Hides toggle-on SVG
    monsterDataBtn.children[1].classList.remove('block');
    monsterDataBtn.children[1].classList.add('hidden');

    // Displays toggle-off SVG
    monsterDataBtn.children[2].classList.add('block');
    monsterDataBtn.children[2].classList.remove('hidden');
  } else if (monsterDataBtn.classList.contains('toggle-off')) {
    // Toggle Value
    monsterDataBtn.classList.remove('toggle-off');
    monsterDataBtn.classList.add('toggle-on')

    // Displays toggle-on SVG
    monsterDataBtn.children[1].classList.remove('hidden');
    monsterDataBtn.children[1].classList.add('block');

    // Hides toggle-off SVG
    monsterDataBtn.children[2].classList.add('hidden');
    monsterDataBtn.children[2].classList.remove('block');
  }
})