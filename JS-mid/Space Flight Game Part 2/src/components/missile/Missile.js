class Missile extends HasCoordinate{
    constructor(
        x = 0, y = 0,
        speedX = 0, speedY = 0,
        power = 1.0
    ) {
        super (x, y, speedX, speedY)
        this.power = power
    }
}