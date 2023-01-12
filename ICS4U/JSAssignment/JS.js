window.onload = alert(new Date());
function to_happy() {
	var faceObj = document.getElementById("face");
	faceObj.src = "https://thumbs.dreamstime.com/b/smiley-vector-happy-face-yellow-94248929.jpg";
}
function to_sad() {
	var faceObj = document.getElementById("face");
	faceObj.src = "https://thumbs.dreamstime.com/b/sad-smiley-face-6335284.jpg";
}


var switch_txt = false;
function change_txt() {
	var txtObj = document.getElementById("txt1");
	var content = ["This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph.", "This is new paragraph. This is new paragraph. This is new paragraph. This is new paragraph. This is new paragraph. This is new paragraph."];
	switch_txt = !switch_txt;
	txtObj.innerHTML = content[+switch_txt];
}


function change_style() {
	var txtObj = document.getElementById("txt2");
	txtObj.style.backgroundColor = "lightblue";
	txtObj.style.fontFamily = "cursive";
	txtObj.style.textAlign = "center";
}


function f2c() {
	var txtObj = document.getElementById("txt3");
	var F = 20;
	txtObj.innerHTML = Math.floor(((F - 32) * 5 / 9) * 100) / 100 + "°C";
}


function add() {
	var txtObj = document.getElementById("txt4");
	var num1 = parseFloat(document.getElementById("fnum").value);
	var num2 = parseFloat(document.getElementById("snum").value);
	txt4.innerHTML = num1 + num2;
}


function greet() {
	var txtObj = document.getElementById("txt5");
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	txtObj.innerHTML = "Nice to meet you " + fname + " " + lname + "!";
}