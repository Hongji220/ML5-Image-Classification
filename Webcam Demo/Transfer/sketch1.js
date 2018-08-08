let video;
let label = '';
let featureExtractor; //This will be the the model we are retraining.
let classifier; // This will be the classifier using the retrained Model.
let loss;
let personImages =0;
let buttonA;
let buttonB;
let trainButton;
let predictButton;




function modelReady() {
  console.log('Model is ready!!!');
}



function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    //console.log(results);
    label = results;
    
    classify();

  }

}


function setup() {
  createCanvas(640,550);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
// Extracting the pre-learned features from MobileNet
  featureExtractor = ml5.featureExtractor('MobileNet', modelReady);
// Create a new classifier using those Features and link it to the video
  classifier = featureExtractor.classification(video, function() {console.log("Video Ready!")})
  
  createP("0 Images").id("amount");
  createP("0 Images").id("amount1");
  
  setupButtons();
  

}

//Creating new buttons when j
function setupButtons() {
	
	buttonA = createButton("The first Person");
	buttonA.mousePressed(function() {
		classifier.addImage('Person1');
		select("#amount").html(++personImages + " Images");
	})
	
	buttonB = createButton("The Second Person")
		buttonA.mousePressed(function() {
		classifier.addImage('Person2');
		select("#amount1").html(++personImages + " Images");
	})
	
	trainButton = createButton("Train");
	trainButton.mousePressed(function() {
		classifier.train(function(lossValue){
			if (lossValue) {
				loss = lossValue;
				console.log("Loss: " + loss);
			} else {
						 console.log("Done Training! Final Loss: " + loss );
		createP("Done Training!")
						 };
	});
	
	buttonPredict = createButton("Predict").id("predictButton");
	buttonPredict.mousePressed(classify());
	});}

function classify() {
	classifier.classify(gotResults);
}
	
	
	
function draw() {
  background(0);
  image(video, 0 , 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
}