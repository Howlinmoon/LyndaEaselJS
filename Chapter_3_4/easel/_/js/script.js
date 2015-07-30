function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	centerX = canvas.width/2,
	centerY = canvas.height/2;
	
	var ship = new createjs.Bitmap("images/ship.png");
	ship.x = centerX;
	ship.y = centerY;
	ship.regX = 50;
	ship.regY = 50;
	
	stage.addChild(ship);

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
        // add some random shaking
        // ship.x = centerX + (Math.random() - .5) * 50;
        // ship.y = centerY + (Math.random() - .5) * 50;
        
        // some predictable movement
        ship.x = centerX + (Math.sin(createjs.Ticker.getTicks() /7 ) * 50);
        ship.y = centerY + (Math.cos(createjs.Ticker.getTicks() /7 ) * 50);
		stage.update();
	});
}