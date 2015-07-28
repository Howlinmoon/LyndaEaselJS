function init() {
    var canvas = document.getElementById("easel");

    // create a new shape
    var shape = new createjs.Shape();
    
    // assign a color to draw with
    // shape.graphics.beginFill("purple");
    // or programatically (4th octet is an alpha channel)
    // shape.graphics.beginFill(createjs.Graphics.getRGB(162, 216, 255, .5));
    
    // or you can do it as a gradient (linear first)
    // shape.graphics.beginLinearGradientFill(["yellow", "red", "blue"], [0, .5, 1], 50, 50, 50, 150);
    // now, this is how you do a RadialGradient - circles
    // circle0 X, circle0 Y, circle0 Radius, circle1 X, circle1 Y, circle1 Radius
    shape.graphics.beginRadialGradientFill(["yellow", "blue"], [0, 1], 100, 100, 0, 100, 100, 100);
    shape.graphics.rect(50, 50, 100, 100);
    
    // create a stage
    var stage = new createjs.Stage(canvas);
    
    stage.addChild(shape);
    stage.update();
}