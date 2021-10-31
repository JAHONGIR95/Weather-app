import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import balloon from '../assets/images/balloon.png'
import { InputBar } from '../components/InputBar'
import { LeftInfo } from '../components/RightInfo'
import wallpaper from '../components/Wallpaper'
import { fetchWeatherAction } from '../redux/slices/weatherSlices'


export const Left = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchWeatherAction())     
    }, [])

    const state = useSelector(state => state.weather)
    const desc = state && state.weather[0].description
    return (
        <div className="left" style={ desc === 'clear sky' ? { background: 'rgb(34,110,200)',
            background: 'linear-gradient(180deg, rgba(34,110,200,1) 0%, rgba(102,157,196,0.8421743697478992) 76%, rgba(0,212,255,1) 100%)'} : { backgroundImage:`url(${wallpaper(desc)})`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div className="mobile-wrap">
                <p className="left-title">the.weather</p>
                <div className="mobile-top"><InputBar /></div>
            </div>
            <div className="img-wrapper">
                <img className="image" src={desc === 'clear sky' && balloon} alt="" />
            </div>
            <LeftInfo />
        </div>
    )
}
