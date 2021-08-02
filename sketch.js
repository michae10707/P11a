var runner, runner_running, edges, runner_collided;
var path,pathImg;
var leftBoundary,rightBoundary;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");

  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  runner_collided = loadAnimation("power.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,180,400,20);
  path.addImage("ground",pathImg);
  path.y = path.height/2;
    path.velocityY = 4;
  
  runner = createSprite(200,160,20,50);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.09;
  
 // create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;
//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;


}

function draw() {
  background(0);

  if(  runner.y >= 200) {
        runner.velocityY = -0.05;
      }
      
      runner.velocityY = runner.velocityY + 0.05
     
    
    // boy moving on Xaxis with mouse
  runner.x = World.mouseX;
  
  edges= createEdgeSprites();
  runner.collide(edges[3]);
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);


  drawSprites();
//code to reset the background
if(path.y > 400 ){
  path.y = height/2;
}

  
}
