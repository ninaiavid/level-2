class Missile extends HasCoordinate{
    constructor(
        x = 0.5, y = 0.9,
        speedX = 0, speedY = 0,
        power = 1.0
    ) {
        super (x, y, speedX, speedY, false)
        this.power = power
        this.url = "images/missile.png"
    }

    render(ctx) {
        this.x = game.space.ship.x
        this.visible && drawImage(ctx, this.x, this.y, this.url)
    }

    fire() {
        this.visible = true
        this.speedY -= 0.1
        
    }
}