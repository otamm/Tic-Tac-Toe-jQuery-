// Your code here
// Within any element with class `.board`, listen for clicks on any element
// with a class `.square`.
var winningCombinations = [
  // Horizontals
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Verticals
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Diagonals
  [0, 4, 8],
  [2, 4, 6]
];

var chosenSquares = {
  'x' : [],
  'o' : []
}

var currentPlayerToken = 'x';

$('.board').on('click', '.square', function(event) {
  var $square = $(event.currentTarget) ;
  $square.addClass('square-' + currentPlayerToken);
  if (currentPlayerToken === 'x'){
    currentPlayerToken = 'o';
  }else{
    currentPlayerToken = 'x';
  }

});

// For each winning combination
$.each(winningCombinations, function(index, combination) {
  // Start by assuming that the player has all of the squares
  var hasAllSquares = true;

  // For each of the squares in the combination
  $.each(combination, function(index, square) {
    // If the square is not in the currentPlayerSquares
    if ($.inArray(square, currentPlayerSquares) === -1) {
      hasAllSquares = false;
    }
  });

  // If we made it this far without changing hasAllSquares to false
  if (hasAllSquares) {
    // Alert that the currentPlayer has won
    alert(currentPlayerToken + ' wins!');
  }
});
