var background = function (window) {
    'use strict';
var tree = [];    
var buildings = [];
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        
        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'black');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
           
        
for(var x=0;x<100;x++) {
    var star = draw.bitmap('img/star.PNG');
    star.x = canvasWidth*Math.random();
    star.y = groundY*Math.random() - 30;
    star.scaleX = 1;
    star.scaleY = 1;
    background.addChild(star);
}
            
                
var moon = draw.bitmap('img/moon.png');
moon.x = canvasWidth - 700;
moon.y = 25;
moon.scaleX = 0.6;
moon.scaleY = 0.6;
background.addChild(moon);
            
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?


for(var i=0;i<6;++i) {
    var buildingHeight = Math.random()* 150 + 230;
    var building = draw.rect(75,buildingHeight,'Gray','Black',1);
    building.x = 300*i + Math.random()*300;
    building.y = groundY-buildingHeight - 1;
    background.addChild(building);
    buildings.push(building);
}            
            
            // TODO 4: Part 1 - Add a tree
tree = draw.bitmap('img/tree.jpg');
tree.x = 500;
tree.y = groundY - 192;
tree.scaleX = 0.6;
tree.scaleY = 0.6;
background.addChild(tree);  





        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            
            tree.x = tree.x - 3;
            if(tree.x < -200) {
            tree.x = canvasWidth;
            
             
          
       
}
            // TODO 5: Part 2 - Parallax
           for (var BM = 0; BM < buildings.length; BM++) {
buildings[BM].x = buildings[BM].x - 0.5;
if (buildings[BM].x < -100) {
    buildings[BM].x = canvasWidth + 5;
               
               
           }

}


        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
