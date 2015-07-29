function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();
	
	shape.graphics.f("green").r(50, 50, 100, 100);
    //shape.rotation = 30;

    // adjust the rotation point
    shape.regX = 100;
    shape.regY = 100;
    
    // 100 is the center of the object, since it stretches from 50 to 100+50 or 150.
    
    
    // adjust the shape's position in the stage from the default of 0,0
    shape.x = 100;
    shape.y = 100;
    
    // adjusting the scaling of the X and Y lengths
    shape.scaleX = 1
    shape.scaleY = 1
    
    
	stage.addChild(shape);
	//stage.update();
    
    
    createjs.Ticker.setFPS(30);
    
    createjs.Ticker.addListener(function() {
        shape.rotation +=8;
        // adjust the position of the shape by x position every frame
//        shape.x ++;
        // and the same for the y
//        shape.y ++;
        shape.scaleX += .01
        shape.scaleY += .01
        
        shape.alpha -= .01
        stage.update();
    });
    
}