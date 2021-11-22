var currentstep = 0, sentence = 0, complete = false;
var sensitivity = 0, ability_coefficient = 0, age = 15, effort_energy = 8;
var count, hint = "There's no hint for this part.";
var hsc = false; ucc = false; job = false;

var sensitivityObj = document.getElementById("sensitivity");
var ability_coefficientObj = document.getElementById("ability_coefficient");
var effort_energyObj = document.getElementById("effort_energy");
var ageObj = document.getElementById("age");

window.onload = function() {
	freshdata();
	bgmObj.load();
}

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

var bgmObj = document.getElementById("bgmaudio");
bgmObj.volume = 0.5;
var completeObj = document.getElementById("completeaudio");
completeObj.volume = 0.9;

clickpartObj.onclick = function() {
	var clickObj = document.getElementById("clickaudio");
	clickObj.play();
	var clicktextObj = document.getElementById("clicktext");
	clicktextObj.innerHTML = "Click here to continue <br> Until (END) appear";
	var successObj = document.getElementById("successaudio");
	successObj.volume = 0.7;
	if(sentence == 51) {
		bgmObj.pause();
		bgmstate = false;
		successObj.play();
	} else if(sentence == 0) {
		bgmObj.play();
		bgmstate = true;
	}
	if(currentstep == 14 && sentence == 57) {
		if(if_job_choose() == false) {
			return;
		}
	}
	nextstep();
	freshdata();
}
hintbtnObj.onclick = function() {
	var clickObj = document.getElementById("clickaudio");
	clickObj.play();
	boxnumbers();
	if(hinttxtObj.innerHTML == "Hint") {
		hinttxtObj.innerHTML = hint;
		hinttxtObj.style.color = "black";
	} else {
		hinttxtObj.innerHTML = "Hint";
		hinttxtObj.style.color = "white";
	}
}

