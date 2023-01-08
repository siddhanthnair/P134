
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
img="";
status="";
image=[];

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw(){
    image (img, 0, 0, 640, 420);

    if(status= !="")
    {
        r= random(255);
        g= random(255);
        b= random(255);
        objectDetector.detect(video, gotResult);
    
        for(i=0; i< image.length; i++)
            {
                document.getElementById("status").innerHTML = "Status: Image Detected";
                document.getElementById("number_of_images") = "Number of objects detected are:"+ objects.length;

                fill(r,g,b);
                percent= floor(images[i].confidence * 100);
                text(images[i].label + "" + percent + "%", images[i].x, images[i].y);
                noFill();
                stroke(r,g,b);
                rect(images[i].x, images[i].y, images[i].width, images[i].height);
            }
    }
    
}

