let video;
let yolo;
let status;
let objects = [];

function setup() {
  createCanvas(720	, 576);
  frameRate(60);
  video = createCapture(VIDEO);

  // Create a YOLO method
  yolo = ml5.YOLO(video, startDetecting);
  
  // Hide the original video
  video.hide();
  status = createP("Model is Loading...").id("#status")
}

function draw() {
  image(video, 0, 0, height, 480);
  for (let i = 0; i < objects.length; i++) {
    noStroke();
    fill(0, 255, 0);
    text(objects[i].className, objects[i].x*width, objects[i].y*height - 5);
    noFill();
    strokeWeight(4);
    stroke(0,255, 0);
    rect(objects[i].x*width, objects[i].y*height, objects[i].w*width, objects[i].h*height);
  }
}

function startDetecting() {
  status.html('Model loaded!');
  detect();
}

function detect() {
  yolo.detect(function(err, results){
	if (err) {
		console.error(err);
	}
	  else {
    objects = results;
    detect();
	  } 
  });
}
