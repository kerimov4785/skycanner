import React from 'react'
import { useContext } from 'react'
import { AllContext } from '../context/DataContext'
import { Link, useLocation } from 'react-router-dom'

function Card({ city }) {
    let { setToCity,flights } = useContext(AllContext)
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    let fromCountry = params.get('from')
    let toCountry = flights.find(item => item.cities.some(item => item.name == city.name)).country
    let firstDate = params.get('date1')
    let secondDate = params.get('date2') ? params.get('date2') : ''
    let fromCity = params.get('fromCity')
    let toCity = params.get('toCity')
    let tripType = params.get('tripType')
    let title1 = params.get('title1')
    let title2 = flights.find(item => item.cities.some(item => item.name == city.name)).title
    
    return (
        <Link onClick={() => setToCity(toCity)} to={`tickets/?tripType=${tripType}&from=${fromCountry}&title1=${title1}&title2=${title2}&to=${toCountry}&date1=${firstDate}&date2=${secondDate}&fromCity=${fromCity}&toCity=${city.name}`} className='cityCard' >
            <img src={`/assets/${city.image}`} alt="" />
            <div>
                <h3>{city.name}</h3>
                <div>
                    <h4>Авиабилеты • <span>Прямые</span></h4>
                    <p>{city.flights[0].price} $</p>
                </div>
            </div>
        </Link>
    )
}

export default Card