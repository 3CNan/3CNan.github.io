function searchchange() {
	var searchBtnObj = document.getElementById("searchBtn");
	var searchOpsObj = document.getElementById("searchOps");
	var searchTextObj = document.getElementById("searchText");
	var searchObj = document.getElementById("search");
	if(searchOps.options[0].selected) {
		searchBtnObj.value = "Google";
		searchBtnObj.style.backgroundColor = "darkmagenta";
		searchTextObj.name = "q";
		searchObj.action = "http://www.google.com/search";
	} else if(searchOps.options[1].selected) {
		searchBtnObj.value = "Baidu";
		searchBtnObj.style.backgroundColor = "blue";
		searchTextObj.name = "wd";
		searchObj.action = "https://www.baidu.com/s"
	} else if(searchOps.options[2].selected) {
		searchBtnObj.value = "Bing";
		searchBtnObj.style.backgroundColor = "#317ef3";
		searchTextObj.name = "q";
		searchObj.action = "https://cn.bing.com/search";
	} else if(searchOps.options[3].selected) {
		searchBtnObj.value = "360";
		searchBtnObj.style.backgroundColor = "#19b955";
		searchTextObj.name = "q";
		searchObj.action = "https://www.so.com/s";
	} else if(searchOps.options[4].selected) {
		searchBtnObj.value = "Sogou";
		searchBtnObj.style.backgroundColor = "#fd6853";
		searchTextObj.name = "query";
		searchObj.action = "https://www.sogou.com/web"
	}
}

var dis;
function lengthen() {
	var gamelistObj = document.getElementById("gamelist");
	var fgtitleObj = document.getElementById("fgtitle");
	var menuObj = document.getElementById("menu");
	var bodyObj = document.getElementsByTagName("body");
	var bodytop = parseInt(getComputedStyle(bodyObj[0]).paddingTop);
	var fgheight = Calcheight(fgtitleObj);
	var menuheight = Calcheight(menuObj);
	var above = bodytop + fgheight + menuheight;

	dis = document.body.scrollTop || document.documentElement.scrollTop;
	
	var top = above - dis;
	if(dis > above) {
		gamelistObj.style.top = "0px";
	} else if(dis < above) {
		gamelistObj.style.top = top + "px";	
	}
}
function show() {
	var topBtnObj = document.getElementById("topBtn");
	var bottomBtnObj = document.getElementById("bottomBtn");
	dis = document.body.scrollTop || document.documentElement.scrollTop;
	if(dis > 170) {
		topBtnObj.style.display = "block";
		bottomBtnObj.style.display = "block";
	} else {
		topBtnObj.style.display = "none";
		bottomBtnObj.style.display = "none";
	}
}
function Calcheight(obj) {
	var height = parseInt(getComputedStyle(obj).height);
	var padding = parseInt(getComputedStyle(obj).paddingTop) + parseInt(getComputedStyle(obj).paddingBottom);
	var border =  parseInt(getComputedStyle(obj).borderTop) +  parseInt(getComputedStyle(obj).borderBottom);
	var margin = parseInt(getComputedStyle(obj).marginTop) + parseInt(getComputedStyle(obj).marginBottom);
	return height + padding + border + margin;
}


var Ttimer, Btimer;

function totop() {
	cancelAnimationFrame(Ttimer);
	Ttimer = requestAnimationFrame(back);
}
function back(){
	var Tspace = document.body.scrollTop || document.documentElement.scrollTop;
	if(Tspace > 0) {
		document.body.scrollTop = document.documentElement.scrollTop = Tspace - 120;
		Ttimer = requestAnimationFrame(back);
	} else {
		cancelAnimationFrame(Ttimer);
	} 
}
function tobottom() {
	cancelAnimationFrame(Btimer);
	Btimer = requestAnimationFrame(go);
}
function go() {
	var old = document.body.scrollTop || document.documentElement.scrollTop;
	document.body.scrollTop = document.documentElement.scrollTop += 120;
	var fresh = document.body.scrollTop || document.documentElement.scrollTop;
	if(fresh == old) {
		cancelAnimationFrame(Btimer);
	} else {
		Btimer = requestAnimationFrame(go);					
	}
}
var dostatus = true, reladis = 0;
function descriptionopen() {
	var desciptionObjs = document.getElementsByClassName("descriptions");
	var detailsObjs = document.getElementsByClassName("desdetails");
	var expendBtnObjs = document.getElementsByClassName("expandBtn");
	var abcp1Obj = document.getElementById("abc_object1");
	var abcp2Obj = document.getElementById("abc_object2");


	if(dostatus == true) {
		for(let i = 0; i < desciptionObjs.length; i++) {
			detailsObjs[i].style.display = "block";
			desciptionObjs[i].style.borderRadius = "12px 12px 0 0";
			expendBtnObjs[i].style.borderRadius = "0 12px 0 0";
		}
		reladis = 110;
		abcp1Obj.style.transition = "none";
		abcp2Obj.style.transition = "none";
		dostatus = false;
	} else if(dostatus == false) {
		for(let i = 0; i < desciptionObjs.length; i++) {
			detailsObjs[i].style.display = "none";
			desciptionObjs[i].style.borderRadius = "12px";
			expendBtnObjs[i].style.borderRadius = "0 12px 12px 0";
		}
		reladis = 0;
		dostatus = true;
	}
	abcp1Obj.style.top = 756 + reladis + "px";
	abcp2Obj.style.top = 346 + reladis + "px";
}


