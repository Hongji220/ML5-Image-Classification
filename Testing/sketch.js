let mobilenet;

let image1;


function modelReady() {

  let image1 = select("#image-holder");

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




function setup() {

  noCanvas();

  let image1 = select("#image-holder");

    console.log(image1);

  mobilenet = ml5.imageClassifier('MobileNet', modelReady);

  createP().id("classname");

  createP().id("prob");

}

function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#image-holder')
                    .attr('src', e.target.result)
            };

            reader.readAsDataURL(input.files[0]);
        }
        mobilenet = ml5.imageClassifier('MobileNet', modelReady);
    }

