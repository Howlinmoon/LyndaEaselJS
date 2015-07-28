function init() {
    // setup a pointer to our canvas
    var canvas  = document.getElementById("easel");
    var context = canvas.getContext("2d");
    
    // adjust the fill style
    context.fillStyle = "rgb(162, 216, 255)";
    
    // draw something
    context.fillRect(0, 0, 100, 100);
    
}