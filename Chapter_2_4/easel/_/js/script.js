function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();
    
    // Drawing line segments
    // shape.graphics.beginStroke("purple");
    // using a linear gradient stroke
    // note the start x,y and end x,y are the same as the endpoints of the line.
    //shape.graphics.beginLinearGradientStroke(["yellow", "red"], [0, 1], 50, 50, 250, 250);
    // now, trying using a radial gradient instead
    shape.graphics.beginRadialGradientStroke(["yellow", "red"], [0, 1], 50, 250, 0, 50, 250, 250);
    
    // width of the line in pixels
    shape.graphics.setStrokeStyle(10);
    
    // set the starting position of our line
    shape.graphics.moveTo(50, 50);
    // draw a line from the current position to an end position
    shape.graphics.lineTo(250,250);
    // subsequent lines continue where the last one left off
    shape.graphics.lineTo(50,250);
    // close the path automatically
    shape.graphics.closePath();
    

	stage.addChild(shape);
	stage.update();
}