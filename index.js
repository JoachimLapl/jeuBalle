var gamePlay = true;
(gameInterval = () => {
    var collides = hero.collides;
    if (collides.down) {
        hero.y = collides.down.y - hero.height;
        hero.speed.y *= -.9;
    }
    hero.speed.y += .1
    hero.props.y = hero.y + (hero.speed.y *= hero.frictionIndex)
    hero.element.style.transformOrigin = `${hero.x+ hero.width/2}px ${hero.y+hero.height/2}px`;
    /* angle = hero.x/((height+width)/2*pi*2)/360 */
    hero.element.style.transform = `rotate(${hero.x / ((hero.height + hero.width) / 2 * pi * 2) * 360}deg)`;
    svg.premierPlan.style.transform = `translate(${center.x - hero.x}px,${0}px)`;
    if (gamePlay)
        requestAnimationFrame(gameInterval)
})()

onLeftArrow = () =>{
    hero.props.x = hero.x - 5; 
} 

onRightArrow = () =>{
    hero.props.x = hero.x + 5; 
} 

onSpace = () =>{
    hero.speed.y = -5; 
} 