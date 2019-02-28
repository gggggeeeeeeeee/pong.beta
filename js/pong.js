let pong1;
let ball;
let pong2;
let xsp = 1;
let xsp2 = -1;

function setup() {
createCanvas(640,640);
pong1 = createSprite(8,320,10,150);
ball = createSprite(320,320,20,20)
pong2 = createSprite(630,320,10,150);

ball.velocity.x=-5;
ball.maxSpeed = 100;
}


function draw() {
  background(200);
  drawSprites();

pong1.position.y = mouseY;

if (pong1.overlap(ball)){
xsp = xsp+1;
ball.velocity.x = 5+xsp;}
if(pong2.overlap(ball)){
  xsp2=xsp2-1;
ball.velocity.x = -5 +xsp2;
}
}
