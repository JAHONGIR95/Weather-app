import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeatherAction } from '../redux/slices/weatherSlices'

export const Cities = () => {
    const dispatch = useDispatch()
    return (
        <section className="cities">
            <p onClick={() => dispatch(fetchWeatherAction('tashkent'))} className="single-city">Tashkent</p>
            <p onClick={() => dispatch(fetchWeatherAction('samarkand'))} className="single-city">Samarkand</p>
            <p onClick={() => dispatch(fetchWeatherAction('urgench'))} className="single-city">Urgench</p>
            <p onClick={() => dispatch(fetchWeatherAction('bukhara'))} className="single-city">Bukhara</p>
        </section>
    )
}
