let stateArr = ["", "", "", "", "", "", "", "", ""];
let turn = setTurn(stateArr);

const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

function setTurn(arr) {
  let counter = 0;
  for (const space of arr) {
    if (space !== "") {
      counter ++;
    }
  }
  return counter;
}

function player() {
  if (turn % 2 === 0) {
    return "X";
  } else {
    return "O";
  }
}

function findPos(x_pos, y_pos) {
  let x = parseInt(x_pos);
  let y = parseInt(y_pos);
  let arrPos = 0;
  if (y === 1) {
    arrPos = 3;
  } else if (y === 2) {
    arrPos = 6;
  }
  return arrPos += x;
}

$(document).ready(function() {
  attachListeners();

  function updateState(square) {
    let selected_square = findPos(square.data('x'), square.data('y'));
    stateArr[selected_square] = player();

    $('td').each(function(index, td) {
      $(td).text(stateArr[index]);
    });
  }

  function doTurn(square) {
    updateState(square);
  }

  function attachListeners() {
    $('td').on('click', function() {
      doTurn($(this));
    });
  }

});
