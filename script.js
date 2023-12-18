document.getElementById('calculate-button').addEventListener('click', function() {
  const book = document.getElementById('books').value;
  const cover = document.getElementById('cover').value;
  const volume = parseInt(document.getElementById('volume').value);

  const tableBody = document.getElementById('result-body');
  const newRow = tableBody.insertRow(-1);
  const cellBook = newRow.insertCell(0);
  const cellCover = newRow.insertCell(1);
  const cellVolume = newRow.insertCell(2);
  const cellProfit = newRow.insertCell(3);

  cellBook.innerHTML = book;
  cellCover.innerHTML = cover;
  cellVolume.innerHTML = volume;

  let profit = 0;
  if (cover === 'Cietie') {
    if (volume === 50) profit = 1000;
    else if (volume === 100) profit = 2000;
    else if (volume === 200) profit = 3000;
    else if (volume === 500) profit = 4000;
  } else if (cover === 'Mīkstie') {
    if (volume === 50) profit = 800;
    else if (volume === 100) profit = 900;
    else if (volume === 200) profit = 1100;
    else if (volume === 500) profit = 1200;
  }
  cellProfit.innerHTML = profit;

  document.getElementById('result-table').style.display = 'block';
});
