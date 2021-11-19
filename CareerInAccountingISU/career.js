var currentstep = 0, i = 0, if_decide = false;
var sensitivity = 0, ability_coefficient = 0, age = 15;
var count, hint = "There's no hint for this part.";
var hsc = false; csc = false; cp = false; jop = false;

var sensitivityObj = document.getElementById("sensitivity");
var ability_coefficientObj = document.getElementById("ability_coefficient");
var ageObj = document.getElementById("age");

window.onload = freshdata();

function freshdata() {
	sensitivityObj.innerHTML = "Sensitivity: " + sensitivity;
	ability_coefficientObj.innerHTML = "Ability coefficient: " + ability_coefficient;
	ageObj.innerHTML = "Age: " + age;
}

var textboxObjs = document.getElementsByClassName("textbox");
var clickpartObj = document.getElementById("clickpart");
var hintbtnObj = document.getElementById("hintbtn");

clickpartObj.onclick = function() {
	var clickObj = document.getElementById("clickaudio");
	clickObj.play();
	var clicktextObj = document.getElementById("clicktext");
	clicktextObj.innerHTML = "Click here to continue";
	nextstep();
	nextdcsn();
	freshdata();
}
hintbtnObj.onclick = function() {
	var clickObj = document.getElementById("clickaudio");
	clickObj.play();
	var hinttxtObj = document.getElementById("hinttext");
	boxnumbers();
	if(hinttxtObj.innerHTML == "Hint") {
		hinttxtObj.innerHTML = hint;
	} else if(hinttxtObj.innerHTML != "Hint") {
		hinttxtObj.innerHTML = "Hint";
	}
}

function boxnumbers() {	
	switch(currentstep) {
		case 0:
			count = 3;
			hint = "There's no hint for this part.";
			break;
		case 1:
			count = 1 + 3;
			hint = "Mathematics, Business and Accounting can be helpful to increase your sensitivity to numbers and can develop your logical thinking. <br>English can also be important for communication and understanding."
			break;
		case 2:
			count = 1 + 3;
			hint = "There's no hint for this part.";
			break;
		case 3:
			count = 3;
			hint = "There's no hint for this part.";
			break;
		case 4:
			count = 3;
			hint = "There's no hint for this part.";
			break;
		case 5:
			count = 3;
			hint = "There's no hint for this part.";
			break;
	}
}

function nextstep() {
	boxnumbers();
	if(i == count) {
		nextdialogue();
	} else if(i < count) {
		textboxObjs[i].style.display = "table";
		i += 1;
	}
}

function nextdialogue() {
	// 调一个别的判断式
	for(var i = 0; i < textboxObjs.length; i++) {
		textboxObjs[i].style.display = "none";
	}
	if(is_choose_all() == true) {
		currentstep += 2;
	} else if(is_choose_all() == false) {
		currentstep += 1;
		nextstep();
	} else if(if_decide == false) {
		currentstep += 1;
		nextstep();
	}
}

function nextdcsn() {
	var decisionObjs = document.getElementsByClassName("decision");
	if(currentstep == 1) {
		decisionObjs[0].style.display = "block";
	} else {
		for(var i = 0; i < decisionObjs.length; i++) {
			decisionObjs[i].style.display = "none";
		}
	}
	hscdcsn();
}

var hscsObjs = document.getElementsByName("hscs");

function hscdcsn() {
	var i;
	if(if_hscdcsn_occur() == true) {
		if(hscsObjs[0].checked) {
			sensitivity += 1;
		}
		if(hscsObjs[2].checked) {
			sensitivity += 1;
		}
		if(hscsObjs[3].checked) {
			sensitivity += 1;
		}
		if(hscsObjs[6].checked) {
			sensitivity += 1;
		}
		for(var i = 0; i < hscsObjs.length; i++) {
			hscsObjs[i].checked = false;
		}
	}
}
function if_hscdcsn_occur() {
	for(var i = 0; i < hscsObjs.length; i++) {
		if(hscsObjs[i].checked) {
			return true;
		}
	}
}
function is_choose_all() {
	var a = 0;
	for(var i = 0; i < hscsObjs.length; i++) {
		if(hscsObjs[i].checked) {
			a += 1;
		}
		if(a == hscsObjs.length - 1) {
			console.log(a)
			return true;
		}
	}
}
function hscdcsnminus() {
	if(is_choose_all() == true) {
		sensitivity -= 2;
	}
}














