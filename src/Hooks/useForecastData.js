import {useState} from "react";
import prepareHourlyData from "../utils/prepareHourlyData";

export const useForecastData = () => {
    function fetchData(latitude, longitude, setDataFunction) {
        var url = 'https://api.open-meteo.com/v1/forecast?latitude=' + latitude + '&longitude=' + longitude
            + '&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin'
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                data.hourly = prepareHourlyData(data.hourly)
                setDataFunction(data)
                setCurrentForecast(data)
                setLoadingData(false)
            })
    }

    const [currentForecast, setCurrentForecast] = useState(null)
    const [defaultForecast, setDefaultForecast] = useState(null)
    const [yourLocalizationForecast, setYourLocalizationForecast] = useState(null)
    const [loadingData, setLoadingData] = useState(false)
    const [error, setError] = useState(null)

    if (null === defaultForecast) {
        fetchData(50.05, 19.95, setDefaultForecast)
    }

    const useDataForDefaultLocalization = () => {
        setError(null);
        setCurrentForecast(defaultForecast)
    }

    const useDataForCurrentLocalization = () => {
        if (null === yourLocalizationForecast) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    fetchData(position.coords.latitude, position.coords.longitude, setYourLocalizationForecast)
                    setError(null)
                },
                (error) => {
                    setLoadingData(false)

                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            setError('Brak zgody użytkownika na udostępnienie lokalizacji');
                            break
                        case error.POSITION_UNAVAILABLE:
                            setError('Informacja o lokalizacji jest niedostępna')
                            break
                        default:
                            setError('Wystąpił inny błąd')
                            break
                    }
                }
            )
        }
        else {
            setCurrentForecast(yourLocalizationForecast)
        }
    }

    return {
        useDataForDefaultLocalization,
        useDataForCurrentLocalization,
        currentForecast,
        loadingData,
        error,
    }
}
