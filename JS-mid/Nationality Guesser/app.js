const form = document.querySelector('#form-name')

const input = form.children[2].firstElementChild
const output = form.children[3]

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = input.value.trim()

    const xhr = new XMLHttpRequest()
    xhr.open("GET", `https://api.nationalize.io/?name=${name}`)

    name.length > 0 ? xhr.send() 
                    : output.innerText = "You didn't type the name!"

    xhr.onload = () => {
        let response = xhr.responseText
        let data = JSON.parse(response)
        console.log(data)
        
        if(data.country.length >= 1) {
            let nationality = data.country[0].country_id
            output.innerHTML = `You are most probably from <strong>${nationality} </strong>`
        } else {
            output.innerText = "Sorry! We didn't find such a name"
        }
    }
})
