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
            temperatureMax={props.dailyData.temperature_2m_max[i]} />)
    }

    return <div>
            <h1>{props.yy}</h1>
            <div>{props.dailyData.time}</div>
            <div>
                {dailyForecastRow}
            </div>
        </div>;
}

export default MainContainer;
