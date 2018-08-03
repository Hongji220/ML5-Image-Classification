// The image we want to classify
      const image = document.getElementById('image');
      // The result tag in the HTML
      const result = document.getElementById('result');
      // The probability tag in the HTML
      const probability = document.getElementById('probability');// The image we want to classify
      const image = document.getElementById('image');
      // The result tag in the HTML
      const result = document.getElementById('result');
      // The probability tag in the HTML
      const probability = document.getElementById('probability');// The image we want to classify
      const image = document.getElementById('image');
      // The result tag in the HTML
      const result = document.getElementById('result');
      // The probability tag in the HTML
      const probability = document.getElementById('probability');const mobilenet = ml5.imageClassifer('MobileNet', modelLoaded);

function modelLoaded() {
	console.log('Model Loaded!');
	
}

mobilenet.predict(document.getElementById('image'), function(error, results) {console.log(results)});
