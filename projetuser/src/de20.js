const diceButton = document.querySelector('#dice-button');
const resultDisplay = document.querySelector('.dice-result');
const historyList = document.querySelector('#history-list');

function rollDice() {
  const result = Math.floor(Math.random() * 20) + 1;
  resultDisplay.innerHTML = result;
  const listItem = document.createElement('li');
  listItem.innerHTML = `D20 : ${result}`;
  historyList.appendChild(listItem);
}

diceButton.addEventListener('click', rollDice);