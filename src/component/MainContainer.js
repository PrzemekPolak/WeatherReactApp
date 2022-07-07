import React, { useState } from "react";
import DailyForcastContainer from './DailyForcastContainer.js'
import HourlyForcastContainer from './HourlyForcastContainer.js'

function MainContainer(props) {

    function prepareHourlyData(hourlyData) {
        var result = {}       
        // Create dictionary with correct keys based on data
        for (var i=0; i<hourlyData.time.length; i++) {
            const id = hourlyData.time[i].substr(0, 10)
            result[id] = {
                time: [],
                temperature: [],
                weathercode: [],
            }
        }
        // Add values to dictionary
        for (var x=0; x<hourlyData.time.length; x++) {
            const id = hourlyData.time[x].substr(0, 10)
            const time = hourlyData.time[x].substr(11, 5)
            result[id].time.push(time)
            result[id].temperature.push(hourlyData.temperature_2m[x])
            result[id].weathercode.push(hourlyData.weathercode[x])
        }
        return result
    }



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


    return <div>
            <h1 className="text-3xl font-bold underline">{props.yy}</h1>
            <div className="grid grid-cols-7 gap-4 mx-8">
                {dailyForecastRow}
            </div>
            <div className="">
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
