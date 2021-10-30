import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchWeatherAction } from '../redux/slices/weatherSlices'

export const WeatherInfo = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchWeatherAction())
    }, [])

    const state = useSelector(state => state.weather)
    const clouds = state && state.clouds.all
    const humidity = state && state.main.humidity
    const wind = state && state.wind.speed
    const rain = state && state.rain
    
    return (
        <section className="weather-details">
            <h2 className="weather-title">Weather Details</h2>
            <div className="details">
                <p className="detail-title">Cloudy</p>
                <p className="detail-info">{`${clouds}%`}</p>
            </div>
            <div className="details">
                <p className="detail-title">Humidity</p>
                <p className="detail-info">{`${humidity}%`}</p>
            </div>
            <div className="details">
                <p className="detail-title">Wind</p>
                <p className="detail-info">{`${wind}m/s`}</p>
            </div>
            <div className="details">
                <p className="detail-title">Rain</p>
                <p className="detail-info">{`${rain ? rain['1h'] : '0'}mm`}</p>
            </div>
            
        </section>
    )
}
