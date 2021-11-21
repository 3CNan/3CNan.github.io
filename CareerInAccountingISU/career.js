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
	clicktextObj.innerHTML = "Click here to continue <br> Until (END) appear";
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
			count = 4 + (1 + 3);
			hint = "Introductory Financial Accounting, Intermediate Financial Reporting 1, Intermediate Financial Reporting 2, Advanced Financial Reporting, Introductory Management Accounting, Intermediate Management Accounting, Corporate Finance, Audit and Assurance, Taxation, Performance Management, Economics, Statistics, Business Law, and Information Technology are all CPA preparatory courses. <br><br>Among them, Intermediate Financial Reporting 1, Intermediate Financial Reporting 2, Advanced Financial Reporting, Corporate Finance, Audit and Assurance, Taxation,  Intermediate Management Accounting, and Performance Management are all core courses. <br><br>Else are all non-core courses.";
			break;
		case 3:
			count = 5 + (4 + 1 + 3);
			hint = "Introductory Financial Accounting, Intermediate Financial Reporting 1, Intermediate Financial Reporting 2, Advanced Financial Reporting, Introductory Management Accounting, Intermediate Management Accounting, Corporate Finance, Audit and Assurance, Taxation, Performance Management, Economics, Statistics, Business Law, and Information Technology are all CPA preparatory courses. <br><br>Among them, Intermediate Financial Reporting 1, Intermediate Financial Reporting 2, Advanced Financial Reporting, Corporate Finance, Audit and Assurance, Taxation,  Intermediate Management Accounting, and Performance Management are all core courses. <br><br>Else are all non-core courses.";
			break;
		case 4:
			count = 4 + (5 + 4 + 1 + 3);
			hint = "Introductory Financial Accounting, Intermediate Financial Reporting 1, Intermediate Financial Reporting 2, Advanced Financial Reporting, Introductory Management Accounting, Intermediate Management Accounting, Corporate Finance, Audit and Assurance, Taxation, Performance Management, Economics, Statistics, Business Law, and Information Technology are all CPA preparatory courses. <br><br>Among them, Intermediate Financial Reporting 1, Intermediate Financial Reporting 2, Advanced Financial Reporting, Corporate Finance, Audit and Assurance, Taxation,  Intermediate Management Accounting, and Performance Management are all core courses. <br><br>Else are all non-core courses.";
			break;
		case 5:
			count = 4 + (4 + 5 + 4 + 1 + 3);
			hint = "Introductory Financial Accounting, Intermediate Financial Reporting 1, Intermediate Financial Reporting 2, Advanced Financial Reporting, Introductory Management Accounting, Intermediate Management Accounting, Corporate Finance, Audit and Assurance, Taxation, Performance Management, Economics, Statistics, Business Law, and Information Technology are all CPA preparatory courses. <br><br>Among them, Intermediate Financial Reporting 1, Intermediate Financial Reporting 2, Advanced Financial Reporting, Corporate Finance, Audit and Assurance, Taxation,  Intermediate Management Accounting, and Performance Management are all core courses. <br><br>Else are all non-core courses.";
			break;
		case 6:
			count = 2 + (4 + 4 + 5 + 4 + 1 + 3);
			hint = "There's no hint for this part.";
			break;
		case 7:
			count = 5 + (2 + 4 + 4 + 5 + 4 + 1 + 3);
			hint = "There's no hint for this part.";
			break;
		case 8:
			count = 4 + (5 + 2 + 4 + 4 + 5 + 4 + 1 + 3);
			hint = "Core Courses:<br>• Intermediate Financial Reporting 1<br>• Intermediate Financial Reporting 2<br>• Advanced Financial Reporting<br>• Corporate Finance<br>• Audit and Assurance<br>• Taxation<br>• Intermediate Management Accounting<br>• Performance Management<br><br>Non-core Courses:<br>• Introductory Financial Accounting<br>• Introductory Management Accounting<br>• Economics<br>• Statistics<br>• Business Law<br>• Information Technology";
			break;
		case 9:
			count = 4 + (4 + 5 + 2 + 4 + 4 + 5 + 4 + 1 + 3);
			hint = "Core Courses:<br>• Intermediate Financial Reporting 1<br>• Intermediate Financial Reporting 2<br>• Advanced Financial Reporting<br>• Corporate Finance<br>• Audit and Assurance<br>• Taxation<br>• Intermediate Management Accounting<br>• Performance Management<br><br>Non-core Courses:<br>• Introductory Financial Accounting<br>• Introductory Management Accounting<br>• Economics<br>• Statistics<br>• Business Law<br>• Information Technology";
			break;
		case 10:
			count = 3 + (4 + 4 + 5 + 2 + 4 + 4 + 5 + 4 + 1 + 3);
			hint = "Core Courses:<br>• Intermediate Financial Reporting 1<br>• Intermediate Financial Reporting 2<br>• Advanced Financial Reporting<br>• Corporate Finance<br>• Audit and Assurance<br>• Taxation<br>• Intermediate Management Accounting<br>• Performance Management<br><br>Non-core Courses:<br>• Introductory Financial Accounting<br>• Introductory Management Accounting<br>• Economics<br>• Statistics<br>• Business Law<br>• Information Technology";
			break;
		case 11:
			count = 5 + (3 + 4 + 4 + 5 + 2 + 4 + 4 + 5 + 4 + 1 + 3); ;
			hint = "There's no hint for this part.";
			break;
		case 12:
			count = 6 + (5 + 3 + 4 + 4 + 5 + 2 + 4 + 4 + 5 + 4 + 1 + 3) ;
			hint = "There's no hint for this part.";
			break;
		case 13:
			count = 5 + (6 + 5 + 3 + 4 + 4 + 5 + 2 + 4 + 4 + 5 + 4 + 1 + 3) ;
			hint = "There's no hint for this part.";
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
	
	if(currentstep == 4 && sentence == 17 && hsc == false) {
		currentstep = 6;
		sentence = 21;
		console.log(1);
		nextstep();
	} else if(currentstep == 3 && sentence == 13 && hsc == false) {
		currentstep = 6;
		sentence = 21;
		console.log(2);
		nextstep();
	} else if(currentstep == 2 && sentence == 8 && hsc == false) {
		currentstep = 6;
		sentence = 21;
		console.log(3);
		nextstep();
	} else if(currentstep == 9 && sentence == 36 && ucc == false) {
		currentstep = 11;
		sentence = 39;
		console.log(1);
		nextstep();
	} else if(currentstep == 8 && sentence == 32 && ucc == false) {
		currentstep = 11;
		sentence = 39;
		console.log(2);
		nextstep();
	} else if(if_decide == false) {
		currentstep += 1;
		nextstep();
		console.log(0);
	}
}

