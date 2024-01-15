import React from "react";
import {useStore} from "../store";

function WeatherImage(props) {
    const {settings} = useStore()

    var weathercodeToImage = {
        0: ['Czyste niebo', 'wcode-0'],
        1: ['Przeważająco bezchmurnie', 'wcode-0'], 2: ['Częściowe zachmurzenie', 'wcode-3'], 3: ['Zachmurzenie', 'wcode-3'], 
        45: ['Mgła', 'wcode-45'], 48: ['Osadzająca się mgła szronowa', 'wcode-45'], 
        51: ['Lekka mżawka', 'wcode-65'], 53: ['Umiarkowana mżawka', 'wcode-65'], 55: ['Gęsta mżawka', 'wcode-65'],
        56: ['Lekka marznąca mżawka', 'wcode-65'], 57: ['Gęsta marznąca mżawka', 'wcode-65'],
        61: ['Lekki deszcz', 'wcode-65'], 63: ['Umiarkowany deszcz', 'wcode-65'], 65: ['Intensywny deszcz', 'wcode-65'],
        66: ['Lekki marznący deszcz', 'wcode-65'], 67: ['Intensywny marznący deszcz', 'wcode-65'],
        71: ['Niewielkie opady śniegu', 'wcode-85'], 73: ['Umiarkowane opady śniegu', 'wcode-85'], 75: ['Intensywne opady śniegu', 'wcode-85'],
        77: ['Ziarna śniegu', 'wcode-85'],
        80: ['Lekkie przelotne opady deszczu', 'wcode-65'], 81: ['Umiarkowane przelotne opady deszczu', 'wcode-65'], 82: ['Gwałtowne przelotne opady deszczu', 'wcode-65'],
        85: ['Lekkie opady śniegu', 'wcode-85'], 86: ['Obfite opady śniegu', 'wcode-85'],
        95: ['Burza', 'wcode-95'], 96: ['Burza z lekkim gradem', 'wcode-95'], 99: ['Burza z silnym gradem', 'wcode-95'],
    }

    // Depending on hour add night images
    var imageName = weathercodeToImage[props.weathercode][1]
    var currentHour = parseInt(props.time.substr(0, 2))
    // Array below contain numbers of weathercodes that should have different image during night
    if ((currentHour > 20 || currentHour < 6) && [0, 1].includes(props.weathercode)) {
        // imageName += 'n'

        // placeholder
        imageName = 'wcode-0n'
    }

    return <div>
            {settings.noIcons ?
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
