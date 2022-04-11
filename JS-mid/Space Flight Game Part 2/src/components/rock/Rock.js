class Rock extends HasCoordinate {
    constructor(x, y, speedX, speedY) {
    super (x, y, speedX, speedY) 
        this.x = randCoord()
        this.y = randCoord()
    }
}