var gamePlay = true;
(gameInterval = () => {
    var collides = hero.collides, onBlock = hero.onBlock, onBlockLeft = hero.goingIntoBlockLeft, onBlockRight = hero.goingIntoBlockRight;
    if (!onBlockRight && keyIsDown['ArrowRight']) hero.speed.x = hero.speed.x > 5 ? hero.speed.x : hero.speed.x > 4 ? 5 : (hero.speed.x + .5);
    if (!onBlockLeft && keyIsDown['ArrowLeft']) hero.speed.x = hero.speed.x < -5 ? hero.speed.x : hero.speed.x < -4 ? -5 : (hero.speed.x - .5);
    var jumped = false;
    if (onBlock && (keyIsDown[' '] || keyIsDown['ArrowUp'])) (hero.speed.y = -5, jumped = true);
    // console.log(collides)
    if (collides.down && !jumped) {
        hero.y = collides.down.y - hero.height;
        hero.speed.y *= -.9;
        console.log(hero.speed.y, hero.speed.y < .01)
        if (Math.abs(hero.speed.y) < 1) hero.speed.y = hero.speed.y ** 2 * (hero.speed.y < 0 ? -1 : 1)
    }
    if (collides.left) {
        hero.x = collides.left.x + collides.left.width;
        hero.speed.x *= -.5;
    }
    if (collides.right) {
        hero.x = collides.right.x - hero.width;
        hero.speed.x *= -.5;
    }
    // if (collides.down) console.log(onBlock)
    console.log(hero.speed.y)
    if (!onBlock) hero.speed.y += .1
    hero.props.y = hero.y + (hero.speed.y *= hero.frictionIndex)
    hero.props.x = hero.x + (hero.speed.x *= hero.frictionIndex)
    hero.element.style.transformOrigin = `${hero.x + hero.width / 2}px ${hero.y + hero.height / 2}px`;
    /* angle = hero.x/((height+width)/2*pi*2)/360 */
    hero.element.style.transform = `rotate(${hero.x / (hero.height + hero.width) / pi * 720}deg)`;
    svg.premierPlan.style.transform = `translate(${center.x - hero.x}px,${0}px)`;
    if (hero.y > rect.height + 1e3) hero.props.x = hero.props.y = 0
    if (gamePlay)
        requestAnimationFrame(gameInterval)
})()