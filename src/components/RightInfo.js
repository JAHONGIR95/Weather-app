import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWeatherAction } from '../redux/slices/weatherSlices'


export const LeftInfo = () => {
    // current time function
    let now = new Date()
    let time = now.toLocaleTimeString()
    let date = now.toDateString()

    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(fetchWeatherAction('tashkent'))     
    }, [])

    const imgUrl = 'https://openweathermap.org/img/wn/'

    const state = useSelector(state => state.weather)
    const degree = state && Math.ceil(state.main.temp)
    const city = state && state.name
    const desc =  state && state.weather[0].main
    const icon = state && state.weather[0].icon

    return (
        <div className="right-info">
            <div className="info-top">
                <h1 className="degree">{degree}<sup>o</sup></h1>
                <div className="info-mid">
                    <h2 className="city-name">{city}</h2>
                    <span className="day-time">
                        {time}, {date}
                    </span>
                </div>
            </div>
            <div className="info-desc">
                <img className="desc-icon" src={`${imgUrl}${icon}@2x.png`} alt={desc} />
                <p className="desc">{desc}</p>
            </div>
        </div>
    )
}
