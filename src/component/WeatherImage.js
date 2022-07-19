import React from "react";

function WeatherImage(props) {
    var weathercodeToImage = {
        0: ['Czyste niebo', 'weathercode-0'],
        1: ['Przeważająco bezchmurnie', 'weathercode-0'], 2: ['Częściowe zachmurzenie', 'weathercode-0'], 3: ['Zachmurzenie', 'weathercode-0'], 
        45: ['Mgła', 'weathercode-0'], 48: ['Osadzająca się mgła szronowa', 'weathercode-0'], 
        51: ['Lekka mżawka', 'weathercode-0'], 53: ['Umiarkowana mżawka', 'weathercode-0'], 55: ['Gęsta mżawka', 'weathercode-0'],
        56: ['Lekka marznąca mżawka', 'weathercode-0'], 57: ['Gęsta marznąca mżawka', 'weathercode-0'],
        61: ['Lekki deszcz', 'weathercode-0'], 63: ['Umiarkowany deszcz', 'weathercode-0'], 65: ['Intensywny deszcz', 'weathercode-0'],
        66: ['Lekki marznący deszcz', 'weathercode-0'], 67: ['Intensywny marznący deszcz', 'weathercode-0'],
        71: ['Niewielkie opady śniegu', 'weathercode-0'], 73: ['Umiarkowane opady śniegu', 'weathercode-0'], 75: ['Intensywne opady śniegu', 'weathercode-0'],
        77: ['Ziarna śniegu', 'weathercode-0'],
        80: ['Lekkie przelotne opady deszczu', 'weathercode-82'], 81: ['Umiarkowane przelotne opady deszczu', 'weathercode-82'], 82: ['Gwałtowne przelotne opady deszczu', 'weathercode-82'],
        85: ['Lekkie opady śniegu', 'weathercode-0'], 86: ['Obfite opady śniegu', 'weathercode-0'],
        95: ['Burza', 'weathercode-95'], 96: ['Burza z lekkim gradem', 'weathercode-95'], 99: ['Burza z silnym gradem', 'weathercode-95'],
    }

    // Depending on hour add night images
    var imageName = weathercodeToImage[props.weathercode][1]
    var currentHour = parseInt(props.time.substr(0, 2))
    if (currentHour > 20 || currentHour < 6) {
        // imageName += 'n'
        // placeholder
        imageName = 'weathercode-1n'
    }

    return <div>
            {props.settings.noIcons ?
                (<div
                className={props.smallSize ? "rotate-[35deg] ml-2"
                    : "rotate-0 h-[50px] flex justify-center items-center text-center"}>
                    {weathercodeToImage[props.weathercode][0]}
                </div>)
                : (<img src={require(`../images/${imageName}.png`)} alt='Weather symbol' />)
            }
            </div>
}

export default WeatherImage;