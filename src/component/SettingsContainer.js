import React, { useState } from "react";
import ToggleSwitch from './ToggleSwitch.js'
import {useStore} from "../store";

function SettingsContainer() {
    const {settings} = useStore()
    const [settingsVisible, changeSettingsVisibility] = useState(false)

    return <div>
            <div onClick={() => changeSettingsVisibility(current => !current)} className="w-[80px] fixed top-0 right-0 z-10 cursor-pointer">
                <div className="text-[50px] text-center">&#9881;</div>
            </div>
            {settingsVisible && 
            <div className="w-80 pb-4 bg-white/[.95] md:bg-white/[.8] dark:bg-stone-800/[.95] dark:md:bg-stone-800/[.8] fixed top-0 right-0
                        border-double border-4 border-black">
            <div className="text-[26px] text-center font-bold mr-[60px] my-5">
                Ustawienia
            </div>
            <div>
                <ToggleSwitch
                    checked={settings.noIcons}
                    toggleFunction={settings.changeNoIcons}
                    label='Tekst zamiast symbolu pogody'
                />
            </div>
            <div>
                <ToggleSwitch
                    checked={settings.darkMode}
                    toggleFunction={settings.changeDarkMode}
                    label='Tryb ciemny'
                />
            </div>
        </div>}
    </div>
}

export default SettingsContainer;
