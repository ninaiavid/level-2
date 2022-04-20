class Game {
    constructor(space = null) {
        this.space = space

        let screen = document.querySelector('#screen');
        this.ctx = screen.getContext('2d')
        this.FPS = 10
        this.w = window.innerWidth
        this.h = window.innerHeight
        screen.height = this.h
        screen.width = this.w
    }

    render() {
        this.ctx.clearRect(0,0, this.w, this.h)
        this.space.render(this.ctx)
    }

    start() {
        this.space.rockNr()
        document.body.addEventListener('keydown', this.action.bind(this))
        this.render()
        this.timer = setInterval(this.step.bind(this), 1000/this.FPS)
    }

    stop () {
        clearInterval(this.timer)
    }

    gameOver(){
        this.stop()
        displayText(this.ctx)
    }

    step() {
        this.space.step()
        let collisions = this.space.collision()
        if (collisions.length > 0) {
            this.gameOver()
        }
        this.space.hitRocks()
        this.render()
    }

    action(e) {
        
        // if (e.code === 'ArrowRight') {
        //     this.space.ship.flyRight()
        // }
        // if (e.code === 'ArrowLeft') {
        //     this.space.ship.flyLeft()
        // }
        // if (e.code === 'Space') {
        //     this.space.ship.fire()
        // }
        switch (e.code) {
            case 'ArrowRight': 
                this.space.ship.flyRight()
                break
            case 'ArrowLeft':
                this.space.ship.flyLeft()
                break
            case 'Space':
                let missile = this.space.ship.fire()
                this.space.missiles.push(missile)
                break
        }

        this.render()
    }
}