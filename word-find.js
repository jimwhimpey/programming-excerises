/*
	Given a dictionary, and a matrix of letters, find all the words in the matrix 
	that are in the dictionary. (Going across, down or diagonally)

*/

var matrix = [
	['a', 'd', 'o', 'g'],
	['c', 'f', 't', 'c'],
	['a', 'j', 'a', 'a'],
	['t', 'd', 'o', 't']
];

// Words to find
var words = [
	'dog',
	'cat',
	'fat'
];

// Loop through the words
words.forEach(function(word) {
	
	// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠
	// Look horizontally
	matrix.forEach(function(row) {
		
		var currentWordFindIndex = 0;
		
		row.forEach(function(letter) {
			
			// Matching
			if (letter === word[currentWordFindIndex]) {
				// Check for a complete match
				if (currentWordFindIndex === word.length - 1) {
					console.log("we found horizontal", word);
					currentWordFindIndex = 0;
				} else {
					currentWordFindIndex++;
				}
			}
			
		});
	});
	
	// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠
	// Look vertically
	var rowLength = matrix[0].length;
	
	for (var currentColumnIndex = 0; currentColumnIndex < rowLength; currentColumnIndex++) {
		
		currentWordFindIndex = 0;
		
		matrix.forEach(function(row) {
			
			var letter = row[currentColumnIndex];
			
			// Matching
			if (letter === word[currentWordFindIndex]) {
				// Check for a complete match
				if (currentWordFindIndex === word.length - 1) {
					console.log("we found vertical", word);
					currentWordFindIndex = 0;
				} else {
					currentWordFindIndex++;
				}
			}
			
		});
		
	}
	
	// console.log("-------------------------");
	
	var xOffset = 0,
	    yOffset = 0,
	    lengthOfRow = matrix[0].length,
	    numberOfLetters = matrix.reduce(function(total, row) {
	    	return total + row.length;
	    }, 0);
	
	// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠
	// Look diagonally left to right
	matrix.forEach(function (row) {
		
		
		
	});

	
	
});


