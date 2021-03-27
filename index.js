var gamePlay = true;
(gameInterval = () => {
    hero.speed.y += .05
    hero.props.y = hero.y + (hero.speed.y *= hero.frictionIndex)
    svg.premierPlan.style.transform = `translate(${center.x - hero.x}px,${0}px)`;
    if (gamePlay)
        requestAnimationFrame(gameInterval)
})()