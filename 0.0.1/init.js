var hero = new Hero('images/ball.png');
var stopper = new Block('green', 10, rect.width + 100, -100, rect.height - 10);
var block2 = new Block('red', 50, 50, rect.width - 50, rect.height - 60);
var block3 = new Block('red', rect.height, 10, -110, 0);
var block4 = new Block('red', 20, 50, rect.width + 51, rect.height - 100);
var block4 = new Block('red', 20, 50, 500, rect.height - 150);
var y = rect.height-100, xC = 110;
for (let x = 1; x<1e2; x++){
    new Block('red', 20, 50, rect.width+51+xC*x, y + (Math.random()-.5)*50);
}
var line = new BlockLine('yellow', -25, rect.height - 100, 25, rect.height - 100);
const pi = Math.PI