import React from 'react'
import { useContext } from 'react'
import { AllContext } from '../context/DataContext'
import { Link } from 'react-router-dom'

function Card({ city }) {
    return (
        <Link to={'tickets'} className='cityCard' >
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