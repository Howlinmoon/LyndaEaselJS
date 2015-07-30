function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas);
    
    var sentence = new createjs.Text();
    sentence.text = "The quick brown fox jumps over the lazy dog";
    sentence.font = "bold 30px Times";
    sentence.color = "blue";
    
    var sentence2 = new createjs.Text("This is all in one", "bold 30px Times", "Green");
    sentence2.x = 100;
    sentence2.y = 100;
    sentence2.textAlign = "center";
    sentence2.lineWidth = 150;
    
	stage.addChild(sentence);
    stage.addChild(sentence2);
	stage.update();
}