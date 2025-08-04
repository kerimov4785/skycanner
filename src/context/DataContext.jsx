import React, { createContext, useEffect, useRef, useState } from 'react'

export const AllContext = createContext()
import { getAllFlights } from '../services/flightServices';

function DataContext({ children }) {
    let [flights, setFlights] = useState()
    let [tripType, setTripType] = useState('Туда-обратно')
    let [person, setPerson] = useState(1)
    let [typeStatus, setTypeStatus] = useState(false)
    let [fromPickerStatus, setFromPickerStatus] = useState(false)
    let [toPickerStatus, setToPickerStatus] = useState(false)
    let [datePicker1, setDatePicker1] = useState(false)
    let [datePicker2, setDatePicker2] = useState(false)
    let [fromPlace, setFromPlace] = useState('') // country1
    let [fromCity, setFromCity] = useState('Baku') // city1
    let [toPlace, setToPlace] = useState('')  // country2
    let [toCity, setToCity] = useState('')  // city2
    const [date1, setDate1] = useState('Добавьте дату');
    const [date2, setDate2] = useState('Добавьте дату');
    const [searchTicket, setSearchTicket] = useState('');

    useEffect(() => {
        getAllFlights()
            .then((item) => setFlights(item))
    }, [])
    const obj = {
        flights,
        setFlights,
        tripType,
        setTripType,
        person,
        setPerson,
        typeStatus,
        setTypeStatus,
        fromPickerStatus,
        setFromPickerStatus,
        toPickerStatus,
        setToPickerStatus,
        datePicker1,
        setDatePicker1,
        datePicker2,
        setDatePicker2,
        fromPlace,
        setFromPlace,
        fromCity,
        setFromCity,
        toPlace,
        setToPlace,
        toCity,
        setToCity,
        date1,
        setDate1,
        date2,
        setDate2,
        searchTicket,
        setSearchTicket
    }
    return (
        <AllContext.Provider value={obj} >
            {children}
        </AllContext.Provider>
    )
}

export default DataContext