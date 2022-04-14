class Ship extends HasCoordinate{
    constructor(
        missiles = [],
        x = 0.5, y = 0.9,
        speedX = 0, speedY = 0,
        damage = 0.0        
    ) {
        super (x, y, speedX, speedY)
        this.damage = damage
        this.missiles = missiles
        this.url = "images/ship.png"
        this.w = 128
        this.h = 128
    }

    render(ctx) {

        this.visible && drawImage(ctx, this.x, this.y, this.url)
        this.missiles.forEach(missile => missile.render(ctx))
    }

    flyRight() {
        this.x += 0.05
    }

    flyLeft() {
        this.x -= 0.05
    }

    fire() {
        game.space.missiles.push(this.missiles[0])
        this.missiles.shift()

        game.space.missiles.forEach(missile => missile.visible = true)

        }
    
}