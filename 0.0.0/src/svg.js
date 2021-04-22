const $ = s => { return document.querySelector(s) }, svg = $('svg');
svg.premierPlan = $('[premierPlan]')
svg.deuxiemePlan = $('[deuxiemePlan]')
var center, rect;
(onresize = onload = () => {
    rect = svg.getBoundingClientRect()
    center = { x: rect.width / 2, y: rect.height / 2 }
})()
const heartSVGpathDefinition = `m13,13c-16.6,16.6-16.6,43.5,0,60l60,60l60-60c16.6-16.6,16.6-43.5,0-60c-16.6-16.6-43.5-16.6-60,0c-16.6-16.6-43.5-16.6-60,0Z`,
    heartSVGelement = (c = '#f00') => `<svg style="height:132.45px;width:145px;background:none;"><path fill="${c}" d="${heartSVGpathDefinition}"></svg>`,
    powerSVGpathDefinition = `m135,0l-60,18l18,13l-65,65l52,20l-83,53l149-59l-73-27l37-37l18,18Z`, 
    powerSVGelement = (c = '#0af') => `<svg style="height:167px;width:149px;background:none;"><path fill="${c}" d="${powerSVGpathDefinition}"></svg>`;
    heartSVGelement.valueOf = () => heartSVGelement();
    powerSVGelement.valueOf = () => powerSVGelement();