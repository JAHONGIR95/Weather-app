import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeatherAction } from '../redux/slices/weatherSlices'
export const InputBar = () => {
    const [city, setCity] = useState('')
    const dispatch = useDispatch()
    const inputEl = useRef(null)
    
    useEffect(() => {
        dispatch(fetchWeatherAction(city))     
    }, [city])
    
    const submitHandler = (e) => {
        e.preventDefault()
        const inputData = inputEl.current.value;
        if(inputData === '') return
        setCity(inputData)
        inputEl.current.value = ''
    }
    
    return (
        <div className="input-bar">
            <form onSubmit={submitHandler} className="form">
                <input type="text" ref={inputEl} className="form-input" placeholder="Another location" />
                <button type="submit" className="search-button"><i class='bx bx-search'></i></button>
            </form>
        </div>
    )
}
