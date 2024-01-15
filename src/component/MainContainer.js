import React, { useState } from "react";
import DailyForecastContainer from './DailyForecastContainer.js'
import HourlyForecastContainer from './HourlyForecastContainer.js'
import ScrollToButton from './ScrollToButton.js'

function MainContainer(props) {
    const [selectedDay, setSelectedDay] = useState('')
    var dailyForecastRow = []
    for (var i=0; i < props.dailyData.time.length; i++) {
        dailyForecastRow.push(<DailyForecastContainer key={props.dailyData.time[i]}
            time={props.dailyData.time[i]}
            temperatureMin={props.dailyData.temperature_2m_min[i]}
            temperatureMax={props.dailyData.temperature_2m_max[i]}
            weathercode={props.dailyData.weathercode[i]}
            setSelectedDay={setSelectedDay}
            isSelected={selectedDay}
        />)
    }

    return <div className="mt-5">
        {(props.errorDetected) ?
            <div className="flex justify-center items-center text-[26px] text-[#e01414] mb-5">
                {'Błąd: ' + props.errorDetected}</div>
        : false} 
        <div className={(props.errorDetected) ? "opacity-[0.35]" : ""}>
            <div className="gap-2 mx-2 lg:mx-8 flex flex-wrap justify-center xl:justify-between">
                {dailyForecastRow}
            </div>
            <div>
            {/* props.hourlyData[selectedDay] !== undefined in case of different dates range between datasets */}
                {(selectedDay && props.hourlyData[selectedDay] !== undefined) ? <HourlyForecastContainer
                    key={props.hourlyData.time}
                    selectedDay={selectedDay}
                    time={props.hourlyData[selectedDay].time}
                    temperature={props.hourlyData[selectedDay].temperature}
                    weathercode={props.hourlyData[selectedDay].weathercode}
                />
                : false}
            </div>
            <div>
                {selectedDay && document.body.clientWidth < 1370 ? <ScrollToButton
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                />
                : false}
            </div>
        </div>
    </div>
}

export default MainContainer;
