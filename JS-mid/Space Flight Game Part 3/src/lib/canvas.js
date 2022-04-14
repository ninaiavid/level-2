const drawImage = (ctx, x, y, url) => {
    let img = new Image()
    img.onload = () => {
        ctx.drawImage(img, x * ctx.canvas.width, y * ctx.canvas.height)
    }
    img.src = url
}