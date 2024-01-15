import React from "react";
import HeaderContainer from './HeaderContainer.js'
import MainContainer from './MainContainer.js'
import SettingsContainer from './SettingsContainer.js'
import Footer from './Footer.js'
import {useStore} from "../store";

function App() {
    const {forecastData, settings} = useStore()
    const {currentForecast, loadingData, error,} = forecastData;

    return (
        <div className={settings.darkMode ? "dark" : ""}>
            <div className={"min-h-screen bg-sky-200 dark:bg-stone-800 dark:text-[#e6ebed] select-none "
                    + (loadingData ? 'brightness-50' : false)}>
                <HeaderContainer/>
                {currentForecast !== null ?
                <MainContainer 
                    hourlyData={currentForecast.hourly}
                    dailyData={currentForecast.daily}
                    errorDetected={error}
                />
                : false}
                <SettingsContainer />
                <Footer />
            </div>
        </div>
    )
}

export default App;
