import React from 'react'
import { Link } from 'react-router-dom'

function PopularCard({city}) {
    return (
        <Link className='pop-Card' >
            <img src={`/assets/${city.cityImage}`} alt="" />
            <div>
                <h3>{city.city}</h3>
                <div>
                    <h4>{city.country} • <span style={{fontSize:"12px"}} >Самый популярный тип автомобиля: Эконом-класс</span></h4>
                    <p>{city.cars[0].price_per_day}$</p>
                </div>
            </div>
        </Link>
    )
}

export default PopularCard