const drawImage = (ctx, x, y, url) => {
    let img = new Image()
    img.onload = () => {
        ctx.drawImage(img, x * ctx.canvas.width, y * ctx.canvas.height)
    }
    img.src = url
}

const displayText = (ctx) => {
        ctx.fillStyle = 'white'
        // ctx.textAlign = 'center'
        ctx.fillText('GAME OVER', 200, 400)
        ctx.font = '50px Arial'
}