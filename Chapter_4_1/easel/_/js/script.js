function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	centerX = canvas.width/2,
	centerY = canvas.height/2,
	ss = new createjs.SpriteSheet({
		animations: {
			fly: [0, 15],
			explode: [16, 20, "fly"] },
		images: ["images/shipsprites.png"],
		frames: {
			regX: 50,
			regY: 50,
			height: 100,
			width: 100
		}
	}),
	ship = new createjs.BitmapAnimation(ss);
	
	ship.gotoAndPlay("fly");

	stage.addChild(ship);	
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
        
        var diffX = stage.mouseX - ship.x;
        var diffY = stage.mouseY - ship.y;
        
        ship.x += diffX / 20;
        ship.y += diffY / 20;
        
        // orient the ship relative to the mouse
        ship.rotation = Math.atan2(diffY, diffX) * 180 / Math.PI;
		stage.update();
	});
}