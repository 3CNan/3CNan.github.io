var gridObjs = document.getElementsByClassName("grid");
var board = new Array(9);
for (var i = 0; i < 9; i++){
	board[i] = new Array(9).fill(0);
}
var btn_start = document.getElementById("btn_start");
var btn_submit = document.getElementById("btn_submit");
var txt_sucs = document.getElementById("txt_sucs");
var txt_fail = document.getElementById("txt_fail");
let sub_board = structuredClone(board);

window.onload = function(){
	for (var i = 0; i < 81; i++) {
		if (i%3 == 0) {
			gridObjs[i].style.borderLeft = "2px solid black";
		}
		if (i%27 >= 18) {
			gridObjs[i].style.borderBottom = "1px solid black";
		}
		if (i < 9) {
			gridObjs[i].style.borderTop = "2px solid black";
		}
		if (81 - i <= 9) {
			gridObjs[i].style.borderBottom = "2px solid black";
		}
		if (i%9 == 8) {
			gridObjs[i].style.borderRight = "2px solid black";
		}
		gridObjs[i].style.fontSize = gridObjs[0].offsetWidth - 30 + "px";
	}
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

function create_hole(ques) {
	var difficulty = parseInt(document.getElementById("dif").value);
	console.log(difficulty);
	var count = 0;
	switch(difficulty) {
		case 0:
			count = 3;
			break;
		case 1:
			count = 5;
			break;
		case 2:
			count = 7;
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

function game_start() {
	btn_start.style.display = "none";
	btn_submit.style.display = "inline-block";
	txt_sucs.style.display = "none";
	txt_fail.style.display = "none";
	create_sudoku();
	let ques = structuredClone(board);
	create_hole(ques);
	for (var i = 0; i < 81; i++) {
		var a = ques[parseInt(i/9)][i%9];
		gridObjs[i].value = '';
		gridObjs[i].readOnly = false;
		if (a != 0) {
			gridObjs[i].value = a;
			gridObjs[i].readOnly = true;
		}
	}
	// console.log(board,ques);
}

function check() {
	btn_submit.style.display = "none";
	btn_start.style.display = "inline-block";
	for (var i = 0; i < 81; i++) {
		sub_board[parseInt(i/9)][i%9] = Math.floor(gridObjs[i].value);
		if (Math.floor(gridObjs[i].value) <= 0 || Math.floor(gridObjs[i].value) > 9) {
			txt_fail.style.display = "block";
			return;
		}
	}
	for (var i = 0; i < 9; i++) {
		var row = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		for (var j = 0; j < 9; j++) {
			if (row.indexOf(sub_board[i][j]) == -1) {
				txt_fail.style.display = "block";
				console.log("row");
				return;
			}
			row.splice(row.indexOf(sub_board[i][j]), 1);
		}
	}
	for (var i = 0; i < 9; i++) {
		var col = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		for (var j = 0; j < 9; j++) {
			if (col.indexOf(sub_board[j][i]) == -1) {
				txt_fail.style.display = "block";
				console.log("col");
				return;
			}
			col.splice(col.indexOf(sub_board[j][i]), 1);
		}
	}
	for (var i = 0; i < 9; i++) {
		var sq = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		for (var j = 0; j < 9; j++) {
			if (sq.indexOf(sub_board[3*parseInt(i/3)+parseInt(j/3)][i%3*3+j%3]) == -1) {
				txt_fail.style.display = "block";
				console.log("sq");
				// console.log(sq, 3*parseInt(i/3)+parseInt(j/3), i%3*3+j%3);
				return;
			}
			sq.splice(sq.indexOf(sub_board[3*parseInt(i/3)+parseInt(j/3)][i%3*3+j%3]), 1);
		}
	}
	txt_sucs.style.display = "block";
	console.log("success");
}