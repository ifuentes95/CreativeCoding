let stars = [],
  starsB = [],
  starsM = [],
  i,
  j,
  z = 0,
  br,
  br2,
  br3,
  prev = 0,
  starindex=[];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  noCursor();
  img = loadImage('logo.png');
  translate(windowWidth / 2, windowHeight / 2);
  for (i = 0; i < 20; i++) {
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
    br = randomIntFromInterval(12,15);
    strokeWeight(br);
    stroke(47, 213, 254);
    line(this.x, 0, this.x, height);
    strokeWeight(5);
    stroke('white');
    line(this.x, 0, this.x, height);
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
    br2 = randomIntFromInterval(6,11);
    strokeWeight(br2);
    stroke('red');
    line(this.x, 0, this.x, height);
    strokeWeight(2);
    stroke('white');
    line(this.x, 0, this.x, height);
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
    br3 = randomIntFromInterval(1,5);
    strokeWeight(br3);
    stroke(213, 47, 254);
    line(this.x, 0, this.x, height);
    strokeWeight(1);
    stroke('white');
    line(this.x, 0, this.x, height);
  }
}

function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}






