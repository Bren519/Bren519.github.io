var init = function (window) {
    'use strict';
    var
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,

        app = window.opspark.makeApp(),
        canvas = app.canvas,
        view = app.view,
        fps = draw.fps('#000');


    window.opspark.makeGame = function() {

        window.opspark.game = {};
        var game = window.opspark.game;

        ////////////////////////////////////////////////////////////////
        // ALL CODE GOES BELOW HERE                                   //
        ////////////////////////////////////////////////////////////////

        // TODO 1 : Declare and initialize our variables //
var circle;
var circles = [];


        // TODO 2 : Create a function that draws a circle  //
        function drawCircle() {
    circle = draw.randomCircleInArea(canvas, true, true, '#999', 3);
    physikz.addRandomVelocity(circle, canvas);
    view.addChild(circle);
    circles.push(circle);
}

        // TODO 3 : Done
        // TODO 7 : Create a Loop to call drawCircle 100 times
var circleAmount = 0;
    while(circleAmount < 400){
        drawCircle();
        circleAmount++;
    }




        view.addChild(fps);
        app.addUpdateable(fps);

        game.checkCirclePosition = function(circle) {
            // TODO 5 : YOUR CODE STARTS HERE //////////////////////

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if (circle.x > canvas.width) {
            circle.x = 1;
            }
            // TODO 5a) if the circle has gone past of the LEFT side of the screen then place it on the RIGHT
            if ( circle.x < 1) {
                circle.x = canvas.width;
            }

            // TODO 5b) if the circle has gone past of the TOP side of the screen then place it on the BOTTOM
            if ( circle.y > canvas.height) {
                circle = 1;
            }
            // TODO 5c) if the circle has gone past of the BOTTOM side of the screen then place it OFF-SCREEN TOP
            if ( circle.y < 1) {
            circle.y = canvas.height;
            }
            // YOUR TODO 5 CODE ENDS HERE //////////////////////////
        };

        function update() {
            // TODO 4 : Update the circle's position //


            // TODO 5 : Call game.checkCirclePosition on your circles.

            // TODO 8 : Iterate over the array
      for (var Animate = 0; Animate < 400; Animate++)  {
        physikz.updatePosition(circles[Animate]);
        game.checkCirclePosition(circles[Animate]);
}


        }

        ////////////////////////////////////////////////////////////////////
        // NO CODE BELOW HERE                                             //
        ////////////////////////////////////////////////////////////////////

        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;

        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
