let mobilenet;

let video;

let label = '';

let prob = '';

function modelReady() {
  console.log('Model is ready!!!');
  mobilenet.predict(gotResults);
}



function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    //console.log(results);
    label = results[0].className;
    prob = results[0].probability.toFixed(3)*100 + "%";
    
/*
    createP(label);
    createP(prob);*/
    mobilenet.predict(gotResults);

  }

}




function setup() {
  createCanvas(640,550);
  video = createCapture(VIDEO);
  video.hide(); 
  background(0);
  mobilenet = ml5.imageClassifier('MobileNet', video , modelReady);
/*  createP().id("classname");
  createP().id("prob");*/
}

function draw() {
  background(0);
  image(video, 0 , 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
  text(prob, 10, 30);
}