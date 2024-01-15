import React, {useState} from "react";
import HeaderClock from './HeaderClock.js'
import headerImage from '../images/headerImage.png'
import HeaderLocalizationOption from './HeaderLocalizationOption.js'

function HeaderContainer() {
    const [currentLocalization, setCurrentLocalization] = useState('default')

    return <div>
            <div className="animate-header-linear-infinite h-[340px] bg-fixed dark:brightness-50" style={{backgroundImage: `url(${headerImage})`}}></div>
            <div className="absolute top-0 w-screen">
                <div className="max-w-sm">
                    <a href="https://github.com/PrzemekPolak/WeatherReactApp">Link do repo: https://github.com/PrzemekPolak/WeatherReactApp</a>
                </div>
                <HeaderClock />
                <h1 className="text-3xl font-bold underline text-center my-5">Prognoza pogody:</h1>
                <div className="flex gap-2 lg:gap-6 text-center justify-center items-center h-28 mx-1">
                    <HeaderLocalizationOption
                        currentLocalization={currentLocalization}
                        setCurrentLocalization={setCurrentLocalization}
                        idName="default"
                        label="Kraków"
                    />
                    <HeaderLocalizationOption
                        currentLocalization={currentLocalization}
                        setCurrentLocalization={setCurrentLocalization}
                        idName="yourLocalization"
                        label="Twoja lokalizacja"
                    />
                </div>
            </div>
        </div>
}

export default HeaderContainer;