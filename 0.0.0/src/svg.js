const $ = s => { return document.querySelector(s) }, svg = $('svg');
svg.premierPlan = $('[premierPlan]')
var center, rect;
(onresize = onload = () => {
    rect = svg.getBoundingClientRect()
    center = { x: rect.width / 2, y: rect.height / 2 }
})()