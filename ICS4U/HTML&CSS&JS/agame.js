var user1 = [];
var user2 = [];
var original=['Aa', 'Ab', 'Ac', 'Ad',
              'Ka', 'Kb', 'Kc', 'Kd',
              'Qa', 'Qb', 'Qc', 'Qd',
              'Ja', 'Jb', 'Jc', 'Jd',
              '0a', '0b', '0c', '0d',
              '9a', '9b', '9c', '9d',
              '8a', '8b', '8c', 'KK',
              '7a', '7b', '7c', '7d',
              '6a', '6b', '6c', '6d',
              '5a', '5b', '5c', '5d',
              '4a', '4b', '4c', '4d',
              '3a', '3b', '3c', '3d',
              '2a', '2b', '2c', '2d'];
var endtxtObj = document.getElementById("endtxt");
function qc(user){
  var newuser= [];
  var newuser_color = [];
  for(var i = 0; i < user.length;i++) {
    if (user[i] == "KK") {
      newuser.push("KK");
      newuser_color.push("");
      continue;
    }
    var a = newuser.indexOf(user[i].slice(0,1));
    if (a == -1) {
      newuser.push(user[i].slice(0,1));
      newuser_color.push(user[i].slice(1));
    } else {
      newuser.splice(a,1);
      newuser_color.splice(a,1);
    }
  }
  /* console.log(newuser);
  console.log(newuser_color); */
  /* console.log(user1); */
  for(var i=0;i<newuser.length;i++){
    if (newuser_color[i] == "e") {
      continue;
    }
    newuser[i]+=newuser_color[i];
  }
  return newuser;
}
var aa = 0;
var bb = 0;
var ran;
var area_ai=document.getElementById('area_ai');
var area_me=document.getElementById('area_me');
var card_me = document.getElementsByClassName('card_me');
var card_ai = document.getElementsByClassName('card_ai');
for (var i = 0; i < 26; i++) {
  ran = Math.floor(Math.random() * original.length);
  user1.push(original[ran]);
  area_me.innerHTML +="<div class='card_me'></div>";
  card_me[aa].style.backgroundImage="url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+ original[ran] +".png')";
  aa++;
  original.splice(ran, 1);
  ran = Math.floor(Math.random() * original.length);
  user2.push(original[ran]);
  original.splice(ran, 1);
  area_ai.innerHTML +="<div class='card_ai'></div>";
  card_ai[bb].style.backgroundImage="url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+"00.png')";
  bb++;
}
/* console.log(user1); */
/* console.log(user2); */

function newcard_me(){
  user1=qc(user1);
  area_me.innerHTML="";
  aa=0;
  for(var i=0;i<user1.length;i++) {
    area_me.innerHTML +="<div class='card_me'></div>";
    card_me[aa].style.backgroundImage="url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+ user1[i] +".png')";
    aa++;
    document.getElementById('removecard').style.display= 'none';
  }
  newcard_ai();
}
console.log(user1);

function newcard_ai(){
  user2=qc(user2);
  area_ai.innerHTML="";
  bb=0;
  for(var i=0;i<user2.length;i++) {
    area_ai.innerHTML +="<div class='card_ai' onclick='add(user1, user2," + i +")'></div>";
    card_ai[bb].style.backgroundImage="url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+"00.png')";
    bb++;
    document.getElementById('removecard').style.display= 'none';
  }}
console.log(user2);

function add(u1, u2, p){
// var isend = false;
  u1.push(u2[p]);
  u2.splice(p,1);
  b = Math.floor(Math.random()*user1.length);
  u2.push(u1[b]);
  u1.splice(b,1);
  newcard_me();
  newcard_ai();
  if(user1.length == 2 && user1.indexOf('KK')!= -1 && (user1.indexOf("8a")!= -1 || user1.indexOf("8b")!= -1 || user1.indexOf("8c")!= -1)) {
    theend(false);
    console.log("fail");
  } else if (user2.length == 2 && user2.indexOf('KK')!= -1 && (user2.indexOf("8a")!= -1 || user2.indexOf("8b")!= -1 || user2.indexOf("8c")!= -1)) {
    theend(true);
    console.log("win");
  }
}

function theend(bool){
   if (bool){
    document.getElementById('winner').innerHTML="You Win!";
  } else{
    document.getElementById('winner').innerHTML="You Lose...";
  }
  document.getElementById('restart').innerHTML="Click to restart";
}