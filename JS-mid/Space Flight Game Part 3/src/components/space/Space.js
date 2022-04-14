class Space {
    constructor(ship = null, rocks = [], missiles = []) {
        this.ship = ship
        this.rocks = rocks
        this.missiles = missiles
    }

    render(ctx) {
        this.ship && this.ship.render(ctx)
        this.rocks.forEach(rock => rock.render(ctx))

        this.missiles.forEach(missile => missile.render(ctx))
        
    }
}