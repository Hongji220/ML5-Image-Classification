let mobilenet;
let puffin;

function modelReady() {
  console.log('Model is ready!!!');
  mobilenet.predict(puffin, gotResults);
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

function imageReady() {
  image(puffin, 0, 0, width, height);
}

function setup() {
  createCanvas(640, 480);
  puffin = createImg('images/dog.jpg', imageReady);
  puffin.hide();
  background(0);
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
  createP().id("classname");
  createP().id("prob");
}