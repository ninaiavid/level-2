class Game {
    constructor(space = null) {
        this.space = space

        let screen = document.querySelector('#screen');
        this.ctx = screen.getContext('2d')
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
        document.body.addEventListener('keydown', this.action.bind(this))
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
                this.space.ship.fire()
                break
        }

        this.render()
    }
}