var upspeed = 8000, spi = 0, speed = 30, newtop;
var abcp2Obj = document.getElementById("abc_object2");
var abcp1Obj = document.getElementById("abc_object1");
abcp2Obj.style.top = "346px";
abcp2Obj.style.left = "436px";

document.onkeydown = function(event) {
	if(time == 0) {
		return;
	}
	abcp2Obj.style.transition = "300ms";
	abcp1Obj.style.transition = upspeed + "ms";
	// 37 = left, 38 = top, 39 = right, 40 = bottom
	var oldtop = abcp2Obj.style.top;
	var oldleft = abcp2Obj.style.left;

	if(parseInt(oldtop) > (756 + reladis)) {
		abcp1Obj.style.top = 756 + reladis + "px";
	} else {
		abcp1Obj.style.top = oldtop;
	}

	if(parseInt(oldleft) > 1166) {
		abcp1Obj.style.left = "1166px";
	} else {
		abcp1Obj.style.left = oldleft;
	}

	if(event.keyCode == 37) {
		abcp2Obj.style.left = abcp2Obj.offsetLeft - speed + "px";
	}
	if(event.keyCode == 39) {
		abcp2Obj.style.left = abcp2Obj.offsetLeft + speed + "px";
	}
	var newleft = parseInt(abcp2Obj.style.left);
	if(newleft <= 436 || newleft >= 1236) {
		abcp2Obj.style.left = oldleft;
	}

	var dis1 = Math.abs(newleft - 436);
	var dis2 = Math.abs(1236 - newleft);
	var dis3, dis4;
	if(dis1 < speed) {
		abcp2Obj.style.left = "436px";
	}
	if(dis2 < speed) {
		abcp2Obj.style.left = "1236px";
	}
	if(event.keyCode == 38) {
		abcp2Obj.style.top = abcp2Obj.offsetTop - speed + "px";
		newtop = parseInt(abcp2Obj.style.top);
		if(newtop <= (346 + reladis)) {
			abcp2Obj.style.top = oldtop;
		}
		dis3 = Math.abs(newtop - (346 + reladis));
		if(dis3 < speed) {
			abcp2Obj.style.top = 346 + reladis + "px";
		}
		return false;
	}
	if(event.keyCode == 40) {
		abcp2Obj.style.top = abcp2Obj.offsetTop + speed + "px";
		newtop = parseInt(abcp2Obj.style.top);
		if(newtop >= (826 + reladis)) {
			abcp2Obj.style.top = oldtop;
		}
		dis4 = Math.abs((826 + reladis) - newtop);
		if(dis4 < speed) {
			abcp2Obj.style.top = 826 + reladis + "px";
		}
		return false;
	}	
}

function isCrash(p1,p2) {
	var p1Dis = p1.getBoundingClientRect();
	var p2Dis = p2.getBoundingClientRect();

	if(p1Dis.right < p2Dis.left || p1Dis.bottom < p2Dis.top || p1Dis.left > p2Dis.right || p1Dis.top > p2Dis.bottom) {
		return 0;
	} else {
		return 1;
	}
}



