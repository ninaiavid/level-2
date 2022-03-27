// Main Game Component module
const SlotGame = (rootElement) => {

    load('src/libs/DOMUtils.js')

    const components = ['src/components/SlotGame.css',
                        'src/components/SlotGameBulb.js',
                        'src/components/SlotGameBulb.css',
                        'src/components/SlotGameWheel.js',
                        'src/components/SlotGameWheel.css']

    setTimeout(()=>{

        let divContainer = createElement('div', {class: 'slot-game-container'}, rootElement)
        let divHeader = createElement('div', {class: 'slot-game-header'}, divContainer)
        let divContent = createElement('div', {class: 'slot-game-content'}, divContainer)

        let divLContent = createElement('div', {class: 'slot-game-content-left'}, divContent)
        let divRContent = createElement('div', {class: 'slot-game-content-right'}, divContent)
        
        let divHContent = createElement('div', {class: 'slot-game-header-top'}, divHeader)
        let divHLContent = createElement('div', {class: 'slot-game-header-left'}, divHeader)
        let divHRContent = createElement('div', {class: 'slot-game-header-right'}, divHeader)

        let divContentScreen = createElement('div', {class: 'slot-game-content-screen'}, divContent)
        
        let i=3;
        while (i--){
            let divScreenWindow = createElement('div', {class: 'slot-game-screen-window'}, divContentScreen)
        
        }

        // loading components resourses
        components.forEach(component => load(component))
    }, 200)

    //delay the function invocation
    setTimeout(()=>{
        
        for(let bCount = 0; bCount<12; bCount++){
            SlotGameBulb(document.querySelector(".slot-game-content-left"))
            SlotGameBulb(document.querySelector(".slot-game-content-right"))
        }
        
        for(let bCount = 0; bCount<10; bCount++){
            SlotGameBulb(document.querySelector(".slot-game-header-top"))
            // SlotGameBulb(document.querySelector(".slot-game-content-right"))
        }
        for(let bCount = 0; bCount<2; bCount++){
            SlotGameBulb(document.querySelector(".slot-game-header-left"))
            SlotGameBulb(document.querySelector(".slot-game-header-right"))
        }

        SlotGameWheel(
            document.querySelector(".slot-game-screen-window")
        )
    }, 500)
    
}


// function for loading component resourses
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



