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
	ship.x = centerX;
	ship.y = centerY;
	ship.gotoAndPlay("fly");
    
    // explode the ship when we click on it
    //ship.onClick = function(e) {
    //    ship.gotoAndPlay( "explode" );
    //}
    
    // trying to simply pass the mouse over the ship should explode it
    ship.onMouseOver = function(e) {
        ship.gotoAndPlay("explode");
    }
    
    // attempt to "drag and drop" the ship by changing its x,y co-ords
    ship.onPress = function(e) {
        // e = the object being targeted, in this case, the ship
        e.onMouseMove = function(ev) {
            e.target.x = ev.stageX;
            e.target.y = ev.stageY;
        }
    }

    // mouseOver is disabled by default due to cpu hit
    stage.enableMouseOver();
	stage.addChild(ship);	
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
		stage.update();
	});
}