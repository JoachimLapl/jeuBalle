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
        Block.All.forEach(block => {
            if (block.x<this.x && block.x+block.width>this.x) col.left = block;
            if (block.x<this.x+this.width && block.x+block.width>this.x+this.width) col.right = block;
            if (block.y<this.y && block.y+block.height>this.y) col.up = block;
            if (block.y<this.y+this.height && block.y+block.height>this.y+this.height) col.down = block;
        })
        return col
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