var time = 0, scorecombine = 0;
var abcMinObj = document.getElementById("abcMin");
var abcSecObj = document.getElementById("abcSec");
var abcMsecObj = document.getElementById("abcMsec");
var speedshowObj = document.getElementById("speedtext");
function abc_timestart() {
	clearInterval(abcTimer);
	abcTimer = setInterval(function() {
		if(isCrash(abcp1Obj,abcp2Obj) == 1) {
			alert("Game Over!");
			clearInterval(abcTimer);
			clearInterval(scoreTimer);
			time = 0;
			abcp1Obj.style.backgroundColor = "pink";
			speedshowObj.innerHTML = "Current Speed: Level 0";

			return;
		}
		time++;
		var ms = partadd("00", time%60);
		var sec = partadd("00", parseInt((time/60)%60));
		var min = partadd("00", parseInt(time/60/60));
		abcMsecObj.innerHTML = ms;
		abcSecObj.innerHTML = sec;
		abcMinObj.innerHTML = min;
		if(sec == 20 && ms == 0 || sec == 40 && ms == 0 || sec == 0 && min > 0 && ms == 0) {
			upspeed -= 1000;
		}
		if(upspeed <= 1000) {
			upspeed = 1000;
		}
		if(min == 3) {
			clearInterval(scoreTimer);
			abc_reset();
			alert("Congratulations!");
		}
		speedshowObj.innerHTML = "Current Speed: Level " + (9 - (upspeed/1000));
	}, 16.5);
}
var abcTimer, scoreTimer;
function partadd(digit, number) {
	number += "";
	var zeropre = digit.length - number.length;
	return digit.substr(0, zeropre) + parseInt(number) + digit.substr(zeropre + number.length);
}

function abc_reset() {
	clearInterval(abcTimer);
	time = 0;
	abcp1Obj.style.backgroundColor = "red";
	abcp2Obj.style.top = 346 + reladis + "px";
	abcp2Obj.style.left = "436px";
	abcp1Obj.style.top = 756 + reladis + "px";
	abcp1Obj.style.left = "1166px";
	abcMsecObj.innerHTML = abcSecObj.innerHTML = abcMinObj.innerHTML = "00";
	abcp2Obj.style.transition = abcp1Obj.style.transition = "none";
	speedshowObj.innerHTML = "Current Speed: Level 0";
	upspeed = 8000;
	score = 0;
	scoreObj.style.display = "none";
	scoretextObj.innerHTML = "Score: 0000";
}
var score = 0;
var scoretextObj = document.getElementById("scoretext");
var scoreObj = document.getElementById("randomlocscore");

function abc_start() {
	var abcp2Obj = document.getElementById("abc_object2");
	var abcp1Obj = document.getElementById("abc_object1");
	abcp1Obj.style.backgroundColor = "red";
	abcp1Obj.style.top = 346 + reladis + "px";
	abcp1Obj.style.left = "436px";
	abcp1Obj.style.transition = "10s";
	var locX = Math.floor(Math.random() * 820) + 1 + 436;
	var locY = Math.floor(Math.random() * 460) + 1 + 346 + reladis;
	var si = 0;
	clearInterval(scoreTimer);
	scoreTimer = setInterval(function() {
		
		scoreObj.style.display = "block";
		scoreObj.style.top = locY + "px";
		scoreObj.style.left = locX + "px";
		isCrash(scoreObj, abcp2Obj);
		if(isCrash(scoreObj, abcp2Obj) == 1) {
			scoreObj.style.display = "none";
			locX = Math.floor(Math.random() * 820) + 1 + 436;
			locY = Math.floor(Math.random() * 460) + 1 + 346 + reladis;
			score += 100;
			scorecombine += 100;
			si = 0;
		} else {
			si++;
			if(si > 7) {
				scoreObj.style.display = "none";
				locX = Math.floor(Math.random() * 820) + 1 + 436;
				locY = Math.floor(Math.random() * 460) + 1 + 346 + reladis;
				si = 0;
			}
		}
		scoretextObj.innerHTML = "Score: " + partadd("0000", score);
	}, 1000)
}


var gamenameObjs = document.getElementsByClassName("gamename");
var gameareaObjs = document.getElementsByClassName("gamearea");
var scoretextObj2 = document.getElementById("scoretext2");

gamenameObjs[0].onclick = function abcappear() {
	for(var i = 0; i < gameareaObjs.length; i++) {
		gameareaObjs[i].style.display = "none";
	}
	gameareaObjs[0].style.display = "block";
}
gamenameObjs[1].onclick = function() {
	for(var i = 0; i < gameareaObjs.length; i++) {
		gameareaObjs[i].style.display = "none";
	}
	gameareaObjs[1].style.display = "block";
	scoretextObj2.innerHTML = "All your scores: " + partadd("00000", scorecombine);
}
gamenameObjs[2].onclick = function() {
	for(var i = 0; i < gameareaObjs.length; i++) {
		gameareaObjs[i].style.display = "none";
	}
	gameareaObjs[2].style.display = "block";
}

window.onload = function() {
	gameareaObjs[0].style.display = "block";
}


