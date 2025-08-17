import React from 'react'
import { useLocation } from 'react-router-dom'
import { getMonthName } from './FlightFilter'

function CarFilterHeader() {
    let location = useLocation()
    let params = new URLSearchParams(location.search)
    let from = params.get('from')
    let date1 = params.get('date1')
    let time1 = params.get('time1')
    let date2 = params.get('date2')
    let time2 = params.get('time2')
    return (
        <div className='ticketFilter' >
            <h3>{from}</h3>
            <h3>{date1.slice(8, 10)} {getMonthName(date1.slice(5, 7))} {time1} - {date2.slice(8, 10)} {getMonthName(date2.slice(5, 7))} {time2}</h3>
        </div>
    )
}

export default CarFilterHeader