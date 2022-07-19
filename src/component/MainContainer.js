import React, { useState } from "react";
import DailyForcastContainer from './DailyForcastContainer.js'
import HourlyForcastContainer from './HourlyForcastContainer.js'
import ScrollToButton from './ScrollToButton.js'
import prepareHourlyData from '../utils/prepareHourlyData.js'

function MainContainer(props) {
    
    var hourlyData = prepareHourlyData(props.hourlyData)

    const [selectedDay, setSelectedDay] = useState('')
    var dailyForecastRow = []

    for (var i=0; i < props.dailyData.time.length; i++) {
        dailyForecastRow.push(<DailyForcastContainer key={props.dailyData.time[i]}
            time={props.dailyData.time[i]}
            temperatureMin={props.dailyData.temperature_2m_min[i]}
            temperatureMax={props.dailyData.temperature_2m_max[i]}
            weathercode={props.dailyData.weathercode[i]}
            setSelectedDay={setSelectedDay}
            isSelected={selectedDay}
            settings={props.settings}
        />)
    }

    return <div className="mt-5">
            <div className="gap-2 mx-2 lg:mx-8 flex flex-wrap justify-center xl:justify-between">
                {dailyForecastRow}
            </div>
            <div>
                {selectedDay ? <HourlyForcastContainer key={hourlyData.time}
                    selectedDay={selectedDay}
                    time={hourlyData[selectedDay].time}
                    temperature={hourlyData[selectedDay].temperature}
                    weathercode={hourlyData[selectedDay].weathercode}
                    settings={props.settings}
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
}

export default MainContainer;
