class Hero {
    constructor(href, height = 50, width = 50, x = 0, y = 0) {
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
            y: 1
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
        console.log([...Block.All, ...Plateform.All])
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
class Block {
    static All = []
    constructor(color, height, width, x, y) {
        Block.All.push(this)
        svg.premierPlan.insertAdjacentHTML('beforeend', `<rect x=${this.x = x} y=${this.y = y} height=${this.height = height} width=${this.width = width} style="fill:${this.color = color};" newRect ></rect>`)
        this.element = $('[newRect]')
        this.element.removeAttribute('newrect')
    }
}
class Plateform{
    static All = []
    constructor(color, height, width, x, y) {
        Plateform.All.push(this)
        svg.premierPlan.insertAdjacentHTML('beforeend', `<rect x=${this.x = x} y=${this.y = y} height=${this.height = height} width=${this.width = width} style="fill:${this.color = color};" newRect ></rect>`)
        this.element = $('[newRect]')
        this.element.removeAttribute('newrect')
    }
}