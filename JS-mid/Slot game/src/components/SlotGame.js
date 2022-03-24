const SlotGame = (rootElement) => {
    rootElement.innerHTML = `
        <div class="slot-game-container">
            Game goes here
        </div>`
    
    load ("src/components/SlotGame.css")
    // document.head.innerHTML += '<link rel="stylesheet" href="src/components/SlotGame.css">'


    // document.body.innerHTML+=`<script src="src/components/SlotGameWheel.js"></script>`

    // let scriptElement = document.createElement('script')
    // scriptElement.src = "src/components/SlotGameWheel.js"
    // document.body.appendChild(scriptElement)
    load('src/components/SlotGameWheel.js')

    //delay the function invocation
    setTimeout(()=>{
        SlotGameWheel(document.querySelector(".slot-game-container"))
    }, 500)
}


const load = (src) => {
    if (src.endsWith('.js')){
        let element = document.createElement('script')
        element.src = src
        document.body.appendChild(element)
    } else if (src.endsWith('.css')) {
        let element = document.createElement('link')
        element.rel = "stylesheet"
        element.href = src
        document.head.appendChild(element)
    }
}

