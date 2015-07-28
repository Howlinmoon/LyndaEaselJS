function init() {
    var canvas = document.getElementById("easel");
    
    // creating a new easelJS graphics object
    var graphics = new createjs.Graphics();
    var SIZE = 100;
    
    // setting a fill color
    graphics.beginFill("rgb(162, 216, 255)");
    graphics.drawRect(0, 0, SIZE, SIZE);
    
    var shape = new createjs.Shape(graphics);
    // create a stage to display things on
    var stage = new createjs.Stage(canvas);
    
    // add our graphic to it
    stage.addChild(shape);
    
    // can also do it this way - note no explicit graphics object
    var shape2 = new createjs.Shape();
    shape2.graphics.beginFill("rgb(162, 200, 200)");
    
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    
    shape2.graphics.drawRect(0, 0, SIZE, SIZE);
    shape2.x = centerX;
    shape2.y = centerY;
    // adjust the registration property to set the middle of the shape at centerX,centerY
    shape2.regX = SIZE/2;
    shape2.regY = SIZE/2;
    
    // rotate the shape 45 degrees (note - not radians)
    shape2.rotation = 45;
    
    stage.addChild(shape2);
    
    // now - display it by updating the stage
    stage.update();
    
    
    // some animation
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addListener(function() {
        shape2.rotation +=8;
        stage.update();
    });
}