var hypnoticBall, database;
var position;


function setup(){
  database = firebase.database();
  
  createCanvas(500,500);

  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";

database.ref("ball/pos").on("value",readPosition)
  //var hypnoticBallPosition = database.ref('ball/position');
  //hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  background("yellow");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){
 database.ref("ball/pos").set({
   x:position.x+x,
   y:position.y+y
 }

 )

  
 
}

function readPosition(data){
  position = data.val();
  //console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}