var Dtimer, Dstatus = true;
var startaudioObj = document.getElementById("startaudio");
var stopaudioObj = document.getElementById("stopaudio");
var lotteryBox2Objs = document.getElementsByClassName("lotteryBox2");
var text0Obj = document.getElementById("text0");
Di = 0, Dn = 0;

function drawlot() {
	clearInterval(Dtimer);
	stopaudioObj.pause()
	startaudioObj.play();
	Dtimer = setInterval(lotrandom, 170);
	Dstatus = false;
}
function lotrandom() {
	var lotteryBoxsObjs = document.getElementsByName("lotteryBoxs");
	var round = Math.round(Math.random()*5 + 17) + Dn;
	for(var i = 0; i < lotteryBoxsObjs.length; i++) {
		lotteryBoxsObjs[i].className = "lotteryBox";
	}
	if(Di%8 < 3) {
		lotteryBoxsObjs[Di%8].className = "lotteryBox2";
	} else if(Di%8 == 3) {
		lotteryBoxsObjs[4].className = "lotteryBox2";
	} else if(Di%8 > 3 && Di%8 < 7) {
		switch(Di%8) {
			case 4:
				lotteryBoxsObjs[7].className = "lotteryBox2"; break;
			case 5:
				lotteryBoxsObjs[6].className = "lotteryBox2"; break;
			case 6:
				lotteryBoxsObjs[5].className = "lotteryBox2"; break;
		}
	} else if(Di%8 == 7) {
		lotteryBoxsObjs[3].className = "lotteryBox2";
	}
	Di++;
	if(Di > round) {
		startaudioObj.pause();
		stopaudioObj.play();
		clearInterval(Dtimer);
		Dstatus = true;
		Di = Di%8;
		Dn = Di;
		text0Obj.innerHTML = "Congratulations, you get " + lotteryBox2Objs[0].title + "！";
		scorecombine += parseInt(lotteryBox2Objs[0].title);
		scoretextObj2.innerHTML = "All your scores: " + partadd("00000", scorecombine);
	} 
}




var TRtimer, TRtimer2, TRstatus = true, degree = 360, degcount = 7, degi = 0, degii = 0, dtime = 0, speedrandom;
var turnplateObj = document.getElementById("turnplate");
function turnround() {
		cancelAnimationFrame(TRtimer);
		TRtimer = requestAnimationFrame(turnrunning);
		TRstatus = false;
		speedrandom = Math.floor(Math.random() * 181) + 180;
}
function turnrunning() {
	degcount = 7;
	degi = 0;
	degii = 0;

	degree -= degcount;
	turnplateObj.style.transform = "rotate(" + degree + "deg)";
	turnplateObj.style.transition = "none";

	if(TRstatus == false) {
		TRtimer = requestAnimationFrame(turnrunning);
	}
	if(degree <= 0 ) {
		degree = 360;
	}
	if(Math.abs(degree - speedrandom) <= degcount) {
		dtime++;
	}
	if(dtime == 2) {
		dtime = 0;
		cancelAnimationFrame(TRtimer);
		cancelAnimationFrame(TRtimer2);
		TRtimer2 = requestAnimationFrame(turnstopping);
		TRstatus = true;
	}
}
function turnstopping() {
	var n, speed = 20;
	if(degree <= 0 ) {
		degree = 360;
	}
	degree -= degcount;
	turnplateObj.style.transform = "rotate(" + degree + "deg)";
	if(TRstatus == true) {
		TRtimer2 = requestAnimationFrame(turnstopping);
	}
	if(degi > speed) {
		degcount -= 1;
		degi = 0;
	}
	if(degii > 4) {speed = Math.floor(Math.random() * 21) + 30;}
	else if(degii > 6) {speed = Math.floor(Math.random() * 41) + 50;}
	else {degii++;}

	degi++;
	var compare = Math.abs(degree%36 - 18);
	if (degcount < 0) {
		if(compare >= 12) {n = 6;}
		else if(compare >= 8 && compare < 12) {n = 4;}
		else if(compare >= 4 && compare < 8) {n = 2;}
		else if(compare >= 0 && compare < 4) {n = 1;}

		if(degree%36 < 18) {
			degree += 18 - degree%36;
		} else if (degree%36 > 18) {
			degree -= degree%36 - 18;
		}
		turnplateObj.style.transform = "rotate(" + degree + "deg)";
		turnplateObj.style.transition = n + "s";
		var price = parseInt(degree/36);
		var array = ["Second","First","Tenth","Ninth","Eighth","Seventh","Sixth","Fifth","Fourth","Third"];
		text0Obj.innerHTML = "Congratulations, you get " + array[price] + " price！";
		cancelAnimationFrame(TRtimer2);
	}
}