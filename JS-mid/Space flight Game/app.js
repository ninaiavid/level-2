let screen = document.querySelector('#screen');

let ctx = screen.getContext('2d')

    let w = window.innerWidth
    let h = window.innerHeight
    screen.height = h
    screen.width = w

let shipW = 128
let shipH = 128

const drawImage = (src, x, y) => {
    let img = new Image()
    img.onload = () => {
        ctx.clearRect(0, 0, w-shipW, h-shipH)
        ctx.drawImage(img, x, y)
    }
    img.src = src
}

drawImage("images/ship.png", w/2-shipW/2, h-shipH)

let missileY = h-256

document.body.onkeydown = (e) => {
    if(e.code === "Space") {
        setInterval(()=>{
            if (missileY>0){
            
            drawImage("images/missile.png", w/2-12, missileY)
            missileY -= 5
            } else {
                drawImage("images/explosion.png", w/2-64, 0)
            }
        }, 20)
    }
}