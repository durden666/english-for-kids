import cards from '../data/cards';

const container = document.querySelector('.container');

function state () {
  let createTable = `
  <h2>Statistics</h2>
  <table class="stats-game" id="myTable">
    <thead>
      <tr style="cursor:pointer">
        <th>Word</th>
        <th>Category</th>
        <th>Translate</th>
        <th>Click</th>
        <th>Play</th>
        <th>Train</th>
        <th>% errors</th>
      </tr>
    </thead>
  <tbody id="table-content">`;
 
  for (let i = 0; i < cards[0].length; i += 1) {     
    for (let j = 0; j < cards[i + 1].length; j += 1) {
      createTable += `
      <tr>
        <td> ${cards[0][i]} </td>
        <td> ${cards[i + 2][j].word} </td>
        <td> ${cards[i + 2][j].translation}</td>
        <td> 0 </td>
        <td> 0 </td>
        <td> 0 </td>
        <td> 0 </td>
      </tr>`
    }
  }

  const tableWrapper = document.createElement('div');
    tableWrapper.className = 'table__wrapeer';
    container.appendChild(tableWrapper);

  tableWrapper.innerHTML = createTable;
} 

export default state