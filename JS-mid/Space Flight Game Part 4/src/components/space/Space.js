class Space {
    constructor(ship = null, rocks = [], missiles = []) {
        this.ship = ship
        this.rocks = rocks
        this.missiles = missiles
        this.boundaries = 0.07
    }

    rockNr() {
        let rocksNr = Math.ceil(Math.random() * 10)
        for (let i=0; i<rocksNr; i++) {
            this.rocks.push(new Rock())
        }
    }
    render(ctx) {
        this.ship && this.ship.render(ctx)
        this.rocks.forEach(rock => rock.render(ctx))
        this.missiles.forEach(missile => missile.render(ctx))
    }

    step() {
        this.ship && this.ship.step()
        this.rocks.forEach(rock => rock.step())
        this.missiles.forEach(missile => missile.step())
    }

    collision() {
        let collidingRocks = this.rocks.filter(rock => {
            let isColliding = 
                rock.x - this.boundaries <= this.ship.x && rock.x + this.boundaries >= this.ship.x &&
                rock.y - this.boundaries <= this.ship.y && rock.y + this.boundaries >= this.ship.y
            return isColliding
        })
        return collidingRocks
    }

    hitRocks() {
        let collidingMissile
        for(let i=0; i<this.rocks.length; i++){
            collidingMissile = this.missiles.filter(missile => {
                let isColliding = 
                    missile.x - this.boundaries <= this.rocks[i].x && missile.x + this.boundaries >= this.rocks[i].x &&
                    missile.y - this.boundaries <= this.rocks[i].y && missile.y + this.boundaries >= this.rocks[i].y
                if (isColliding) {
                    missile.visible = false
                    this.rocks[i].visible = false
                }
                return isColliding
            })
        }
        return collidingMissile
    }
}
