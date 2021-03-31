class Hero {
    constructor(href, height = 50, width = 50, x = 0, y = 0) {
        svg.premierPlan.insertAdjacentHTML('beforeend', `<image href=${href} newImage height=${this.height = height} width=${this.width = width} x=${this.x = x} y=${this.y = y} />`)
        this.element = $('[newImage]');
        this.element.removeAttribute('newimage');
        this.r = (height + width) / 2
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
        // this.forcesApplied = [];
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
        BlockLine.All.forEach(line => {
            var axT = this.affx, axB = line.affx;
            // var coef = norme(this.speed) / norme(line.pushVector)
            var coefX = this.speed.x / line.pushVector.x, coefY = this.speed.y / line.pushVector.y;
            coefX = coefX ? coefX : 0
            coefY = coefY ? coefY : 0
            var v = vectorChooser(line.pushVector, this.speed);
            if (isFinite(axT.a) && isFinite(axB.a)) {
                console.log(axT, axB)
                var x = (axT.b - axB.b) / (axB.a - axT.a), y = axT.a * x + axT.b, r = Math.hypot(this.x - x, this.y - y);
                if (r <= this.r && x > line.x && x < line.x + line.width) {
                    console.log('hello')
                    this.speed.x += -v.x * coefX * 1.5; this.speed.y += -v.y * coefY * 1.9;
                }
            } else {
                var ayT = this.affy, ayB = line.affy;
                if (isFinite(ayT.a) && isFinite(ayB.a)) {
                    var y = (ayT.b - ayB.b) / (ayB.a - ayT.a), x = ayT.a * y + ayT.b, r = Math.hypot(this.x - x, this.y - y);
                    console.log(ayT.a, r)
                    if (r <= this.r && y > line.y && y < line.y + line.height) {
                        console.log('hello')
                        this.speed.x += -v.x * coefX * 1.5; this.speed.y += -v.y * coefY * 1.9;
                    }
                } else {
                    if (isFinite(axT.a)) {
                        if (Math.abs(this.x + this.speed.x - line.x) <= this.r) {
                            this.speed.x += -v.x * coefX * 1.5; this.speed.y += -v.y * coefY * 1.9;
                        }
                    } else {
                        if (Math.abs(this.y + this.speed.y - line.y) <= this.r) {
                            console.log(coefX, coefY, v)
                            console.log(line.pushVector, this.speed, v.x * coefX, v.y * coefY)
                            console.log(-v.x * coefX * 1.5)
                            this.speed.x += -v.x * coefX * 1.5; this.speed.y += -v.y * coefY * 1.9;
                        }
                    }

                }
            }
        })
        return col
    }
    get collides2() {
        var arr = [];
        var coef = norme(this.speed) / norme(line.pushVector)
        BlockLine.All.forEach(line => {
            var axT = this.affx, axB = line.affx;
            if (isFinite(axT.a) && isFinite(axB.a)) {
                console.log(axT, axB)
                var x = (axT.b - axB.b) / (axB.a - axT.a), y = axT.a * x + axT.b, r = Math.hypot(this.x - x, this.y - y);
                if (r <= this.r && x > line.x && x < line.x + line.width) {
                    console.log('hello')
                }
            } else {
                var ayT = this.affy, ayB = line.affy;
                if (isFinite(ayT.a) && isFinite(ayB.a)) {
                    var y = (ayT.b - ayB.b) / (ayB.a - ayT.a), x = ayT.a * y + ayT.b, r = Math.hypot(this.x - x, this.y - y);
                    console.log(ayT.a, r)
                    if (r <= this.r && y > line.y && y < line.y + line.height) {
                        console.log('hello')
                    }
                } else {
                    if (isFinite(axT.a)) {
                        if (Math.abs(this.x + this.speed.x - line.x) <= this.r) console.log(vectorChooser(line.pushVector, this.speed))
                    } else {
                        console.log(line.pushVector, this.speed)
                        if (Math.abs(this.y + this.speed.y - line.y) <= this.r) { var v = vectorChooser(line.pushVector, this.speed); this.speed.x += v.x * coef * 1.5; this.speed.y += v.y * coef * 1.9; }
                        console.log(this.speed)
                    }

                }
            }
        })
    }
    get onBlock() {
        // var col = { up: false, down: false, left: false, right: false }
        var hL = this.x, hR = hL + this.width, hB = this.y + this.height;
        for (let b of Block.All) {
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
    get affx() {
        return { a: this.speed.y / this.speed.x, b: this.y + this.height / 2 - (this.speed.y / this.speed.x) * (this.x + this.width / 2) }
    }
    get affy() {
        return { a: this.speed.x / this.speed.y, b: this.x + this.width / 2 - (this.speed.x / this.speed.y) * (this.y + this.height / 2) }
    }
    get forcesApplied() {
        return [gravity, wind, ...(() => { var arr = []; return arr; })()]
    }
    next() {
        for (let force of this.forcesApplied) {
            this.speed.x += force.x;
            this.speed.y += force.y;
        }
        this.props.y = this.y + (this.speed.y *= this.frictionIndex)
        this.props.x = this.x + (this.speed.x *= this.frictionIndex)
        this.element.style.transformOrigin = `${this.x + this.width / 2}px ${this.y + this.height / 2}px`;
        this.element.style.transform = `rotate(${this.x / this.r / pi * 360}deg)`;
        svg.premierPlan.style.transform = `translate(${center.x - this.x}px,${0}px)`;
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
class BlockLine {
    static All = []
    constructor(color, x1, y1, x2, y2) {
        BlockLine.All.push(this)
        svg.premierPlan.insertAdjacentHTML('beforeend', `<line x1=${this.x1 = x1} y1=${this.y1 = y1} x2=${this.x2 = x2} y2=${this.y2 = y2} style="stroke:${this.color = color};" newLine ></line>`)
        this.x = Math.min(x1, x2), this.y = Math.min(y1, y2), this.width = Math.abs(x1 - x2), this.height = Math.abs(y1 - y2);
        this.element = $('[newLine]')
        this.element.removeAttribute('newline')
        this.affx = {
            a: (y1 - y2) / (x1 - x2), b: y1 - (y1 - y2) / (x1 - x2) * x1
        }
        this.affy = {
            a: (x1 - x2) / (y1 - y2), b: x1 - (x1 - x2) / (y1 - y2) * y1
        }
        // y = (y1-y2)/(x1-x2)x   // straight
        // y = -(x1-x2)/(y1-y2)x  // perpendiclar
        this.pushVector = { x: y1 - y2, y: x2 - x1 }
    }
}