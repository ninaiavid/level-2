class Button {
    constructor(count) {
        this.count = count
        this.count = 0
    }

    mount(rootElement, onClickCB) {
        this.root = rootElement
        this.onClickCB = onClickCB
        this.render()
    }

    render() {
        
        this.root.innerHTML = `
            <button> 
                ${this.count}
            </button>
        `
        this
            .root
            .firstElementChild
            .addEventListener('click', this.onClick.bind(this))
    }
    onClick() {
        this.onClickCB()
        this.count++
        this.render()

    }
}