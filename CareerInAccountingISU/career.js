var currentstep = 0, sentence = 0, if_decide = false;
var sensitivity = 0, ability_coefficient = 0, age = 15, effort_energy = 8;
var count, hint = "There's no hint for this part.";
var hsc = false; ucc = false; cp = false; jop = false;

var sensitivityObj = document.getElementById("sensitivity");
var ability_coefficientObj = document.getElementById("ability_coefficient");
var effort_energyObj = document.getElementById("effort_energy");
var ageObj = document.getElementById("age");

window.onload = freshdata();

function freshdata() {
	sensitivityObj.innerHTML = "Sensitivity: " + sensitivity;
	ability_coefficientObj.innerHTML = "Ability coefficient: " + ability_coefficient;
	effort_energyObj.innerHTML = "Effort Energy: " + effort_energy;
	ageObj.innerHTML = "Age: " + age;
}

var textboxObjs = document.getElementsByClassName("textbox");
var clickpartObj = document.getElementById("clickpart");
var hintbtnObj = document.getElementById("hintbtn");
var hinttxtObj = document.getElementById("hinttext");

clickpartObj.onclick = function() {
	var clickObj = document.getElementById("clickaudio");
	clickObj.play();
	var clicktextObj = document.getElementById("clicktext");
	clicktextObj.innerHTML = "Click here to continue";
	nextstep();
	// nextdcsn();
	freshdata();
}
hintbtnObj.onclick = function() {
	var clickObj = document.getElementById("clickaudio");
	clickObj.play();
	boxnumbers();
	if(hinttxtObj.innerHTML == "Hint") {
		hinttxtObj.innerHTML = hint;
		hinttxtObj.style.color = "black";
	} else if(hinttxtObj.innerHTML != "Hint") {
		hinttxtObj.innerHTML = "Hint";
		hinttxtObj.style.color = "white";
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
			count = 4 + 1 + 3;
			hint = "Introductory Financial Accounting, Intermediate Financial Reporting 1, Intermediate Financial Reporting 2, Advanced Financial Reporting, Introductory Management Accounting, Intermediate Management Accounting, Corporate Finance, Audit and Assurance, Taxation, Performance Management, Economics, Statistics, Business Law, and Information Technology are all CPA preparatory courses. <br><br>Among them, Intermediate Financial Reporting 1, Intermediate Financial Reporting 2, Advanced Financial Reporting, Corporate Finance, Audit and Assurance, Taxation,  Intermediate Management Accounting, and Performance Management are all core courses. <br><br>Else are all non-core courses.";
			break;
		case 3:
			count = 5 + 4 + 1 + 3;
			hint = "Introductory Financial Accounting, Intermediate Financial Reporting 1, Intermediate Financial Reporting 2, Advanced Financial Reporting, Introductory Management Accounting, Intermediate Management Accounting, Corporate Finance, Audit and Assurance, Taxation, Performance Management, Economics, Statistics, Business Law, and Information Technology are all CPA preparatory courses. <br><br>Among them, Intermediate Financial Reporting 1, Intermediate Financial Reporting 2, Advanced Financial Reporting, Corporate Finance, Audit and Assurance, Taxation,  Intermediate Management Accounting, and Performance Management are all core courses. <br><br>Else are all non-core courses.";
			break;
		case 4:
			count = 4 + 5 + 4 + 1 + 3;
			hint = "Introductory Financial Accounting, Intermediate Financial Reporting 1, Intermediate Financial Reporting 2, Advanced Financial Reporting, Introductory Management Accounting, Intermediate Management Accounting, Corporate Finance, Audit and Assurance, Taxation, Performance Management, Economics, Statistics, Business Law, and Information Technology are all CPA preparatory courses. <br><br>Among them, Intermediate Financial Reporting 1, Intermediate Financial Reporting 2, Advanced Financial Reporting, Corporate Finance, Audit and Assurance, Taxation,  Intermediate Management Accounting, and Performance Management are all core courses. <br><br>Else are all non-core courses.";
			break;
		case 5:
			count = 4 + 4 + 5 + 4 + 1 + 3;
			hint = "Introductory Financial Accounting, Intermediate Financial Reporting 1, Intermediate Financial Reporting 2, Advanced Financial Reporting, Introductory Management Accounting, Intermediate Management Accounting, Corporate Finance, Audit and Assurance, Taxation, Performance Management, Economics, Statistics, Business Law, and Information Technology are all CPA preparatory courses. <br><br>Among them, Intermediate Financial Reporting 1, Intermediate Financial Reporting 2, Advanced Financial Reporting, Corporate Finance, Audit and Assurance, Taxation,  Intermediate Management Accounting, and Performance Management are all core courses. <br><br>Else are all non-core courses.";
			break;
	}
}

function nextstep() {
	nextdcsn();
	boxnumbers();
	if(sentence == count) {
		nextdialogue();
	} else if(sentence < count) {
		textboxObjs[sentence].style.display = "table";
		sentence += 1;
		if(hinttxtObj.innerHTML != "Hint") {
			hinttxtObj.innerHTML = "Hint";
			hinttxtObj.style.color = "white";
		}
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

var decisionObjs = document.getElementsByClassName("decision");

function nextdcsn() {
	for(var i = 0; i < decisionObjs.length; i++) {
		decisionObjs[i].style.display = "none";
	}
	if(currentstep == 1) {
		decisionObjs[0].style.display = "block";
		hsc = true;
		// currentstep += 1;
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
		for(var i = 0; i < textboxObjs.length; i++) {
			textboxObjs[i].style.display = "none";
		}
		age += 3;
		hsc = false;
	} else if(is_choose_all() == true) {
		sensitivity += 2;
		currentstep += 1;
		age += 3;
		sentence += 4;
		hsc = false;
		for(var i = 0; i < textboxObjs.length; i++) {
			textboxObjs[i].style.display = "none";
		}
	} else if(decisionObjs[0].style.display == "none" && hsc == true) {
		currentstep += 2;
		age += 3;
		sentence += 9;
		hsc = false;
		for(var i = 0; i < textboxObjs.length; i++) {
			textboxObjs[i].style.display = "none";
		}
	}
	for(var i = 0; i < hscsObjs.length; i++) {
		hscsObjs[i].checked = false;
	}
}
function if_hscdcsn_occur() {
	if(is_choose_all() == true) {
		return false;
	}
	for(var i = 0; i < hscsObjs.length; i++) {
		if(hscsObjs[i].checked) {
			return true;
		}
		if(i == hscsObjs.length - 1 && hscsObjs[i].checked == false) {
			return false;
		}
	}
}
function is_choose_all() {
	var a = 0;
	for(var i = 0; i < hscsObjs.length; i++) {
		if(hscsObjs[i].checked == false) {
			return false;
		}
		if(i == hscsObjs.length - 1 && hscsObjs[i].checked == true) {
			return true;
		}
	}
}
function hscdcsnminus() {
	if(is_choose_all() == true) {
		sensitivity -= 2;
	}
}














