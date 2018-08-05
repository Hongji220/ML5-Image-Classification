let mobilenet;

let video;


function modelReady() {
  console.log('Model is ready!!!');
  mobilenet.predict(gotResults);
}



function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    let label = results[0].className;
    let prob = results[0].probability.toFixed(3)*100 + "%";
    select("#classname").html(label);
    select("#prob").html(prob);

  }

}




function setup() {
  createCanvas(640,480);
  video = createCapture(VIDEO);
  video.hide(); 
  mobilenet = ml5.imageClassifier('MobileNet', video ,modelReady);
  createP().id("classname");
  createP().id("prob");
}

function draw() {
  image(video, 0 , 0);
}