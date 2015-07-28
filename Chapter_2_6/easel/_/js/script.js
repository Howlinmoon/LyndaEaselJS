function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();
	
	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(10, "round", "round");
	shape.graphics.moveTo(50, 50);
	shape.graphics.lineTo(250, 250);
	shape.graphics.lineTo(50, 250);
	shape.graphics.closePath();

	stage.addChild(shape);
	stage.update();
}