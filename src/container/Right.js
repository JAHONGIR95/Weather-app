import React from 'react'
import { Cities } from '../components/Cities'
import { InputBar } from '../components/InputBar'
import { WeatherInfo } from '../components/WeatherInfo'

export const Right = () => {
    return (
        <div className="right">
            <div className="mobile-heddin-bar">
                <InputBar />
            </div>
            <Cities />
            <WeatherInfo />
        </div>
    )
}
