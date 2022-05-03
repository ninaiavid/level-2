const labels = []
const ratesEUR = []
const ratesUSD = []

const getRatesForDate = (date) => {
    const URL = `https://www.bnm.md/ro/official_exchange_rates?get_xml=1&date=${date}`

    const xhr = new XMLHttpRequest()
    xhr.open("GET", URL)
    xhr.send()

    xhr.onload = () => {
        let res = xhr.responseText

        let xmlParser = new DOMParser()
        let xmlDoc = xmlParser.parseFromString(res, "text/xml")

        let valuteEUR = xmlDoc.querySelector('[ID="47"]')
        let valueEUR = parseFloat(valuteEUR.lastElementChild.innerHTML)
        
        let valuteUSD = xmlDoc.querySelector('[ID="44"]')
        let valueUSD = parseFloat(valuteUSD.lastElementChild.innerHTML)

        ratesEUR.push(valueEUR)
        ratesUSD.push(valueUSD)
    }
}


const getRates = (fromDate, toDate) => {
    for (let date = fromDate; date <= toDate; date++){
        if (date < 10)
            date = '0' + getRatesForDate
        labels.push(`${date}.05.2022`)
        getRatesForDate(`${date}.05.2022`)
    }
}

getRates(1,3)

const plotData = () => {
    const data = {
        labels: labels,
        datasets: [{
            label: 'BNM Exchange Rates for EUR/MDL',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: ratesEUR,
        },
        {
            label: 'BNM Exchange Rates for USD/MDL',
            backgroundColor: 'rgb(132, 99, 255)',
            borderColor: 'rgb(132, 99, 255)',
            data: ratesUSD,
        }]
        
    }
    const config = {
        type: 'line',
        data: data,
        options: {}
    }
    const ratesChart = new Chart(
        document.getElementById('ratesChart'),
        config
    )
}
setTimeout(plotData, 2000)
