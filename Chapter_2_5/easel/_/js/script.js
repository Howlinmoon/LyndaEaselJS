function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();

	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(10, 0, 1);
    
    // Draw a simple rectangle
    shape.graphics.rect(50, 50, 250, 250);
    
    // Draw one with rounded corners all with the same angle
    // shape.graphics.drawRoundRect(25,25, 300, 300, 50);
	shape.graphics.beginStroke("blue");
    shape.graphics.drawRoundRect(25,25, 300, 300, 50);
    
	shape.graphics.beginStroke("green");
    // Here is another one with different corner styles
    shape.graphics.drawRoundRectComplex(75, 75, 200, 200, 50, 0, 50, 0);
	
    // Drawing circles
    shape.graphics.beginStroke("yellow");
    shape.graphics.drawCircle(450, 100, 50);
    
    shape.graphics.beginStroke("yellow");
    shape.graphics.drawEllipse(450, 200, 50, 100);
    
    // Arcs
    shape.graphics.beginStroke("orange");
    //shape.graphics.arc(25, 375, 50, 0, 90*(Math.PI / 180), 0);

    shape.graphics.arc(150, 425, 50, 0, -90*(Math.PI / 180), 1);
    
    // Drawing a star
    // x, y, radius, number of spikes, INWARD spike, OUTWARD spike relative to middle
    shape.graphics.drawPolyStar(75, 450, 100, 10, .75, 0);
    
    shape.graphics.beginStroke("white");
    // Drawing a simple polygon (hexagon)
    shape.graphics.drawPolyStar(375, 450, 100, 6, 0, 0);

	stage.addChild(shape);
	stage.update();
}