var decisionObjs = document.getElementsByClassName("decision");

function nextdcsn() {
	for(var i = 0; i < decisionObjs.length; i++) {
		decisionObjs[i].style.display = "none";
	}
	if(sentence == 3) {
		decisionObjs[0].style.display = "block";
		// hsc = true;
		// currentstep += 1;
	}
	if(currentstep == 2 || currentstep == 3 || currentstep == 4 || currentstep == 5) {
		decisionObjs[1].style.display = "block";
		// ucc = true;
	}
	hsc = ucc = false;
	hscdcsn();
	uccdcsn();
}

var hscsObjs = document.getElementsByName("hscs");

function hscdcsn() {
	if(currentstep == 1 && textboxObjs[3].style.display == "table") {
		if(if_hscdcsn_occur()) {
			if(is_choose_all()) {
				sensitivity += 2;
				sentence += 4;
				currentstep += 1;
			} else if(hscsObjs[0].checked || hscsObjs[2].checked || hscsObjs[3].checked || hscsObjs[6].checked) {
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
			} else {
				sentence += 4 + 4 + 5;
				currentstep += 3;
			}
			hsc = true;
			age += 3;
		} else {
			sentence += 4 + 5;
			currentstep += 2;
			age += 3;
			hsc = true;
		}
	}
}


