class Ship extends HasCoordinate{
    constructor(
        x = 0.5, y = 0.9,
        speedX = 0, speedY = 0,
        damage = 0.0, missiles = []
    ) {
        super (x, y, speedX, speedY)
        this.damage = damage
        this.missiles = missiles
    }
}