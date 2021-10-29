import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeatherAction } from './redux/slices/weatherSlices'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(fetchWeatherAction('tashkent'))
    }, [])

    const state = useSelector(state => state)
    console.log(state);
    return (
        <div>
            <h1>weather app</h1>
        </div>
    )
}

export default App