// 	if(if_hscdcsn_occur() == true) {
// 		if(hscsObjs[0].checked == false && hscsObjs[2].checked == false && hscsObjs[3].checked == false && hscsObjs[6].checked == false) {
// 			currentstep += 2;
// 			sentence += 4 + 4 + 5;
// 		} else {
// 			if(hscsObjs[0].checked) {
// 				sensitivity += 1;
// 			}
// 			if(hscsObjs[2].checked) {
// 				sensitivity += 1;
// 			}
// 			if(hscsObjs[3].checked) {
// 				sensitivity += 1;
// 			}
// 			if(hscsObjs[6].checked) {
// 				sensitivity += 1;
// 			}
// 		}
// 		for(var i = 0; i < textboxObjs.length; i++) {
// 			textboxObjs[i].style.display = "none";
// 		}
// 		currentstep -= 1;
// 		age += 3;
// 		hsc = false;
// 	} else if(is_choose_all() == true) {
// 		// currentstep += 1;
// 		age += 3;
// 		sensitivity += 2;
// 		sentence += 4;
// 		hsc = false;
// 		for(var i = 0; i < textboxObjs.length; i++) {
// 			textboxObjs[i].style.display = "none";
// 		}
// 	} else if(decisionObjs[0].style.display == "none" && hsc == true) {
// 		currentstep += 1;
// 		age += 3;
// 		sentence += 4 + 5;
// 		hsc = false;
// 		for(var i = 0; i < textboxObjs.length; i++) {
// 			textboxObjs[i].style.display = "none";
// 		}
// 	}
// 	for(var i = 0; i < hscsObjs.length; i++) {
// 		hscsObjs[i].checked = false;
// 	}
// }
function if_hscdcsn_occur() {
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
	for(var i = 0; i < hscsObjs.length; i++) {
		if(hscsObjs[i].checked == false) {
			return false;
		}
		if(i == hscsObjs.length - 1 && hscsObjs[i].checked == true) {
			return true;
		}
	}
}

var uccObjs = document.getElementsByName("ucc");
var ucccrObjs = document.getElementsByName("ucccr");

function checktoshow() {
	var a;
	for(var i = 0; i < uccObjs.length; i++) {
		if(uccObjs[i].checked == true) {
			ucccrObjs[i].style.display = "inline-block";
		}
		if(uccObjs[i].checked == false) {
			ucccrObjs[i].style.display = "none";
			ucccrObjs[i].checked = false;
		}
	}
}

function uccdcsn() {
	var option;
	if(sentence == 21) {
		if(currentstep == 5) {

		} else {
			age += 4;
		}
	}
	if(currentstep == 7 && sentence == 28) {
		if(not_all_ucc() == true) {
			age += 1;
			ability_coefficient += 45 + (sensitivity * 5);
			console.log(1);
		} else if(is_all_core() == false) {
			ability_coefficient += 40 + (sensitivity * 5);
			currentstep += 1;
			sentence += 4;
			console.log(2);
		} else{
			ability_coefficient += 50 + (sensitivity * 5);
			currentstep += 2;
			sentence += 4 + 4;
			console.log(3);
		}
		ucc = true;
	}
}

function not_all_ucc() {
	for(var i = 0; i < uccObjs.length; i++) {
		if(i == 0 || i == 1 || i == 2 || i == 4 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10 || i == 11 || i == 13 || i == 14 || i == 15 || i == 16) {
			if(uccObjs[i].checked == false) {
				return true;
			}
		}
		if(i == uccObjs.length - 1 && uccObjs[i].checked == true) {
			return false;
		}
	}
}
function is_all_core() {
	for(var i = 0; i < ucccrObjs.length; i++) {
		if(ucccrObjs[i].checked == true) {
			if(i == 0 || i == 3 || i == 5 || i == 6 || i == 12 || i == 13 || i == 14 || i == 15 || i == 16) {
				return false;
			}
		} else if(ucccrObjs[i].checked == false){
			if(i == 1 || i == 2 || i == 4 || i == 7 || i == 8 || i == 9 || i == 10 || i == 11) {
				return false
			}
		}
		if(i == ucccrObjs.length - 1 && ucccrObjs[i].checked == false) {
			return true;
		}
	}
}











