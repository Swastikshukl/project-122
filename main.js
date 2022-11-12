x=0;
y=0;
draw_apple="";
screen_width=0;
screen_height=0;
apple="";
to_number=0;
speak_data="";

var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
 function start(){
    document.getElementById("status").innerHTML="system is listening please speak";
    recognition.start();

 }
 recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("status").innerHTML="the speech has been recognized as:"+content;
if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML="started drawing apple";
    draw_apple="set";

}
else{
    document.getElementById("status").innerHTML="the speech has not recognized the number";
}
 }
 function setup(){
    canvas=createCanvas(screen_width,screen_height-150);
    canvas.postion(0,150);


 }

 function draw() { if(draw_apple == "set") { for(var i = 1 ; i <= to_number; i++) { x = Math.floor(Math.random() * 700);
     y = Math.floor(Math.random() * 400); image(apple, x, y, 50, 50); } document.getElementById("status").innerHTML = to_number + " Apples drawn"; 
     speak_data = to_number + "Apples drawn";
  speak(); draw_apple = ""; } }
  function preload() { apple = loadImage("apple.png"); }