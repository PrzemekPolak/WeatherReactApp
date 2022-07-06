import React from "react";
import DailyForcastContainer from './DailyForcastContainer.js'

function MainContainer(props) {
    // console.log(props.hourlyData)
    // console.log(props.dailyData)


    var dailyForecastRow = []

    for (var i=0; i < props.dailyData.time.length; i++) {
        dailyForecastRow.push(<DailyForcastContainer key={props.dailyData.time[i]}
            time={props.dailyData.time[i]}
            temperatureMin={props.dailyData.temperature_2m_min[i]}
            temperatureMax={props.dailyData.temperature_2m_max[i]}
            weathercode={props.dailyData.weathercode[i]} />)
    }

    return <div>
            <h1 className="text-3xl font-bold underline">{props.yy}</h1>
            <div className="grid grid-cols-7 gap-4 mx-8">
                {dailyForecastRow}
            </div>
        </div>;
}

export default MainContainer;
