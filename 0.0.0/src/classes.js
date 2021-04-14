class Hero {
    constructor(href, x = 0, y = 0, height = 50, width = 50) {
        svg.premierPlan.insertAdjacentHTML('beforeend', `<image href=${href} newImage height=${this.height = height} width=${this.width = width} x=${this.x = x} y=${this.y = y} />`)
        // svg.premierPlan.insertAdjacentHTML('beforeend', `<rect style="stroke:green; fill:#0000" newRect height=${height} width=${width} x=${x} y=${y} ></rect>`)
        this.element = $('[newImage]');
        this.element.removeAttribute('newimage');
        // this.rect = $('[newRect]');
        // this.rect.removeAttribute('newrect');
        // console.log(this.rect)
        var that = this;
        this.props = {
            set x(x) {
                that.element.setAttribute('x', that.x = x)
                // that.rect.setAttribute('x', x)
                return x
            },
            set y(y) {
                that.element.setAttribute('y', that.y = y)
                // that.rect.setAttribute('y', y)
                return y
            }
        }
        this.speed = {
            x: 0,
            y: 0
        }
        this.frictionIndex = .99
    }
    get collides() {
        var col = { up: false, down: false, left: false, right: false }
        var hL = this.x, hR = hL + this.width, hT = this.y, hB = hT + this.height;
        // var affX = x => (x - this.x) * this.speed.y / this.speed.x + this.y, affY = y => (y - this.y) * this.speed.x / this.speed.y + this.x
        Block.All.forEach(block => {
            var bL = block.x, bR = bL + block.width, bT = block.y, bB = bT + block.height;
            if (bT < hB && bB > hT) {
                if (bR < hL && bR > hL + this.speed.x) col.left = block;
                if (bL > hR && bL < hR + this.speed.x) col.right = block;
                // if (bL < hL && bR > hL) col.left = block;
                // if (bL < hR && bR > hR) col.right = block;
            }
            if (bL < hR && bR > hL) {
                if (bB < hT && bB > hT + this.speed.y) col.up = block;
                if (bT > hB && bT < hB + this.speed.y) col.down = block;
                // if (bT < hT && bB > hT) col.up = block;
                // if (bT < hB && bB > hB) col.down = block;
            }
        })
        Plateform.All.forEach(plateform => {
            var pL = plateform.x, pR = pL + plateform.width, pT = plateform.y;
            if (pL < hR && pR > hL) {
                if (pT > hB && pT < hB + this.speed.y) col.down = plateform;
                // if (bT < hT && bB > hT) col.up = block;
                // if (bT < hB && bB > hB) col.down = block;
            }
        })
        return col
    }
    get onBlock() {
        // var col = { up: false, down: false, left: false, right: false }
        var hL = this.x, hR = hL + this.width, hB = this.y + this.height;
        // console.log([...Block.All, ...Plateform.All])
        for (let b of [...Block.All, ...Plateform.All]) {
            var bL = b.x, bR = bL + b.width, bT = b.y;
            if (bL < hR && bR > hL && Math.abs(bT - hB) < Math.abs(this.speed.y + .1)) return true

        }
        return false
    }
    get goingIntoBlockLeft() {
        var hL = this.x, hT = this.y, hB = hT + this.height;
        for (let b of Block.All) {
            var bR = b.x + b.width, bT = b.y, bB = bT + b.height;
            if (bT < hB && bB > hT && Math.abs(bR - hL) < Math.abs(this.speed.x - 1)) return true

        }
        return false
    }
    get goingIntoBlockRight() {
        var hR = this.x + this.width, hT = this.y, hB = hT + this.height;
        for (let b of Block.All) {
            var bL = b.x, bT = b.y, bB = bT + b.height;
            if (bT < hB && bB > hT && Math.abs(bL - hR) < Math.abs(this.speed.x + 1)) return true

        }
        return false
    }
    get goingIntoBlockTop() {
        var hL = this.x, hR = hL + this.width, hT = this.y;
        for (let b of Block.All) {
            var bL = b.x, bR = bL + b.width, bB = b.y + b.height;
            if (bL < hR && bR > hL && Math.abs(bB - hT) < Math.abs(this.speed.x + 1)) return true

        }
        return false
    }
}
class Enemy {
    static All = []
    constructor(href, x, y, height = 50, width = 50) {
        Enemy.All.push(this)
        svg.premierPlan.insertAdjacentHTML('beforeend', `<image href=${href} newImage height=${this.height = height} width=${this.width = width} x=${this.x = x} y=${this.y = y} />`)
        this.element = $('[newImage]');
        this.element.removeAttribute('newimage');
        var that = this;
        this.props = {
            set x(x) {
                that.element.setAttribute('x', that.x = x)
                return x
            },
            set y(y) {
                that.element.setAttribute('y', that.y = y)
                return y
            }
        }
        this.speed = {
            x: 0,
            y: 0
        }
        this.frictionIndex = .99
    }
    follow(e){
        if (Math.hypot(this.x-e.x,this.y-e.y)<500){

        }
    }
}
class Block {
    static All = []
    constructor(color, x, y, height, width) {
        Block.All.push(this)
        svg.premierPlan.insertAdjacentHTML('beforeend', `<rect x=${this.x = x} y=${this.y = y} height=${this.height = height} width=${this.width = width} style="fill:${this.color = color};" newRect ></rect>`)
        this.element = $('[newRect]')
        this.element.removeAttribute('newrect')
    }
}
class Plateform {
    static All = []
    constructor(color, x, y, height, width) {
        Plateform.All.push(this)
        svg.premierPlan.insertAdjacentHTML('beforeend', `<rect x=${this.x = x} y=${this.y = y} height=${this.height = height} width=${this.width = width} style="fill:${this.color = color};" newRect ></rect>`)
        this.element = $('[newRect]')
        this.element.removeAttribute('newrect')
    }
}
class Propeller {
    static All = []
    constructor(color, x, y, r, i) {
        Propeller.All.push(this)
        svg.premierPlan.insertAdjacentHTML('beforeend', `<circle cx=${this.x = x} cy=${this.y = y} r=${this.r = r} style="fill:none; stroke:${this.color = color};" newCirc ></circle>`)
        this.element = $('[newCirc]')
        this.element.removeAttribute('newcirc')
        this.intensity = i;
        this.f = (p,r) => {
            var x = p.x - this.x+r, y = p.y - this.y+r, a = (this.r+r) ** 2 - x ** 2 - y ** 2, c = a < 0 ? 0 : a ** .5 / this.r * this.intensity, v = Math.hypot(x, y);
            return { x: x / v * c, y: y / v * c }
        }
    }
} 