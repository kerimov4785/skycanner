import React from 'react'
import { Link } from 'react-router-dom'

function PopularCard() {
    return (
        <Link className='pop-Card' >
            <img src={`/assets/almaty.png`} alt="" />
            <div>
                <h3>Paris</h3>
                <div>
                    <h4>Авиабилеты • <span>Прямые</span></h4>
                    <p>120$</p>
                </div>
            </div>
        </Link>
    )
}

export default PopularCard