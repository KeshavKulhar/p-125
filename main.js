
leftWristX=0;
rightWristX=0;
difference=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 100);
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}

function draw() {
    background('#cfbaf0');
    document.getElementById("square_side").innerHTML="font size of the text = "+difference+"px";
    textSize(difference);
    fill('red');
    text("Keshav",50,400);
}

function modelloaded() {
    console.log("posenet is initialized");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX = "+leftWristX+" rightWristX = "+rightWristX+" difference = "+difference);

    }
}