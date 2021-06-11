sound="";
status="";
objects=[];

function preload() {
    sound = loadSound('alarm.mp3');
}

function setup() {

    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    objectdetector = ml5.objectdetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}

function draw() {
    image(video,0,0,380,380); 

    if (status != "") {
        r = random(255);
        g = random(255);
        b = random(255); 
        objectDetector.detect(video,gotResult);
        for ( i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML ="Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + objects.length;
            fill(r,g,b);
            percent = floor(objects [i].condifidence*100);
            text(object[i].label + " " + percent +  "%" , objects[i].x + 15, object[i].y + 15);
            nofill();
            stroke(r,g,b);
            rect(object[i].x ,  object[i].y , object[i].width , object[i].height);
        }
    }
    fill("#FF0000");
    text("Dog" , 45 , 75);
    nofill();
    stroke("#FF0000");
    rect(30 ,60 ,450 ,350 );
    fill("#FF0000");
    text("Cat",320,120);
    nofill();
    stroke("#FF0000");
    rect(300 ,90 ,270 ,320 );

}

function modelLoaded() {
    console.log("Model loaded!");
    status=true;
    objectdetector.detect(video,gotResult); 
}

function gotResult(error , results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}