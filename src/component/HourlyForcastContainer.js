import React from "react";
import HourlyTemperatureChart from './HourlyTemperatureChart.js'

function HourlyForcastContainer(props) {
    return <div className="">
                <div>
                    Prognoza pogody na {props.selectedDay}
                </div>
                <div className="overflow-auto">
                    <div className="mx-10 h-72 w-[2200px]">
                        <HourlyTemperatureChart key={props.time}
                            time={props.time}
                            temperature={props.temperature}
                            weathercode={props.weathercode}
                        />
                    </div>
                </div>
                <div>
                    {props.weathercode}
                </div>
            </div>
}

export default HourlyForcastContainer;