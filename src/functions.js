vectorChooser = (v1, v2) => {
    var sign = Math.hypot(v1.x - v2.x, v1.y - v2.y) > Math.hypot(v1.x, v1.Y) ? -1 : 1;
    return { x: v1.x * sign, y: v1.y * sign }
}
norme = v => Math.hypot(v.x, v.y)