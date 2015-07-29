function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();
	
//	shape.graphics.beginStroke("purple");
//	shape.graphics.setStrokeStyle(10, "round", "round");
// combining the two preceding lines into one
    
//    shape.graphics.beginStroke("blue").setStrokeStyle(10, "round", "round");
//	shape.graphics.moveTo(50, 50);
//	shape.graphics.lineTo(250, 250);
//	shape.graphics.lineTo(50, 250);
//	shape.graphics.closePath();

// combine ALL of the lines into one long line
//shape.graphics.beginStroke("red").setStrokeStyle(10, "round", "round").moveTo(50, 50).lineTo(250, 250).lineTo(50, 250).closePath();
    
// Next - we can abbreviate most commands to a single letter or two
shape.graphics.s("yellow").ss(10, "round", "round").mt(50, 50).lt(250, 250).lt(50, 250).cp();
    
    
	stage.addChild(shape);
	stage.update();
}