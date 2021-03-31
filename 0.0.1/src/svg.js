const $ = s => { return document.querySelector(s) }, svg = $('svg');
svg.premierPlan = $('[premierPlan]')
var center, rect;
(onresize = onload = () => {
    rect = svg.getBoundingClientRect()
    center = { x: rect.width / 2, y: rect.height / 2 }
})()
gravity = {x: 0, y: .1}
wind = {x:0, y: 0}