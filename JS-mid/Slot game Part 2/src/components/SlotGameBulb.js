const SlotGameBulb = (rootElement) => {

    let div = createElement('div', {class: 'slot-game-bulb'}, rootElement)
    
    //seting animation timer
    let timer = setInterval(()=> {
        if (div.className == 'slot-game-bulb'){
            div.className = 'slot-game-bulb lighted'
        } else {
            div.className = 'slot-game-bulb'
        }
    }, Math.random() * 1000 + 1000)
}
