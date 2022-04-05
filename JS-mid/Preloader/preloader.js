class BasePreloader {

    constructor(rootDiv) {
        this.rootDiv = rootDiv
        this.init()
        this.onload()    
    }

    setSpeed(speed){
        this.speed = speed
    }

    onload() {
        
        this.timerID = setInterval(()=>{
            this.step()
            if(this.condition()) {
                clearInterval(this.timerID)
            }
            this.rootDiv.innerHTML = this.render()
        }, this.speed)
    }
    condition() {
        // throw se utilizeaza pentru a 'arunca' o excepție
        // simplu error() se foloseste cind avem errori de rulare
        // ReferenceError() reprezintă o eroare atunci când se face referire la o variabilă care nu există
        throw new ReferenceError("You must implement the condition() method inside the inheriting class")
    }
    step() {
        throw new ReferenceError("You must implement the step() method inside the inheriting class")
    }
    render() {
        throw new ReferenceError("You must implement the render() method inside the inheriting class")
    }
    init() {
        
    }
}

class ProgressPreloader extends BasePreloader {
    constructor(rootDiv) {
        super(rootDiv)
    }
    init() {
        this.setSpeed(500)
        this.progress = 0
    }
    condition(){
        return this.progress >= 100
    }
    step() {
        this.progress += 10
    }
    render() {
        return `[ ${this.progress}% ]`
    }
}

class CircularPreloader extends BasePreloader {
    constructor(rootDiv) {
        super(rootDiv)
    }
    init() {
        this.setSpeed(600)
        this.duration = 3000
        this.frames = ['|', '/', '--', '\\']
    }
    condition(){
        return this.duration <= 0
    }
    step() {
        this.duration -= 250

        // let frame = this.frames.shift()
        // this.frames.push(frame)

        let frame = this.frames.pop()
        this.frames.unshift(frame)

        // let frame = this.frames.splice(0, 1)
        // this.frames.splice(3, 1, `${frame}`)
    }
    render() {
        return `[ ${this.frames[0]} ]`
    }
}

class IncompletePreloader extends BasePreloader {
    constructor(rootDiv) {
        super(rootDiv)
    }
    init() {
        this.speed = 500
        this.progress = 0
    }

    // condition(){
    //     return this.progress >= 100
    // }
    // Pentru ca nu se verifica nici o conditie, 
    // timer-ul nu se stopeaza, deci continua sa se execute

    step() {
        this.progress += 10
    }
    render() {
        return `[ ${this.progress}% ]`
    }
}


let pp1 = new ProgressPreloader(window["prel-1"])
let pp2 = new CircularPreloader(window["prel-2"])
// let pp3 = new IncompletePreloader(window["prel-3"])
