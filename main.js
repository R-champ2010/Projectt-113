function preload(){

}

function setup() {
    canvas=createCanvas(640,500);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video, 195, 150, 250, 220);
    stroke(6, 77, 17);
    fill(6, 77, 17);
    rect(30, 30, 600, 15);
    rect(30,450,600,15);
    rect(615,30,15,425);
    rect(30,30,15,425);
    fill(255,0,0);
    stroke(255,0,0);
    circle(40, 30, 42);
    circle(40, 450, 42);
    circle(615, 30, 42);
    circle(615, 450, 42);
    

    
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}