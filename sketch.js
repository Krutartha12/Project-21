var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
   music = loadSound("music.mp3")

}


function setup(){
    canvas = createCanvas(1000,600);

    block1 = createSprite(117.5,580,235,30);
    block1.shapeColor = "blue";

    block2 = createSprite(372.5,580,235,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(627.5,580,235,30);
    block3.shapeColor = "red";

    block4 = createSprite(882.5,580,235,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = 5 ;
    ball.velocityY = 2 ;
    
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 0;
        ball.velocityY = 0;
        //write code to stop music
        music.stop();
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
    }
    drawSprites();
}



