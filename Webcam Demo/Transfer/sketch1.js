let video;
let label = "";
let featureExtractor; //This will be the the model we are retraining.
let classifier; // This will be the classifier using the retrained Model.
let loss;
let personImages1 =0;
let personImages2 =0;
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
if (result) {
	let voice = new p5.Speech();
	voice.speak('Hi Justin! Welcome back.')
}
    
    classifier.classify(gotResults);

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
  
  createP("0 Images [Person 1] <br>").id("amount");
  createP("0 Images [Person 2]<br>").id("amount1");
  
  setupButtons();
  

}



//Creating new buttons when j
function setupButtons() {
	
	buttonA = createButton("The first Person").class("button");
	buttonA.mousePressed(function() {
		classifier.addImage('Person1');
		select("#amount").html(++personImages1 + " Images [Person 1]");
	})
	
	buttonB = createButton("\nThe Second Person").class("button");
	buttonB.mousePressed(function() {
		classifier.addImage('Person2');
		select("#amount1").html(++personImages2 + " Images [Person 2]");
	});
	
	trainButton = createButton("Train").class("button");
	trainButton.mousePressed(function() {
		classifier.train(function(lossValue){
			if (lossValue) {
				loss = lossValue;
				console.log("Loss: " + loss);
			} else {
						 console.log("Done Training! Final Loss: " + loss );
		createP("Done Training! Final Loss: " + loss );
						 }
	});});
	
	predictButton = createButton("Predict").id("predictButton").class("button");
	predictButton.mousePressed(function() {
	classifier.classify(gotResults);
});
}


	
	
	
function draw() {
  background(0);
  image(video, 0 , 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
}