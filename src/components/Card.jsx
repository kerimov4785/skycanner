import React from 'react'
import { useContext } from 'react'
import { AllContext } from '../context/DataContext'
import { Link, useLocation } from 'react-router-dom'

function Card({ city }) {
    let { setToCity } = useContext(AllContext)
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    let fromCountry = params.get('from')
    let toCountry = params.get('to')
    let firstDate = params.get('date1')
    let secondDate = params.get('date2') ? params.get('date2') : ''
    let fromCity = params.get('fromCity')
    let toCity = params.get('toCity')
    console.log(firstDate);
    
    return (
        <Link onClick={() => setToCity(toCity)} to={`tickets/?from=${fromCountry}&to=${toCountry}&date1=${firstDate}&date2=${secondDate}&fromCity=${fromCity}&toCity=${city.name}`} className='cityCard' >
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