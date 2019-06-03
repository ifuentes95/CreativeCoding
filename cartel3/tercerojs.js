var hand;
var Boxes;
var numBox = 20;
var luz;
var logo;


function setup() {
  noCursor();
  createCanvas(windowWidth, windowHeight);
  logo = loadImage('logo.png');
  luz = createVideo('speed.mp4');
  luz.hide();
  noStroke();
  hand = createSprite(50,10);
    hand.addImage(
    loadImage("falcon.png")
  );

  Boxes = new Group();
    for (var i = 0; i < numBox; i++) {
    var b = createSprite(random(width), random(height), 10,10 );
    b.addImage(loadImage("tie2.png"),10,15);
    b.friction = random(0.97, 0.99);
    b.maxSpeed = random(1, 4);
    b.rotateToDirection = true;
    Boxes.add(b);
  }
  
}

function draw() {
  background(0);
  image(luz, 0, 0, width, height);
  image(logo,0,0,windowWidth,windowHeight);
  textSize(30);
  stroke(255);
  
  hand.position.x = mouseX;
  hand.position.y = mouseY;
 
  for (var i = 0; i < Boxes.length; i++) {
    Boxes[i].attractionPoint(1000, mouseX, mouseY);
  }
  
   if ( mouseIsPressed )  {
    luz.loop(); 
     for (var i = 0; i < Boxes.length; i++) {
          Boxes[i].position.x = random(width);
          Boxes[i].position.y = random(height);
      }   
  };
  
  drawSprites();
  
}

