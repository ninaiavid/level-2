class TMDBService {
    constructor(){
        this.accessKey = "ac6efd8942df1cab07a1a7fabe4c40ef" 
        this.baseUrl = "https://api.themoviedb.org/3"
    }
    get (options = {
            url: "",
            method: "",
            onSuccess: () => {}
            }) {
        let xhr = new XMLHttpRequest()
        xhr.open(options.method, this.baseUrl+options.url+"?api_key="+this.accessKey)
        xhr.send()
        xhr.onload = () => {
            let data = JSON.parse(xhr.responseText)
            options.onSuccess(data)
        }
    }
}

export default TMDBService