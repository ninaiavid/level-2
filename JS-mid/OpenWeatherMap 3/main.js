const submit = document.querySelector('#submit')
const input = submit.firstElementChild

const submitForm = () => {
    submit.addEventListener('submit', (e) => {
        e.preventDefault()
        let city = input.value.trim()

        const loadDataFromAPI = (cb) => {
            let xhr = new XMLHttpRequest()
            xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d247402a435263cf00447494cae2b54&units=metric`)
            xhr.send()
            xhr.onload = () =>{
                let data = JSON.parse(xhr.responseText)
                cb(data)
            }
        }

        const load = (cb) => {
            let data = null
            if(checkDataCache("data")){
                data = loadDataFromCache("data")
                let currentDate = new Date().getTime()

                if ((city === data.location) && 
                    ((currentDate - data.date) < 3600000)) { 
                    cb(data)
                } else {
                        loadDataFromAPI((data) => {
                            saveDataToCache("data", data)
                            cb(data)
                        })
                }
            } else {
                loadDataFromAPI((data) => {
                    saveDataToCache("data", data)
                    cb(data)
                })
            }
        }

        const saveDataToCache = (key, data) => {
            data.location = city
            let date = new Date()
            data.date = date.getTime()
            localStorage.setItem(key, JSON.stringify(data))
        }

        const loadDataFromCache = (key) => {
            return JSON.parse(localStorage.getItem(key))
        }

        const checkDataCache = (key) => {
            return localStorage.getItem(key)
        }

        const render = (data) => {
            let temp = data.main.temp
            let humidity = data.main.humidity
            let windSpeed = data.wind.speed

            console.log('temp:', temp)
            console.log('humidity', humidity)
            console.log('wind speed', windSpeed)

            if (city){
                let output = document.querySelector('#output')
                output.innerText = 'Weather in ' + city +
                                    '\n temperature: ' + temp +
                                    '\n humidity: ' + humidity +
                                    '\n wind speed: ' + windSpeed
            } else {
                output.innerText = 'No data found for this city'
            }
        }
        
        load(render)
    })
}