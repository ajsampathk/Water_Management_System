var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var al=0;
var start=4.72;
var diff;
var level=80;
var level1=90;
context.canvas.width=window.innerWidth;
context.canvas.height=window.innerHeight;
var cw=context.canvas.width;
var ch=context.canvas.height;

function progressBar(){

diff=(al/100)*Math.PI*2;
context.clearRect(0,0,400,200);
context.beginPath();

context.arc(cw/4,ch/2,ch/4,0,2*Math.PI,false);
context.fillStyle='#FFF';
context.fill();
context.strokeStyle='#e7f2fa';
context.stroke();

context.beginPath();
context.arc((cw-cw/4),ch/2,ch/4,0,2*Math.PI,false);
context.fillStyle='#FFF';
context.fill();
context.strokeStyle='#e7f2fa';
context.stroke();

context.fillStyle='#000';
context.strokeStyle='#b3cffc';
context.textAlign='center';
context.lineWidth=15;
context.font = '10pt Verdana';
context.beginPath();
context.arc(cw/4,ch/2,ch/4,start,diff+start,false);
context.stroke();
context.beginPath();
context.arc((cw-cw/4),ch/2,ch/4,start,diff+start,false);
context.stroke();
context.fillText(al+'%',cw/4,ch/2);
if(al>=level){
clearTimeout(bar);
}
al++;
}




var bar=setInterval(progressBar,15);
