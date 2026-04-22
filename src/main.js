import './style.css'

const dropdownBtn = document.querySelector('#dropdown-menu');
const navList = document.querySelector('#nav-list');
const nav = document.querySelector('nav');

const hourlyIncomeText = document.querySelector('#hourly-income');
const dailyIncomeText = document.querySelector('#daily-income');
const weeklyIncomeText = document.querySelector('#weekly-income');

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

// Executa o calculo de income
executeCalculationBtn.addEventListener('click', () => {tokenCalculation();});

function tokenCalculation() {
  // Pega os valores da calculadora
  const tpc = document.querySelector('#income-tpc').value;
  const cycleTime = document.querySelector('#cycle-time').value;
  const killBonus = document.querySelector('#kill-bonus').value;
  const killsPerMinute = document.querySelector('#kpm').value;

  // Calcula valor das kills
  const killsIncome = killBonus * killsPerMinute;
  const hourlyKillsIncome = killsIncome * 60;
  const dailyKillsIncome = hourlyKillsIncome * 24;
  const weeklyKillsIncome = dailyKillsIncome * 7;

  // Calcula o income total
  const tpm = tpc / cycleTime * 60;
  const hourlyIncome = tpm * 60 + hourlyKillsIncome;
  const dailyIncome = hourlyIncome * 24;
  const weeklyIncome = dailyIncome * 7;

  // Atualiza os resultados
  hourlyIncomeText.innerText = hourlyIncome.toLocaleString('pt-BR');
  dailyIncomeText.innerText = dailyIncome.toLocaleString('pt-BR');
  weeklyIncomeText.innerText = weeklyIncome.toLocaleString('pt-BR');

  // Adiciona animacao aos resultados
  hourlyIncomeText.classList.add('animate-pulse');
  setTimeout(() => {
    hourlyIncomeText.classList.remove('animate-pulse');
  }, 4000);
  dailyIncomeText.classList.add('animate-pulse');
  setTimeout(() => {
    dailyIncomeText.classList.remove('animate-pulse');
  }, 4000);
  weeklyIncomeText.classList.add('animate-pulse');
  setTimeout(() => {
    weeklyIncomeText.classList.remove('animate-pulse');
  }, 4000);
  
}