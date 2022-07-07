import React, { useState } from "react";
import DailyForcastContainer from './DailyForcastContainer.js'
import HourlyForcastContainer from './HourlyForcastContainer.js'
import prepareHourlyData from '../utils/prepareHourlyData.js'

function MainContainer(props) {

    // var date = new Date().toJSON();
    // console.log(date)

    var hourlyData = prepareHourlyData(props.hourlyData)

    function handleClick(event) {
        if (selectedDay === event.currentTarget.id) {
            setSelectedDay('')
        }
        else {
            setSelectedDay(event.currentTarget.id)
        }
    };

    const [selectedDay, setSelectedDay] = useState('')
    var dailyForecastRow = []

    for (var i=0; i < props.dailyData.time.length; i++) {
        dailyForecastRow.push(<DailyForcastContainer key={props.dailyData.time[i]}
            time={props.dailyData.time[i]}
            temperatureMin={props.dailyData.temperature_2m_min[i]}
            temperatureMax={props.dailyData.temperature_2m_max[i]}
            weathercode={props.dailyData.weathercode[i]}
            handleClick={handleClick}
            isSelected={selectedDay}
        />)
    }

    return <div className="mt-5">
            <div className="grid grid-cols-7 gap-4 mx-8">
                {dailyForecastRow}
            </div>
            <div>
                {selectedDay ? <HourlyForcastContainer key={hourlyData.time}
                    selectedDay={selectedDay}
                    time={hourlyData[selectedDay].time}
                    temperature={hourlyData[selectedDay].temperature}
                    weathercode={hourlyData[selectedDay].weathercode}
                />
                : false}
            </div>
        </div>
}

export default MainContainer;
