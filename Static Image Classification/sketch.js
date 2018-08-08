let mobilenet;

let image1;



function modelReady() {

  console.log('Model is ready!!!');

  mobilenet.predict(image1, gotResults);

}



function gotResults(error, results) {

  if (error) {

    console.error(error);

  } else {

    let label = results[0].className;

    let prob = results[0].probability.toFixed(3)*100 + "%";

    select("#classname").html(label);

    select("#prob").html(prob);

  }

}




function setup() {

  createCanvas(850,566);

/*  let image1 = select("#image-holder");
  
  image1.hide();*/

  image1 = createImg("images/penguin.jpg").id("image-holder1");
	
  image1.hide();

  console.log(image1);

  console.log("Loading...");

  mobilenet = ml5.imageClassifier('MobileNet', modelReady);

  createP().id("classname");

  createP().id("prob");

}

function draw() {
/*	let image1 = select("#image-holder");*/
	
	image(image1, 0 ,0 , width, height );
}



function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#image-holder1')
                    .attr('src', e.target.result)
            };

            reader.readAsDataURL(input.files[0]);
        }
        mobilenet = ml5.imageClassifier('MobileNet', modelReady);
    }

