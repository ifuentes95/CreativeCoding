let stars = [],
  starsB = [],
  starsM = [],
  i,
  j,
  z = 0,
  prev = 0,
  starindex=[],
  img;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  noCursor();
  img = loadImage('logo.png');
  translate(windowWidth / 2, windowHeight / 2);
  for (i = 0; i < 200; i++) {
    stars[i] = new Star(
      mouseX,
      mouseY,
      random(-windowWidth, windowWidth),
      random(-windowHeight, windowHeight)
    );
    starsM[i] = new StarM(
      mouseX,
      mouseY,
      random(-windowWidth, windowWidth * 4),
      random(-windowHeight, windowHeight * 4)
    );
    starsB[i] = new StarB(
      mouseX,
      mouseY,
      random(-windowWidth, windowWidth * 8),
      random(-windowHeight, windowHeight * 8)
    );
  }
}
function draw() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(0);
  for (i = 0; i < stars.length; i++) {
    stars[i].move(mouseX, mouseY);
    stars[i].show();
    starsB[i].move(mouseX, mouseY);
    starsB[i].show();
    starsM[i].move(mouseX, mouseY);
    starsM[i].show();
  }
  image(img,0,0,windowWidth,windowHeight);
}

class Star {
  constructor(x, y, offsetx, offsety) {
    this.x = x;
    this.y = y;
    this.offsetx = offsetx;
    this.offsety = offsety;
  }
  move(xm, ym) {
    this.x = xm + this.offsetx;
    this.y = ym + this.offsety;
    if (this.x > mouseX) {
      this.x += z;
    } else if (this.x < mouseX) {
      this.x -= z;
    }
    if (this.y > mouseY) {
      this.y += z;
    } else if (this.y < mouseY) {
      this.y -= z;
    }
  }
  show() {
    noStroke();
    fill("white");
    ellipse(this.x, this.y, randomIntFromInterval(8,11));
  }
}
class StarM {
  constructor(x, y, offsetx, offsety) {
    this.x = x;
    this.y = y;
    this.offsetx = offsetx;
    this.offsety = offsety;
  }
  move(xm, ym) {
    this.x = (xm + this.offsetx) / 4;
    this.y = (ym + this.offsety) / 4;
    if (this.x > mouseX) {
      this.x += z / 4;
    } else if (this.x < mouseX) {
      this.x -= z / 4;
    }
    if (this.y > mouseY) {
      this.y += z / 4;
    } else if (this.y < mouseY) {
      this.y -= z / 4;
    }
  }
  show() {
    noStroke();
    fill("white");
    ellipse(this.x, this.y, randomIntFromInterval(3,7));
  }
}
class StarB {
  constructor(x, y, offsetx, offsety) {
    this.x = x;
    this.y = y;
    this.offsetx = offsetx;
    this.offsety = offsety;
  }
  move(xm, ym) {
    this.x = (xm + this.offsetx) / 8;
    this.y = (ym + this.offsety) / 8;
    if (this.x > mouseX) {
      this.x += z / 8;
    } else if (this.x < mouseX) {
      this.x -= z / 8;
    }
    if (this.y > mouseY) {
      this.y += z / 8;
    } else if (this.y < mouseY) {
      this.y -= z / 8;
    }
  }
  show() {
    noStroke();
    fill("white");
    ellipse(this.x, this.y, randomIntFromInterval(1,2));
  }
}

function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}






