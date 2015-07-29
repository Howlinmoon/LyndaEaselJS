function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();

	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(10, 0, 1);
	
	stage.addChild(shape);
	stage.update();
}