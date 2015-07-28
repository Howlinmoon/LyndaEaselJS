function init() {
    // setup a pointer to our canvas
    var canvas  = document.getElementById("easel");
    var context = canvas.getContext("2d");
    SIZE = 100;
    
    // calculate the co-ords for the center of the canvas
    centerX = canvas.width/2;
    centerY = canvas.height/2;
    
    // save our current default context/translation
    context.save();
    // adjust the fill style
    context.fillStyle = "rgb(162, 216, 255)";
    
    // translate the rotation point
    context.translate(centerX, centerY);
    
    // rotate the context by 30 degrees (after converting to radians)
    context.rotate(30 * Math.PI / 180);
    
    // rotate a large rectangle
    context.strokeStyle = "gray";
    context.strokeRect(0, 0, canvas.width, canvas.height);

    // draw something centered - adjusting for width and height of
    // the shape
    context.fillRect(centerX-SIZE/2, centerY-SIZE/2, 100, 100);
    context.fillRect(-SIZE/2, -SIZE/2, SIZE, SIZE);
    
    context.restore();
    // a completely new square
    context.strokeStyle = "red";
    context.fillRect(50, 50, 50, 50);
    
    
    rotation = 0;
    setInterval(function() {
        rotation +=8;
        context.save();
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "rgb(162, 216, 255)";
        context.translate(centerX, centerY);
        context.rotate(rotation * Math.PI / 180);
        context.fillRect(-SIZE/2, -SIZE/2, SIZE, SIZE);
        context.restore();
    }, 30);
}