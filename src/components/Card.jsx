import React from 'react'
import { useContext } from 'react'
import { AllContext } from '../context/DataContext'

function Card({ city }) {
    let { flights } = useContext(AllContext)
    // console.log(city);
    
    // console.log(flights.find(item => item.cities[0].name == city.to ))
    
    return (
        <div className='cityCard' >
            <img src={`../public/assets/${city.image}`} alt="" />
            <div>
                <h3>{city.name}</h3>
                <div>
                    <h4>Авиабилеты • <span>Прямые</span></h4>
                    <p>{city.flights[0].price} $</p>
                </div>
            </div>
        </div>
    )
}

export default Card