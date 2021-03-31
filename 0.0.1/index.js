var gamePlay = true;
(gameInterval = () => {
    var collides = hero.collides, onBlock = hero.onBlock, onBlockLeft = hero.goingIntoBlockLeft, onBlockRight = hero.goingIntoBlockRight, onBlockTop = hero.goingIntoBlockTop;
    if (!onBlockRight && keyIsDown['ArrowRight']) hero.speed.x = hero.speed.x > 5 ? hero.speed.x : hero.speed.x > 4 ? 5 : (hero.speed.x + .5);
    if (!onBlockLeft && keyIsDown['ArrowLeft']) hero.speed.x = hero.speed.x < -5 ? hero.speed.x : hero.speed.x < -4 ? -5 : (hero.speed.x - .5);
    var jumped = false;
    if (onBlock && (keyIsDown[' '] || keyIsDown['ArrowUp'])) (hero.speed.y = -5, jumped = true);
    // console.log(collides)
    if (collides.down && !jumped) {
        hero.y = collides.down.y - hero.height;
        hero.speed.y *= -.9;
        if (Math.abs(hero.speed.y) < 1) hero.speed.y = hero.speed.y ** 2 * (hero.speed.y < 0 ? -1 : 1)
    }
    if (collides.up) {
        hero.speed.y *= -.9;
    }
    if (collides.left) {
        hero.props.x = collides.left.x + collides.left.width;
        hero.speed.x *= -.5;
    }
    if (collides.right) {
        hero.props.x = collides.right.x - hero.width;
        hero.speed.x *= -.5;
    }
    // if (collides.down) console.log(onBlock)
    hero.next()
    // if (!onBlock) hero.speed.y += .1

    if (hero.y > rect.height + 1e3) hero.props.x = hero.props.y = 0
    if (gamePlay)
        requestAnimationFrame(gameInterval)
})()
