document.getElementsByClass("grid").addEventListener("input", function() {
	var gridObjs = document.getElementsByClass("grid");
	for (var i = 0; i < 81; i++) {
		if (typeof gridObjs[i].value != "number") {
			gridObjs[i].value = "";
		}
	}
});
// document.write(typeof 1);




var board = new Array(9);
for (var i = 0; i < 9; i++){
	board[i] = new Array(9).fill(0);
}
function create_sudoku() {
	var is_able_row;
	for (var i = 0; i < 9; i++) {
		is_able_row = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		for (var j = 0; j < 9; j++) {
			var is_able_col = is_able_row.slice();
			for (var k = 0; k < i; k++) {
				var index = is_able_col.indexOf(board[k][j]);
				if (index != -1) {
					is_able_col.splice(index, 1);
				}
			}
			var is_able_sq = is_able_col.slice();
			for (var k = Math.floor(i / 3) * 3; k < Math.floor(i / 3) * 3 + i % 3; k++) {
				for (var l = Math.floor(j / 3) * 3; l < Math.floor(j / 3) * 3 + 3; l++) {
					var index = is_able_sq.indexOf(board[k][l]);
					if (index != -1) {
						is_able_sq.splice(index, 1);
					}
				}
			}
			var ran = Math.floor(Math.random() * is_able_sq.length);
			if (is_able_sq[ran] == undefined) {
				if (j != 0) {
					j = j - 2;
				} else {
					i = i - 2;
					break;
				}
			} else {
				board[i][j] = is_able_sq[ran];
				is_able_row.splice(is_able_row.indexOf(is_able_sq[ran]), 1);
			}
		}
	}
	console.log(board, "board");
}
create_sudoku();
var ques = board.slice();
function create_hole() {
	var difficulty = 2;
	var count = 0;
	switch(difficulty) {
		case 0:
			count = 2;
			break;
		case 1:
			count = 4;
			break;
		case 2:
			count = 6;
	}
	var blank = [];
	var ran_row, ran_col;
	for (var i = 0; i < 9; i+=3) {
		for (var j = 0; j < 9; j+=3) {
			blank = [];
			for (var k = 0; k < count; k++) {
				do {
					ran_row = i + Math.floor(Math.random() * 3);
					ran_col = j + Math.floor(Math.random() * 3);
				} while (blank.indexOf(ran_row + " " +ran_col) != -1);
				ques[ran_row][ran_col] = 0;
				blank.push(ran_row + " " +ran_col);
			}
		}
	}
	console.log(ques, "ques");
}
function dfs(i, j) {
	if (i == 9) {
		return true;
	}
	if (j == 9) {
		return dfs(i + 1, 0);
	}
	if (ques[i][j] != 0) {
		return dfs(i, j + 1);
	}
	for (var num = 0; num < 9; num++) {
		if(row[i][num] || col[j][num] || square[i / 3][j / 3][num]){
			continue;
		}
	}
	// for(int num = 0; num < 9; num++){
	// if(row[i][num] || col[j][num] || square[i / 3][j / 3][num]){
	// continue;
	// }
	// row[i][num] = true;
	// col[j][num] = true;
	// square[i / 3][j / 3][num] = true;
	// board[i][j] = (char)('1' + num);
	// if(dfs(i, j + 1)){
	// return true;
	// }
	// board[i][j] = '.';
	// row[i][num] = false;
	// col[j][num] = false;
	// square[i / 3][j / 3][num] = false;
	// }
	// return false;
}
create_hole();
