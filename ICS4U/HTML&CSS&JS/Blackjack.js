var cards, player_num, deck_num = 1;
var players = [];
var win = [];
var lose = [];
var score = [];
var num_dict = {"A": "Ace", "K": "King", "Q": "Queen", "J": "Jack", "0": "10"};
var color_dict = {"a": " of Spades", "b": " of Hearts", "c": " of Clubs", "d": " of Diamonds"};
var name_dict = {"comp": "Computer ", "user": "You"};
var message = document.getElementById("message");
var scoreObj = document.getElementById("txt_score");
var txt_startObj = document.getElementById("txt_start");
var txt_endObj = document.getElementById("txt_end");
var user_cardObjs = document.getElementsByClassName("card_user");
var user_card_num = 0;
var comp_cardObjs = document.getElementsByClassName("card_comp");
var compObjs = document.getElementsByClassName("comp");
var comp_card_num = 0;
var comp_time = 0;
var txt_gameObj = document.getElementById("txt_game");
var txt_compObj = document.getElementById("txt_comp");
var txt_curObj = document.getElementById("txt_cur");
var txt_hsObj = document.getElementById("txt_hs");
var txt_resObj = document.getElementById("txt_result");
var txt_winObj = document.getElementById("txt_win");
var boardObj = document.getElementById("board");
txt_gameObj.style.top = boardObj.offsetTop + boardObj.offsetHeight / 2 + "px";
txt_resObj.style.top = boardObj.offsetTop + boardObj.offsetHeight / 2 + "px";
txt_compObj.style.top = boardObj.offsetTop + boardObj.offsetHeight / 2 + "px";

function restart(bool) {
	for (var i = 0; i < player_num; i++) {
		if (i == player_num - 1) {
			for (var j = 0; j < players[i]["card"].length; j++) {
				user_cardObjs[j].style.display = "none";
			}
		} else {
			for (var j = 0; j < 8; j++) {
				comp_cardObjs[j].style.display = "none";
			}
			compObjs[i].style.display = "none";
		}
	}
	win = [];
	lose = [];
	user_card_num = 0;
	comp_card_num = 0;
	comp_time = 0;
	txt_curObj.innerHTML = "";
	txt_hsObj.innerHTML = "";
	txt_resObj.style.display = "none";
	if (bool) {
		txt_endObj.style.display = "none";
		txt_endObj.innerHTML = "You have used all the cards in the this round.";
		txt_startObj.style.display = "block";
		message.innerHTML = "Here is your message box";
		scoreObj.innerHTML = "Here is your score box";
	} else {
		if (cards.length < player_num * 4) {
			txt_endObj.style.display = "block";
			setTimeout(function() {
				var max = 0;
				for (var i = 0; i < player_num; i++) {
					if (score[max]["score"] < score[i]["score"]) {
						max = i;
					}
				}
				txt_endObj.innerHTML = "Final winner(s): ";
				txt_endObj.innerHTML += name_dict[score[max]["id"].slice(0, 4)] + score[max]["id"].slice(4);
				for (var i = 0; i < player_num; i++) {
					if (score[i]["score"] == score[max]["score"] && i != max) {
						txt_endObj.innerHTML += ", " + name_dict[score[i]["id"].slice(0, 4)] + score[i]["id"].slice(4);
					}
					
				}
				txt_endObj.innerHTML += "!";
				console.log(score);
			}, 2500);
			setTimeout(function() {restart(true)}, 5000);
		} else {
			game_start();
		}
	}
}

function init() {
	player_num = parseInt(document.getElementById("player_num").value) + 1;
	deck_num = parseInt(document.getElementById("deck_num").value);
	players = [];
	score = [];
	cards = get_card(deck_num);
	for (var i = 0; i < player_num; i++) {
		players.push({"id": "", "card": [], "score": 0});
		players[i]["id"] = "comp" + (i + 1);
		// deal_card(players[i], 2);
		score.push({"id": players[i]["id"], "score": 0});
		// console.log(players[i]["id"], get_card_name(players[i]["card"]));
	}
	players[players.length - 1]["id"] = "user";
	score[score.length - 1]["id"] = "user";
	game_start();
}


