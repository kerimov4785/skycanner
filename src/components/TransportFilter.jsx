import React, { useContext } from 'react'
import { AllContext } from '../context/DataContext'
import { getMonthName } from './FlightFilter'
import { useLocation } from 'react-router-dom';

function TransportFilter() {
    const location = useLocation();
    const params = new URLSearchParams(location.search)
    let fromCountry = params.get('from')
    let toCountry = params.get('to')
    let firstDate = params.get('date1')
    let secondDate = params.get('date2') ? params.get('date2') : ''
    let fromCity = params.get('fromCity')
    let toCity = params.get('toCity')

    return (
        <div className='transportFilter'>
            <h3>{fromCountry} - {toCountry}</h3>
            <h3>{firstDate.slice(8, 10)} {getMonthName(firstDate.slice(5, 7))} {secondDate ? '-' : ''} {secondDate?.slice(8, 10)} {getMonthName(secondDate.slice(5, 7))}</h3>
        </div>
    )
}

export default TransportFilter