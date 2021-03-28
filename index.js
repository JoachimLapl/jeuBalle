var gamePlay = true;
(gameInterval = () => {
    var collides = hero.collides;
    if (keyIsDown['ArrowRight']) hero.speed.x = hero.speed.x > 5 ? hero.speed.x : hero.speed.x > 4 ? 5 : (hero.speed.x + .5);
    if (keyIsDown['ArrowLeft']) hero.speed.x = hero.speed.x < -5 ? hero.speed.x : hero.speed.x < -4 ? -5 : (hero.speed.x - .5);
    if (hero.onBlock && (keyIsDown[' '] || keyIsDown['ArrowUp'])) hero.speed.y = -5;
    // console.log(collides)
    if (collides.down) {
        hero.y = collides.down.y - hero.height;
        hero.speed.y *= -.9;
    }
    // if (collides.left) {
    //     hero.x = collides.left.x + collides.left.width;
    //     hero.speed.x *= -.9;
    // }
    // if (collides.right) {
    //     hero.x = collides.right.x - hero.right;
    //     hero.speed.x *= -.9;
    // }
    hero.speed.y += .1
    hero.props.y = hero.y + (hero.speed.y *= hero.frictionIndex)
    hero.props.x = hero.x + (hero.speed.x *= hero.frictionIndex)
    hero.element.style.transformOrigin = `${hero.x + hero.width / 2}px ${hero.y + hero.height / 2}px`;
    /* angle = hero.x/((height+width)/2*pi*2)/360 */
    hero.element.style.transform = `rotate(${hero.x / (hero.height + hero.width) / pi * 720}deg)`;
    svg.premierPlan.style.transform = `translate(${center.x - hero.x}px,${0}px)`;
    if (gamePlay)
        requestAnimationFrame(gameInterval)
})()