function get_card(num) {
	var poker = [];
	for (var i = 0; i < num; i++) {
		poker.push('Aa', 'Ab', 'Ac', 'Ad',
				   'Ka', 'Kb', 'Kc', 'Kd',
				   'Qa', 'Qb', 'Qc', 'Qd',
				   'Ja', 'Jb', 'Jc', 'Jd',
				   '0a', '0b', '0c', '0d',
				   '9a', '9b', '9c', '9d',
				   '8a', '8b', '8c', '8d',
				   '7a', '7b', '7c', '7d',
				   '6a', '6b', '6c', '6d',
				   '5a', '5b', '5c', '5d',
				   '4a', '4b', '4c', '4d',
				   '3a', '3b', '3c', '3d',
				   '2a', '2b', '2c', '2d');
	}
	for (var i = poker.length -1; i > 0; i--) {
		var j = Math.floor(Math.random() * i);
		var k = poker[i];
		poker[i] = poker[j];
		poker[j] = k;
	}
	console.log(poker);
	return poker;
}



function get_score(arr) {
	var card = arr.slice();
	var sum = 0;
	var is_A_in = false;
	for (var i = 0; i < card.length; i++) {
		card[i] = card[i].slice(0, 1);
		switch(card[i]) {
			case "K":
			case "Q":
			case "J":
			case "0":
				sum += 10;
				break;
			case "A":
				is_A_in = true;
				break;
			default:
				sum += parseInt(card[i]);
		}
	}
	if (is_A_in) {
		if (sum + 11 <= 21) {
			sum += 11;
		} else {
			sum += 1;
		}
	}
	return sum;
}



function get_card_name(arr) {
	var card = arr.slice();
	for (var i = 0; i < card.length; i++) {
		var num = card[i].slice(0, 1);
		if (["K", "Q", "J", "A", "0"].indexOf(num) != -1) {
			num = num_dict[num];
		}
		var color = color_dict[card[i].slice(1)];
		card[i] = num + color;
	}
	return card;
}



function deal_card(player, num) {
	for (var i = 0; i < num; i++) {
		var ran = Math.floor(Math.random() * cards.length);
		player["card"].push(cards[ran]);
		cards.splice(ran, 1);
	}
	player["score"] = get_score(player["card"]);
}



function game_start() {
	// init(true);
	txt_startObj.style.display = "none";
	message.innerHTML = "Dealing 2 reviewed cards to the players";
	console.log(cards);
	for (var i = 0; i < player_num; i++) {
		players[i]["card"] = [];
		deal_card(players[i], 2);
		console.log(players[i]["id"], get_card_name(players[i]["card"]));
	}
	for (var i = 0; i < 600 + 1; i += 600) {
		setTimeout(function() {
			user_cardObjs[user_card_num].style.display = "inline-block";
			user_cardObjs[user_card_num].style.background = "url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+ players[player_num - 1]["card"][user_card_num]+ ".png')";
			user_cardObjs[user_card_num].style.backgroundSize = "cover";
			user_cardObjs[user_card_num].style.backgroundPosition = "center";
			user_card_num++;
		}, 400+i);
	}

	for (var i = 0; i < player_num - 1; i++) {
		compObjs[i].style.display = "inline";
	}
	for (var i = 0; i < 1000-1; i += 1000 / (player_num - 1) / 2) {
		setTimeout(function() {
			comp_cardObjs[comp_card_num].style.display = "inline-block";
			comp_cardObjs[comp_card_num].style.background = "url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+ players[Math.floor(comp_card_num / 2)]["card"][comp_card_num % 2]+ ".png')";
			comp_cardObjs[comp_card_num].style.backgroundSize = "cover";
			comp_cardObjs[comp_card_num].style.backgroundPosition = "center";
			comp_card_num++;
		}, i);
	}
	setTimeout(function() {
		txt_gameObj.style.display = "block";
		message.innerHTML = "Dealing unface cards to the players";
	}, 1400);
}



