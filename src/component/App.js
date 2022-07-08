import React, { useState } from "react";
import HeaderContainer from './HeaderContainer.js'
import MainContainer from './MainContainer.js'
import SettingsContainer from './SettingsContainer.js'
import forecast from './forecast.json'

function App() {
  //var data = JSON.parse(fs.readFileSync('../forecast.json'));

  
    var forcastData = forecast
  // fetch('url',{
  //   headers : { 
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //    }
  // })
  //     .then(response => {
  //         return response.json()
  //     })
  //     .then(data => {
  //         forcastData = data
  //     })

    function onGearClick() {
        changeSettingsVisibility(current => !current)
    }
    const [settingsVisible, changeSettingsVisibility] = useState(false) 

    const [settings, changeSettings] = useState({
                                'showx': true,
                                'showy': true,      
                                      })

    return (
        <div className="App">
            <HeaderContainer x='Prognoza pogody'/>
            <MainContainer hourlyData={forcastData.hourly} dailyData={forcastData.daily}/>

            <div onClick={onGearClick} className="w-[80px] fixed top-0 right-0 select-none z-10">
              <div className="text-[50px] text-center">&#9881;</div>
            </div>
            {settingsVisible && <SettingsContainer settings={settings} changeSettings={changeSettings}/>}
        
          <div>
            {console.log(settings.showx + ' | | ' + settings.showy)}
          </div>

        </div>
  );
}

export default App;
