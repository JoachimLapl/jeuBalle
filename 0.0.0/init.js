var hero = new Hero('images/ball.png');
var stopper = new Block('green', 10, rect.width + 100, -100, rect.height - 10);
var block2 = new Block('red', 50, 50, rect.width - 50, rect.height - 60);
var block3 = new Block('red', rect.height, 10, -110, 0);
var block4 = new Block('red', 20, 50, rect.width + 51, rect.height - 100);
var plat = new Plateform('#ff0', 20, 50, 150, rect.height - 100);
var block = new Block('#00f', 20, 50, 200, rect.height - 100);
const pi = Math.PI