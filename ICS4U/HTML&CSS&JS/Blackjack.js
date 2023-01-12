var card;
var players = [];
var unface = [];
var win = [];
var lose = [];
var num_dict = {"A": "Ace", "K": "King", "Q": "Queen", "J": "Jack"};
var color_dict = {"a": " of Spades", "b": " of Hearts", "c": " of Clubs", "d": " of Diamonds"};
var is_start = false;
var player_num = parseInt(document.getElementById("player_num").value) + 1;
var txtObj = document.getElementById("txt_start");

function sleep(time){
    var now = new Date().getTime();
    while(new Date().getTime() < now + time){}
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
		var j = Math.floor(Math.random() * i)
		var k = poker[i]
		poker[i] = poker[j]
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
		if (["K", "Q", "J", "A"].indexOf(num) != -1) {
			num = num_dict[num];
		}
		var color = color_dict[card[i].slice(1)];
		card[i] = num + color;
	}
	return card;
}

function deal_card(player, num) {
	for (var i = 0; i < num; i++) {
		var ran = Math.floor(Math.random() * card.length);
		player["card"].push(card[ran]);
		card.splice[ran, 1];
	}
	player["score"] = get_score(player["card"]);
}

function game_start() {
	if (is_start) {
		return;
	}
	card = get_card(player_num);
	players = [];
	// unface = [];
	for (var i = 0; i < player_num; i++) {
		players.push({"id": "", "card": [], "score": 0});
		players[i]["id"] = "comp" + (i + 1);
		// unface.push({"id": "", "card": []});
		// unface[i]["id"] = "comp" + (i + 1);
	}
	players[players.length - 1]["id"] = "user";
	// console.log(players);

	var message = document.getElementById("message");
	message.innerHTML = "Dealing 2 reviewed cards to the players";
	for (var i = 0; i < player_num; i++) {
		deal_card(players[i], 2);
		// deal_card(unface[i], 1);
		// console.log(players[i]["card"]);
		console.log(players[i]["id"], get_card_name(players[i]["card"]));
	}
	is_start = true;
	txtObj.style.display = "none";
	setTimeout(gameplay, 300);
}

function gameplay() {
	for (var i = player_num - 1; i >= 0; i--) {
		console.log("Current: ", players[i]["id"]);
		if (players[i]["id"] == "user") {
			while(true) {
				alert("Current cards: ", get_card_name(players[i]["card"]));
				// sleep(1000);
				// console.log(, get_card_name(players[i]["card"]));
				var input = prompt("Ask for new card? (y/n)");
				if (input == "y") {
					deal_card(players[i], 1);
					alert("New card: ", get_card_name(players[i]["card"]));
					// break;
				} else if (input == "n") {
					break;
				} else {
					input = prompt("Ask for new card? (y/n)");
				}
				// sleep(1000);
			}
		} else {
			while (true) {
				if (players[i]["score"] < players[players.length - 1]["score"] && players[i]["score"] + 5 <= 21) {
					deal_card(players[i], 1);
					console.log(players[i]["id"], "yes");
					// creak;
				} else {
					console.log(players[i]["id"], "no");
					break;
				}
				// setTimeout(function(){}, 500);
			}
		}
	}
	is_win();
}

function is_win() {
	var winner = 0;
	for (var i = 0; i < player_num; i++) {
		if (players[i]["score"] > 21) {
			lose.push(players[i]["id"]);
		} else {
			if (players[winner]["score"] < players[i]["score"]) {
				winner = i;
			}
		}
	}
	win.push(players[winner]);
	console.log(players);
	if (lose.length == player_num) {
		console.log("All players are bust");
	} else {
		for (var i = 0; i < player_num; i++) {
			if (i != winner) {
				if (players[i]["score"] == players[winner]["score"]) {
					win.push(players[i]);
				}
				lose.push(players[i]);
			}
		}
		console.log("Win:", win);
		console.log("Lose:", lose);
	}
}