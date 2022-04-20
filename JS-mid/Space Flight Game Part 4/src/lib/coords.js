const randCoord = () => Math.random()
const randSpeed = () => (Math.random()-0.5) * 0.01

class HasCoordinate {
    constructor (x, y, speedX, speedY, visible = true) {
        this.x = x
        this.y = y
        this.speedX = speedX
        this.speedY = speedY
        this.visible = visible
    }
    step() {
        this.x += this.speedX
        this.y += this.speedY
    }
    
}