function boxnumbers() {	
	switch(currentstep) {
		case 0:
			count = 3;
			hint = "Hello! I'm Hint, nice to meet you, but there's no need for hint at this part.";
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
			hint = "There's no need for hint at this part.";
			break;
		case 7:
			count = 5 + (2 + 4 + 4 + 5 + 4 + 1 + 3);
			hint = "There's no need for hint at this part.";
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
			hint = "There's no need for hint at this part.";
			break;
		case 12:
			count = 6 + (5 + 3 + 4 + 4 + 5 + 2 + 4 + 4 + 5 + 4 + 1 + 3) ;
			hint = "There's no need for hint at this part.";
			break;
		case 13:
			count = 5 + (6 + 5 + 3 + 4 + 4 + 5 + 2 + 4 + 4 + 5 + 4 + 1 + 3) ;
			hint = "It's not a question at this part.";
			break;
		case 14:
			count = 2 + (5 + 6 + 5 + 3 + 4 + 4 + 5 + 2 + 4 + 4 + 5 + 4 + 1 + 3) ;
			hint = "Just choose what you want to do.";
			break;
		case 15:
			count = 5 + (5 + 5 + 6 + 5 + 3 + 4 + 4 + 5 + 2 + 4 + 4 + 5 + 4 + 1 + 3) ;
			hint = "There's no hint for your own life.";
			break;
		case 16:
			count = 4 + (5 + 5 + 5 + 6 + 5 + 3 + 4 + 4 + 5 + 2 + 4 + 4 + 5 + 4 + 1 + 3) ;
			hint = "There's no hint for your own life.";
			break;
		case 17:
			count = 5 + (4 + 5 + 5 + 5 + 6 + 5 + 3 + 4 + 4 + 5 + 2 + 4 + 4 + 5 + 4 + 1 + 3) ;
			hint = "There's no hint for your own life.";
			break;
		case 18:
			count = 5 + (5 + 4 + 5 + 5 + 5 + 6 + 5 + 3 + 4 + 4 + 5 + 2 + 4 + 4 + 5 + 4 + 1 + 3) ;
			hint = "There's no hint for your own life.";
			break;
		case 19:
			count = 5 + (5 + 5 + 4 + 5 + 5 + 5 + 6 + 5 + 3 + 4 + 4 + 5 + 2 + 4 + 4 + 5 + 4 + 1 + 3) ;
			hint = "There's no hint for your own life.";
			break;
		case 20:
			count = 5 + (5 + 5 + 5 + 4 + 5 + 5 + 5 + 6 + 5 + 3 + 4 + 4 + 5 + 2 + 4 + 4 + 5 + 4 + 1 + 3) ;
			hint = "There's no hint for your own life.";
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
	} else if(currentstep == 12 && sentence == 50) {
		if(ability_coefficient <= 45) {
			age += 7;
		} else if(ability_coefficient <= 55) {
			age += 6;
		} else if(ability_coefficient <= 60) {
			age += 5;
		} else if(ability_coefficient <= 65) {
			age += 4;
		} else if(ability_coefficient <= 70) {
			age += 3;
		}
		currentstep += 1;
		nextstep();
		console.log(0);
	} else if(currentstep == 15 && sentence == 65 && job == false) {
		if(complete == false) {
			bgmObj.pause();
			completeObj.play()
			complete = true;
		}
		decisionObjs[3].style.display = "none";
		textboxObjs[89].style.display = "table";
		return;
	} else if(currentstep == 16 && sentence == 69 && job == false) {
		if(complete == false) {
			bgmObj.pause();
			completeObj.play()
			complete = true;
		}
		decisionObjs[3].style.display = "none";
		textboxObjs[89].style.display = "table";
		return;
	} else if(currentstep == 17 && sentence == 74 && job == false) {
		if(complete == false) {
			bgmObj.pause();
			completeObj.play()
			complete = true;
		}
		decisionObjs[3].style.display = "none";
		textboxObjs[89].style.display = "table";
		return;
	} else if(currentstep == 18 && sentence == 79 && job == false) {
		if(complete == false) {
			bgmObj.pause();
			completeObj.play()
			complete = true;
		}
		decisionObjs[3].style.display = "none";
		textboxObjs[89].style.display = "table";
		return;
	} else if(currentstep == 19 && sentence == 84 && job == false) {
		if(complete == false) {
			bgmObj.pause();
			completeObj.play()
			complete = true;
		}
		decisionObjs[3].style.display = "none";
		textboxObjs[89].style.display = "table";
		return;
	} else if(currentstep == 20 && sentence == 89 && job == false) {
		if(complete == false) {
			bgmObj.pause();
			completeObj.play()
			complete = true;
		}
		decisionObjs[3].style.display = "none";
		textboxObjs[89].style.display = "table";
		return;
	} else {
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
	}
	if(currentstep == 2 || currentstep == 3 || currentstep == 4 || currentstep == 5) {
		decisionObjs[1].style.display = "block";
	}
	if(currentstep == 13) {
		decisionObjs[2].style.display = "block";
	}
	if(currentstep == 14) {
		decisionObjs[3].style.display = "block";
	}
	hsc = ucc = job = false;
	hscdcsn();
	uccdcsn();
	jobdcsn();
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
	var array = [0, 1, 2, 4, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16];
	for(var i = 0; i < uccObjs.length; i++) {
		if(array.includes(i)) {
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
	var falsearray = [0, 3, 5, 6, 12, 13, 14, 15, 16];
	var truearray = [1, 2, 4, 7, 8, 9, 10, 11];
	for(var i = 0; i < ucccrObjs.length; i++) {
		if(ucccrObjs[i].checked == true) {
			if(falsearray.includes(i)) {
				return false;
			}
		} else if(ucccrObjs[i].checked == false){
			if(truearray.includes(i)) {
				return false
			}
		}
		if(i == ucccrObjs.length - 1 && ucccrObjs[i].checked == false) {
			return true;
		}
	}
}
function selectshow() {
	var pathsObjs = document.getElementsByName("path");
	var avgObjs = document.getElementsByName("avg");
	var salaryObjs = document.getElementsByClassName("salary");
	for(var i = 0; i < pathsObjs.length; i++) {
		if(pathsObjs[i].checked) {
			salaryObjs[i].style.display = "inline-block";
		} else {
			salaryObjs[i].style.display = "none";
		}
	}
	for(var i = 0; i < avgObjs.length; i++) {
		if(avgObjs[i].checked) {
			if(i == 0) {
				salaryObjs[4].style.display = "inline-block";
				salaryObjs[5].style.display = "inline-block";
				salaryObjs[6].style.display = "inline-block";
			} else if(i == 1) {
				salaryObjs[7].style.display = "inline-block";
			}
		} else {
			if(i == 0) {
				salaryObjs[4].style.display = "none";
				salaryObjs[5].style.display = "none";
				salaryObjs[6].style.display = "none";
			} else if(i == 1) {
				salaryObjs[7].style.display = "none";
			}
		}
	}
}

var bgmObj = document.getElementById("bgmaudio");
var bgmstate = false;

function if_bgm_ing() {
	if(bgmstate == false) {
		bgmObj.play();
		bgmstate = true;
	} else {
		bgmObj.pause();	
		bgmstate = false;	
	}
}
function bgmplay() {
	bgmObj.play();
	bgmstate = true;
}

var jobbtnObjs = document.getElementsByClassName("jobbtn");
var pcstate = false; afstate = false; gstate = false;

function PCshow() {
	if(sentence != 57) {
		return;
	}
	if(pcstate == false) {
		textboxObjs[58].style.display = "none";
		textboxObjs[59].style.display = "none";
		afstate = gstate = false;
		textboxObjs[57].style.display = "table";
		pcstate = true;
	}
}
function AFshow() {
	if(sentence != 57) {
		return;
	}
	if(afstate == false) {
		textboxObjs[57].style.display = "none";
		textboxObjs[59].style.display = "none";
		pcstate = gstate = false;
		textboxObjs[58].style.display = "table";
		afstate = true;
	}
}
function Gshow() {
	if(sentence != 57) {
		return;
	}
	if(gstate == false) {
		textboxObjs[57].style.display = "none";
		textboxObjs[58].style.display = "none";
		pcstate = afstate = false;
		textboxObjs[59].style.display = "table";
		gstate = true;
	}
}

var jobObjs = document.getElementsByName("job");
function if_job_choose() {
	for(var i = 0; i < jobObjs.length; i++) {
		if(jobObjs[i].checked) {
			return true;
		} else if(i == jobObjs.length - 1) {
			return false;
		}
	}
}
function which_job_choose() {
	for(var i = 0; i < jobObjs.length; i++) {
		if(jobObjs[i].checked) {
			return i;
		}
	}
}

function jobdcsn() {
	var plusageObjs = document.getElementsByClassName("plusage");
	if(currentstep == 14 && sentence == 57) {
		if(which_job_choose() == 0) {
			if(ability_coefficient > 55) {
				plusageObjs[0].innerHTML += "at " + age + ".";
				sentence += 3;
				job = true;
			} else {
				plusageObjs[1].innerHTML += "at " + age + ".";
				currentstep += 1;
				sentence += 5 + 3;
				job = true;
			}
		} else if(which_job_choose() == 1) {
			if(ability_coefficient > 55) {
				plusageObjs[2].innerHTML += "at " + age + ".";
				currentstep += 2;
				sentence += 4 + 5 + 3;
				job = true;
			} else {
				plusageObjs[3].innerHTML += "at " + age + ".";
				currentstep += 3;
				sentence += 5 + 4 + 5 + 3;
				job = true;
			}
		} else if(which_job_choose() == 2) {
			if(ability_coefficient > 60) {
				plusageObjs[4].innerHTML += "at " + age + ".";
				currentstep += 4;
				sentence += 5 + 5 + 4 + 5 + 3;
				job = true;
			} else {
				age += 1;
				plusageObjs[5].innerHTML += "at " + age + ".";
				currentstep += 5;
				sentence += 5 + 5 + 5 + 4 + 5 + 3;
				job = true;
			}
		}
	}
}









