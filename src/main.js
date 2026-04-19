import './style.css'

const dropdownBtn = document.querySelector('#dropdown-menu');
const navList = document.querySelector('#nav-list');
const nav = document.querySelector('nav');

const monsterDataBtn = document.querySelector('#include-monster-data');
const executeCalculationBtn = document.querySelector('#execute-calculation');

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

// Adiciona interatividade no icone do botao de execucao da calculadora
monsterDataBtn.addEventListener('click', () => {
  if (monsterDataBtn.classList.contains('toggle-on')) {
    // Toggle Value
    monsterDataBtn.classList.remove('toggle-on');
    monsterDataBtn.classList.add('toggle-off')

    // Esconde icone do toggle on
    monsterDataBtn.children[1].classList.remove('block');
    monsterDataBtn.children[1].classList.add('hidden');

    // Mostra icone do toggle off
    monsterDataBtn.children[2].classList.add('block');
    monsterDataBtn.children[2].classList.remove('hidden');
  } else if (monsterDataBtn.classList.contains('toggle-off')) {
    // Toggle Value
    monsterDataBtn.classList.remove('toggle-off');
    monsterDataBtn.classList.add('toggle-on')

    // Mostra icone do toggle on
    monsterDataBtn.children[1].classList.remove('hidden');
    monsterDataBtn.children[1].classList.add('block');

    // Esconde icone do toggle off
    monsterDataBtn.children[2].classList.add('hidden');
    monsterDataBtn.children[2].classList.remove('block');
  }
})

function tokenCalculation() {
  // Pega os valores da calculadora
  const income = document.querySelector('#income-tpm').value;
  const killBonus = document.querySelector('#kill-bonus').value;
  const killsPerMinute = document.querySelector('#kpm').value;

  // Calcula o income
  const incomeKills = killBonus * killsPerMinute;
  const incomeHour = (income * 60) + (incomeKills * 60);
  const incomeDay = incomeHour * 24 + (incomeKills * 60 * 24);
  const incomeWeek = incomeDay * 7 + (incomeKills * 60 * 24 * 7);

  // Imprime o income na tela do usuario
  alert(`Hourly Income: ${incomeHour}\nDaily Income: ${incomeDay}\nWeekly Income: ${incomeWeek}`)
  return incomeHour, incomeDay, incomeWeek;
}

executeCalculationBtn.addEventListener('click', () => {tokenCalculation();});