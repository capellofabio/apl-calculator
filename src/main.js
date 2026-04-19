import './style.css'

const dropdownBtn = document.querySelector('#dropdown-menu');
const navList = document.querySelector('#nav-list');
const nav = document.querySelector('nav');
const dailyIncomeText = document.querySelector('#daily-income')

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

// Executa o calculo de income
executeCalculationBtn.addEventListener('click', () => {tokenCalculation();});

function tokenCalculation() {
  // Pega os valores da calculadora
  const income = document.querySelector('#income-tpm').value;
  const killBonus = document.querySelector('#kill-bonus').value;
  const killsPerMinute = document.querySelector('#kpm').value;

  // Declara variaveis de income
  const killsIncome = killBonus * killsPerMinute;
  let hourlyIncome = income * 60;
  let dailyIncome = hourlyIncome * 24;
  let weeklyIncome = dailyIncome * 7;

  // Atualiza o income
  if (document.querySelector('#include-data').classList.contains('block')) {
    hourlyIncome += killsIncome * 60;
    dailyIncome += killsIncome * 24;
    weeklyIncome += killsIncome * 7;
    dailyIncomeText.innerText = dailyIncome.toLocaleString('pt-BR');
  } else if (document.querySelector('#include-data').classList.contains('hidden')){
    dailyIncomeText.innerText = dailyIncome.toLocaleString('pt-BR');
  }
}