const loadDataFromAPI = (cb) => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=47.0056&lon=28.8575&appid=2d247402a435263cf00447494cae2b54&units=metric")
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
        cb(data)
    } else {
        loadDataFromAPI((data) => {
            saveDataToCache("data", data)
            cb(data)
        })
    }
}

const saveDataToCache = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

const loadDataFromCache = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

const checkDataCache = (key) => {
    return localStorage.getItem(key)
}

const render = (data) => {
    console.log(data)
}

load(render)
