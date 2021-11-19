var currentstep = 0, i = 0, if_decide = false;
var sensitivity = 0, ability_coefficient = 0, age = 15;
var count, hint = "There's no hint for this part.";

var sensitivityObj = document.getElementById("sensitivity");
var ability_coefficientObj = document.getElementById("ability_coefficient");
var ageObj = document.getElementById("age");

window.onload = function() {
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
}
hintbtnObj.onclick = function() {
	var clickObj = document.getElementById("clickaudio");
	clickObj.play();
	var hinttxtObj = document.getElementById("hinttext");
	boxnumbers();
	if(hinttxtObj.innerHTML == "Hint") {
		hinttxtObj.innerHTML = hint;
		console.log(1)
	} else if(hinttxtObj.innerHTML != "Hint") {
		hinttxtObj.innerHTML = "Hint";
		console.log(2)
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
			count = 3;
			break;
		case 3:
			count = 3;
			break;
		case 4:
			count = 3;
			break;
		case 5:
			count = 3;
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
	if(count == 500) {

	} else if(if_decide == false) {
		currentstep += 1;
		nextstep();
	}
}

function nextdcsn() {
	var decisionObjs = document.getElementsByClassName("decision");
	if(currentstep == 1) {
		decisionObjs[0].style.display = "block";
	}
}