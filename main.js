img="";
status="";

function preload()
{
    img=loadImage('cat-mouse.jpg')
}

function setup()
{
    canvas=createCanvas(640, 240)
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded()
 {
     console.log("Model Loaded!")
     status=true;
     objectDetector.detect(img, gotResult);
 }

function gotResult (error, result)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}

function draw()
{
    image(img, 0, 0, 640, 240);
    fill("FF0000");
    text("Dog", 45, 75);
    nofill();
    stroke("FF0000");
    rect(30, 60, 450, 350 );

    fill("FF0000");
    text("Cat", 320, 120);
    nofill();
    stroke()
    rect(300, 90, 270, 320 );
}