var backObj = document.getElementById("back");
var a = 0;
var opaqObj = document.getElementsByClassName("opaq1")
var img_opaq = ["https://images.ctfassets.net/3s5io6mnxfqz/1WMlvdFuSr5jRWfg1jF9vL/2a9f65cc9d3fb456c9d9085dd1059034/AdobeStock_124534065.jpeg", 
	"https://imageio.forbes.com/specials-images/dam/imageserve/1051931270/960x0.jpg?format=jpg&width=960",
	"https://picx.zhimg.com/v2-af1d4102ae85cf6951251302d5c23201_720w.jpg?source=172ae18b",
	"https://play-lh.googleusercontent.com/B-R4QIn2BFrEYEI37MGSoZSAEKBRatVB8MSm_W2QG_kdo1Qkoty5a3ya2tntxsmIGA"];
var box_opaqObjs = document.getElementsByClassName("box_opaq");
for (var i = 0; i < img_opaq.length; i++) {
	opaqObj[i].style.background = "url('" + img_opaq[i] + "') 50% center / cover fixed";
}
var is_start1 = true, is_start2 = true, is_start3 = true, is_start4 = true;
document.addEventListener("scroll", function(){
	var i = document.documentElement.scrollTop;
	// console.log(i);
	if (is_start1 && i > 500) {
		box_opaqObjs[0].classList.add("fade_in");
		is_start1 = false;
	} else if (is_start2 && i > 1400) {
		box_opaqObjs[1].classList.add("fade_in");
		is_start2 = false;
	} else if (is_start3 && i > 2300) {
		box_opaqObjs[2].classList.add("fade_in");
		is_start3 = false;
	} else if (is_start4 && i > 3200) {
		box_opaqObjs[3].classList.add("fade_in");
		is_start4 = false;
	}
});
box_opaqObjs[0].addEventListener("animationend", function(){
	box_opaqObjs[0].style.opacity = "1";
});
box_opaqObjs[1].addEventListener("animationend", function(){
	box_opaqObjs[1].style.opacity = "1";
});
box_opaqObjs[2].addEventListener("animationend", function(){
	box_opaqObjs[2].style.opacity = "1";
});
box_opaqObjs[3].addEventListener("animationend", function(){
	box_opaqObjs[3].style.opacity = "1";
});
