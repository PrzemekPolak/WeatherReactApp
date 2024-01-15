import React, {createContext, useContext} from 'react';
import {useForecastData} from "./Hooks/useForecastData";
import {useSettings} from "./Hooks/useSettings";

const GlobalContext = createContext({});

export const StoreProvider = ({children}) => {

    const forecastData = useForecastData();
    const settings = useSettings();

    const store = {
        forecastData,
        settings,
    };

    return (
        <GlobalContext.Provider value={store}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useStore = () => {
    return useContext(GlobalContext);
}