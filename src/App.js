import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeatherAction } from './redux/slices/weatherSlices'
import './assets/styles/app.css'
import { MainContainer } from './container/MainContainer'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(fetchWeatherAction())
    }, [])

    return (
        <div className="app">
            <div className="container"> 
                <MainContainer />
            </div>
        </div>
    )
}

export default App
