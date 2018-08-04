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

    console.log(results);

    let label = results[0].className;

    let prob = results[0].probability.toFixed(3)*100 + "%";

    select("#classname").html(label);

    select("#prob").html(prob);

  }

}




function setup() {

  noCanvas();

  image1 = createImg('images/dog.jpg');

  background(0);

  mobilenet = ml5.imageClassifier('MobileNet', modelReady);

  createP().id("classname");

  createP().id("prob");

}

function draw() {
  checkImage();
}

function checkImage() {
  $(document).ready(function() {
        $("#fileUpload").on('change', function() {
          //Get count of selected files
          var countFiles = $(this)[0].files.length;
          var imgPath = $(this)[0].value;
          var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
          var image_holder = $("#image-holder");
          image_holder.empty();
          if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
              //loop for each file selected for uploaded.
              for (var i = 0; i < countFiles; i++) 
              {
                var reader = new FileReader();
                reader.onload = function(e) {
                  $("<img />", {
                    "src": e.target.result,
                    "class": "thumb-image"
                  }).appendTo(image_holder);
                }
                image_holder.show();
                reader.readAsDataURL($(this)[0].files[i]);
              }
            } else {
              alert("This browser does not support FileReader.");
            }
          } else {
            alert("Pls select only images");
          }
        });
      });
}