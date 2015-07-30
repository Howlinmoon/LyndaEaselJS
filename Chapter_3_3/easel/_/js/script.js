function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas);
    centerX = canvas.width/2;
    centerY = canvas.height/2;
	
    var ship = new createjs.Bitmap("images/ship.png");
    ship.x = centerX;
    ship.y = centerY;
    
    // adjust the positioning point of the graphic
    // by 1/2 the height/width
    ship.regX = 50;
    ship.regY = 50;
    
    stage.addChild(ship);
    
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
        ship.rotation += 5;
		stage.update();
	});
}