function gameplay_user(bool) {
	if (bool && user_card_num < 8) {
		console.log("y");
		deal_card(players[players.length - 1], 1);
		txt_gameObj.style.display = "none";
		setTimeout(function() {
			user_cardObjs[user_card_num].style.display = "inline-block";
			user_cardObjs[user_card_num].style.background = "url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+ players[player_num - 1]["card"][user_card_num]+ ".png')";
			user_cardObjs[user_card_num].style.backgroundSize = "cover";
			user_cardObjs[user_card_num].style.backgroundPosition = "center";
			user_card_num++;
		}, 600);
		setTimeout(function() {
			txt_gameObj.style.display = "block";
		}, 1000);
	} else {
		txt_gameObj.style.display = "none";
		txt_compObj.style.display = "block";
		gameplay_comp(0);
	}
}



function gameplay_comp(i) {
	comp_time += 350;
	setTimeout(function() {
		if (i == player_num - 1) {
			txt_compObj.style.display = "none";
			is_win();
			return;
		}
		txt_curObj.innerHTML = "Current: Computer " + players[i]["id"].slice(4) + " || ";
		if (players[i]["score"] < players[players.length - 1]["score"] && players[i]["score"] + 5 <= 21) {
			deal_card(players[i], 1);
			txt_hsObj.innerHTML = "'Hit'";
			console.log(players[i]["id"], "Hit");
			gameplay_comp(i);
		} else {
			txt_hsObj.innerHTML = "'Stand'";
			console.log(players[i]["id"], "Stand");
			gameplay_comp(i+1);
		}
	}, comp_time);
	setTimeout(function(){
		if (i != player_num - 1) {
			txt_hsObj.innerHTML = "";
		}
	}, comp_time - 10);
}


function is_win() {
	var winner = 0;
	for (var i = 0; i < player_num; i++) {
		if (players[i]["score"] <= 21) {
			win.push(players[i]);
			if (players[winner]["score"] < players[i]["score"] || players[winner]["score"] > 21) {
				winner = i; 
			}
		} else {
			lose.push(players[i]);
		}
	}
	console.log(players);
	for (var i = 0; i < win.length; i++) {
		if (win[i]["score"] < players[winner]["score"]) {
			lose.push(win[i]);
			win.splice(i, 1);
			i--;
		}	
	}
	txt_resObj.style.display = "block";
	if (win.length == 0) {
		txt_winObj.innerHTML = "All players are bust";
	} else {
		txt_winObj.innerHTML = "Winner:";
		for (var i = 0; i < win.length; i++) {
			txt_winObj.innerHTML += " " + name_dict[win[i]["id"].slice(0, 4)] + win[i]["id"].slice(4) + "!";
			for (var j = 0; j < score.length; j++) {
				if (score[j]["id"] == win[i]["id"]) {
					score[j]["score"]++;
				}
			}
		}
	}
	message.innerHTML = "";
	scoreObj.innerHTML = "";
	console.log(win);
	console.log(lose);
	var card_num = 0;
	var cardObj = document.getElementsByClassName("card");
	for (var i = 0; i < player_num; i++) {
		var name = name_dict[players[i]["id"].slice(0, 4)] + players[i]["id"].slice(4) + ":";
		message.innerHTML += name;
		var card = "";
		for (var j = 0; j < players[i]["card"].length; j++) {
			message.innerHTML += "<div class='card'></div>";
			cardObj[card_num].style.background = "url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+ players[i]["card"][j] + ".png')";
			cardObj[card_num].style.backgroundSize = "cover";
			cardObj[card_num].style.backgroundPosition = "center";
			card_num++;
		}
		if (i % 2 == 1) {
			message.innerHTML += "<br>";
		}
		if (i != player_num - 1){
			scoreObj.innerHTML += name + " " + score[i]["score"] + "  |  ";
		} else {
			scoreObj.innerHTML += name + " " + score[i]["score"];
		}
	}
}