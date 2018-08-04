let mobilenet;

let image1;



function modelReady() {

  console.log(image1);

  console.log('Model is ready!!!');

  mobilenet.predict(image1, gotResults);

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

  image(image1, 0, 0, width, height);

}



function setup() {

  createCanvas(640, 480);

  image1 = createImg('images/dog.jpg', imageReady);

  image1.hide();

  background(0);
  
  console.log(image1);

  mobilenet = ml5.imageClassifier('MobileNet', modelReady);

  createP().id("classname");

  createP().id("prob");

}