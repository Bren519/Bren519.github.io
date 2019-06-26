var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        
    //------------------------------------------------------------------------------------
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'MarkiMOO',x:1700,y:groundY - 10},
                {type: 'MarkiMOO',x:1900,y:groundY - 120},
                {type: 'sawblade',x:400,y:groundY - 10},
                {type: 'sawblade',x:550,y:groundY - 20},
                {type: 'sawblade',x:700,y:groundY - 15},
                {type: 'sawblade',x:900,y:groundY - 10},
                {type: 'sawblade',x:1050,y:groundY - 10},
                {type: 'sawblade',x:1200,y:groundY - 15},
                {type: 'sawblade',x:1350,y:groundY - 20},
                {type: 'sawblade',x:1500,y:groundY - 120},
            ],
            
            enemies: [
                {type: 'Waluigi',x:1000,y:groundY - 50,speed:0.5},
                {type: 'Waluigi',x:2000,y:groundY - 50,speed:1},
                {type: 'Waluigi',x:4000,y:groundY - 50,speed:10},
                {type: 'Waluigi',x:7000,y:groundY - 50,speed:15},
                
            ],
                
            rewards: [
                {type: 'coin', x:700,y:groundY - 70},
                {type: 'coin', x:730,y:groundY - 68},
                {type: 'coin', x:670,y:groundY - 68},
                {type: 'coin', x:2150,y:groundY - 80},
                {type: 'coin', x:2500,y:groundY - 120},
                {type: 'coin', x:4010,y:groundY - 65},
            ],    
            
        };
    //------------------------------------------------------------------------------------
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        
      // Begin Draw obstacles  
        
function createSawBlade(x,y) {
    
        var hitZoneSize = 25;
        var damageFromObstacle = 20;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle); 
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
    
}    

function createMark(x,y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 40;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle); 
        var obstacleImage2 = draw.bitmap('img/MarkiMOO.jpg');
        myObstacle.addChild(obstacleImage2);
        obstacleImage2.x = -25;
        obstacleImage2.y = -25;
};
      
      // End Draw obstacles   
      
      //Begin Enemies
      
function createEnemy(x, y, speed) {
   
    var enemy =  game.createGameItem('enemy',25);
    var Waluigi = draw.bitmap('img/WalEn.png');
    Waluigi.x = -25;
    Waluigi.y = -50;
    enemy.addChild(Waluigi);
    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);
      
    enemy.velocityX = -speed;    

    enemy.onPlayerCollision = function() {
        game.changeIntegrity(-10);
    };
    enemy.onProjectileCollision = function() {
        game.increaseScore(1000);
        enemy.fadeOut();
};
   
}

      //End Enemies
        
      //Begin Rewards
      
function createCoin(x,y){
    var reward = game.createGameItem('reward',16);    
    var diamond = draw.bitmap('img/MineDiamond.png');
    diamond.x = -15;
    diamond.y = -15;
    reward.addChild(diamond);
    reward.x = x;
    reward.y = y;
    game.addGameItem(reward);
    
    reward.velocityX = -2;
    reward.onPlayerCollision = function() {
        game.increaseScore(1000);
        reward.fadeOut();
    };

}      
   
      
      
      //End Rewards
        
      //Begin Object Check    
        
        
for (var LD = 0; LD < levelData.gameItems.length; LD++){
 var GameItemX = levelData.gameItems[LD].x;
 var GameItemY = levelData.gameItems[LD].y;
 if (levelData.gameItems[LD].type === "sawblade") {
 createSawBlade(GameItemX, GameItemY);
} else if (levelData.gameItems[LD].type === "MarkiMOO") {
  createMark(GameItemX, GameItemY);  
}


}

for (LD = 0; LD < levelData.enemies.length; LD++){
    var enemieX = levelData.enemies[LD].x;
    var enemieY = levelData.enemies[LD].y;
    var Kachigga = levelData.enemies[LD].speed;
    createEnemy(enemieX,enemieY,Kachigga);
    
}


for (LD = 0; LD < levelData.rewards.length; LD++){
    var rewardX = levelData.rewards[LD].x;
    var rewardY = levelData.rewards[LD].y;
    createCoin(rewardX,rewardY);
}


     //End Objec Check
     
     


     
     
    }
};




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}