/*Crane js*/
var poker = ['Aa', 'Ab', 'Ac', 'Ad',
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
             '2a', '2b', '2c', '2d',];
var cpoker = poker;
var cplayer = [];
var ccom =[];
var ctab =[];
var cnum = [];//get number of cards
var ccardside = false;
var cptomcard = [];
var cctopcard = [];
var cptops = document.getElementById('cptop');
var cctops = document.getElementById('cctop');
var cphands = document.getElementById('cphand');
var cchands = document.getElementById('cchand');
var cpnum = cplayer.length;
var ccnum = ccom.length;
var rdcount = 0;
document.getElementById('crd').innerHTML='Round: '+rdcount;
function csplit(){
    for (var i = cpoker.length -1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var k = cpoker[i];
        cpoker[i] = cpoker[j];
        cpoker[j] = k;
    }
    for (var i = 0; i<26 ;i++){
        cplayer.push(cpoker[i]);
        cpoker.splice(i,1);
    }
    ccom = cpoker;
    cpnum = cplayer.length;
    ccnum = ccom.length;
    cptops.innerHTML = "<div id='ccard1'></div>"
    document.getElementById('ccard1').style.backgroundImage="url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+ cplayer[0] + ".png')";
    cctops.innerHTML = "<div id='ccard2'></div>"
    document.getElementById('ccard2').style.backgroundImage="url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+ ccom[0] + ".png')";
    document.getElementById('cphand').innerHTML='Player'+cpnum;
    document.getElementById('cchand').innerHTML='Com'+ccnum;
    document.getElementById('bt1').style.display='none';
    document.getElementById('bt2').style.display='inline';
}


function cview(){
    document.getElementById('cstack').innerHTML = '';
    for(var i = 0; i<ctab.length; i++){
        document.getElementById('cstack').innerHTML += "<div class='ccard'></div>";
        document.getElementsByClassName('ccard')[i].style.backgroundImage="url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+ ctab[i] + ".png')";
    }
    // shift out
    cptopcard = cplayer.shift();//move card from hand to top
    // show first card
    document.getElementById('ccard1').style.backgroundImage="url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+ cplayer[0] + ".png')";
    var a = cnum.indexOf(cptopcard.slice(0,1));//index of repeated card
    if (a!=-1) {
        var temp = ctab.slice(a);
        // console.log(temp);
        console.log(cplayer);
        var nn = temp.length;
        for(var i = 0; i<nn;i++){
            var t = Math.floor(Math.random()*temp.length);
            cplayer.push(temp[t]);
            console.log(temp[t]);
            temp.splice(t, 1);
        }
        cplayer.push(cptopcard);
        console.log(cplayer);
        ctab.splice(a);
        cnum.splice(a);
        document.getElementById('cstack').innerHTML = '';
        for(var i = 0; i<ctab.length; i++){
            document.getElementById('cstack').innerHTML += "<div class='ccard'></div>";
            document.getElementsByClassName('ccard')[i].style.backgroundImage="url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+ ctab[i] + ".png')";
        }
    }
    else {
        ctab.push(cptopcard);
        cnum.push(cptopcard.slice(0,1));
        document.getElementById('cstack').innerHTML = '';
        for(var i = 0; i<ctab.length; i++){
            document.getElementById('cstack').innerHTML += "<div class='ccard'></div>";
            document.getElementsByClassName('ccard')[i].style.backgroundImage="url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+ ctab[i] + ".png')";
        }
    }
    if(cptopcard.slice(0,1)=='J'){
            cplayer = cplayer.concat(ctab);
            ctab = [];
            cnum = [];
            document.getElementById('cstack').innerHTML = '';
                for(var i = 0; i<ctab.length; i++){
                    document.getElementById('cstack').innerHTML += "<div class='ccard'></div>";
                    document.getElementsByClassName('ccard')[i].style.backgroundImage="url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+ ctab[i] + ".png')";
                }
        }
    cpnum = cplayer.length;
    document.getElementById('cphand').innerHTML='Player'+cpnum;
    console.log("\n");


    setTimeout(function(){
        cctopcard = ccom.shift(); //move card from hand to top
        document.getElementById('ccard2').style.backgroundImage="url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+ ccom[0] + ".png')";
        
        var b = cnum.indexOf(cctopcard.slice(0,1));
        if (b!=-1) {
            var temp = ctab.slice(b);
            console.log(ccom);
            var nn = temp.length;
            for(var i =0; i<nn;i++){
                var t = Math.floor(Math.random()*temp.length);
                console.log(temp[t]);
                ccom.push(temp[t]);
                temp.splice(t, 1);
            }
            ccom.push(cctopcard);
            console.log(ccom);
            ctab.splice(b);
            cnum.splice(b);
            document.getElementById('cstack').innerHTML = '';
            for(var i = 0; i<ctab.length; i++){
                document.getElementById('cstack').innerHTML += "<div class='ccard'></div>";
                document.getElementsByClassName('ccard')[i].style.backgroundImage="url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+ ctab[i] + ".png')";
            }
        } else {
            ctab.push(cctopcard);
            cnum.push(cctopcard.slice(0,1));
            document.getElementById('cstack').innerHTML = '';
            for(var i = 0; i<ctab.length; i++){
                document.getElementById('cstack').innerHTML += "<div class='ccard'></div>";
                document.getElementsByClassName('ccard')[i].style.backgroundImage="url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+ ctab[i] + ".png')";
            }
        }
        if(cctopcard.slice(0,1)=='J'){
                ccom=ccom.concat(ctab);
                ctab = [];
                cnum = [];
                document.getElementById('cstack').innerHTML = '';
                for(var i = 0; i<ctab.length; i++){
                    document.getElementById('cstack').innerHTML += "<div class='ccard'></div>";
                    document.getElementsByClassName('ccard')[i].style.backgroundImage="url('https://3cnan.github.io/ICS4U/HTML&CSS&JS/poker/"+ ctab[i] + ".png')";
                }
            }
        ccnum = ccom.length;//determine hand length
        document.getElementById('cchand').innerHTML='Com'+ccnum;//counter
        rdcount++;
        document.getElementById('crd').innerHTML='Round: '+rdcount;
        if (rdcount==20&&cplayer.length<ccom.length) {
            alert('Gameover.you lose, refresh to restart')
        }
        else if (rdcount==20&&ccom.length<cplayer.length) {
            alert('Gameover.you win, refresh to restart')
        }
    }, 200);
}
/*Crane JS ends here*/