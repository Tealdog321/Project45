var pig 
var pigImage
var pigwalk
var warthog
var corn
var grass
var deadpig

function preload() {
  pigImage = loadAnimation("./images/pigwalk.png","./images/deadpig.png")
 backgroundImg= loadImage("grass.png")
}
  
  function setup() {
  createCanvas(800,400);
  pig = createSprite(400, 200, 50, 50);
  pig.addAnimation("running", pigImage)
  background = createSprite(0,0,400,400)
  backgroundImg.addImage()

  

}

function draw() {
  background(255,255,255);  
  drawSprites();
}