var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var prog_bar_1=0;
var prog_bar_2=0;
var prog_bar_3=0;
var prog_bar_4=0;

var start=4.72;

var progress1;
var progress2;
var progress3;
var progress4;

var level_1=80;
var level_2=90;
var level_3=60;
var level_4=70;
// context.canvas.width=window.innerWidth-10;
// context.canvas.height=window.innerHeight-50;
canvas.width = canvas.parentNode.clientWidth;
canvas.height = canvas.parentNode.clientHeight;

var cw=context.canvas.width;
var ch=context.canvas.height;
var RADIUS=ch/6.5
var RUH = ch/3
var RLH = ch-ch/4
var RLW = cw/4
var RRW = cw-cw/4
// var bg='#c3d1dd'
var bg='#FFF'


function progressBar(){

progress1=(prog_bar_1/100)*Math.PI*2;
progress2=(prog_bar_2/100)*Math.PI*2;
progress3=(prog_bar_3/100)*Math.PI*2;
progress4=(prog_bar_4/100)*Math.PI*2;


context.clearRect(0,0,400,200);

//arc bg 1
context.beginPath();
context.arc(RLW,RUH,RADIUS,0,2*Math.PI,false);
context.fillStyle=bg;
context.fill();
context.strokeStyle='#e7f7fc';
context.stroke();

//arc bg 2
context.beginPath();
context.arc(RRW,RUH,RADIUS,0,2*Math.PI,false);
context.fillStyle=bg;
context.fill();
context.strokeStyle='#e7f7ff';
context.stroke();

//arc bg3
context.beginPath();
context.arc(RLW,RLH,RADIUS,0,2*Math.PI,false);
context.fillStyle=bg;
context.fill();
context.strokeStyle='#e7f7ff';
context.stroke();

//arc bg4
context.beginPath();
context.arc(RRW,RLH,RADIUS,0,2*Math.PI,false);
context.fillStyle=bg;
context.fill();
context.strokeStyle='#e7f7ff';
context.stroke();


// set attr
context.fillStyle=bg;
context.strokeStyle='#387ebb';


//draw progress 1
context.beginPath();
context.arc(RLW,RUH,RADIUS,start,progress1+start,false);
context.stroke();


//draw progress 2
context.beginPath();
context.arc(RRW,RUH,RADIUS,start,progress2+start,false);
context.stroke();

//draw progress 3
context.beginPath();
context.arc(RLW,RLH,RADIUS,start,progress3+start,false);
context.stroke();

//draw progress 4
context.beginPath();
context.arc(RRW,RLH,RADIUS,start,progress4+start,false);
context.stroke();


context.textAlign='center';
context.lineWidth=15;
context.font = 'bold 20pt Calibri';
context.fillStyle='#66BEFF';
context.fillText(prog_bar_1+'%',RLW,RUH);
context.fillText(prog_bar_2+'%',RRW,RUH);
context.fillText(prog_bar_4+'%',RRW,RLH);
context.fillText(prog_bar_3+'%',RLW,RLH);




    if(prog_bar_1>=level_1 && prog_bar_2>level_2 && prog_bar_3>level_3 && prog_bar_4>level_4)clearTimeout(bar);
    if(prog_bar_1<level_1)prog_bar_1++;
    if(prog_bar_2<level_2)prog_bar_2++;
    if(prog_bar_3<level_3)prog_bar_3++;
    if(prog_bar_4<level_4)prog_bar_4++;

}




var bar=setInterval(progressBar,25);
