function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();
	
	shape.graphics.f("purple").r(50, 50, 100, 100);

	stage.addChild(shape);
	stage.update();
}