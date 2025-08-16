import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { AllContext } from '../context/DataContext'
import { useLocation } from 'react-router-dom';
import CheckAirline from './CheckAirline';

function AviaCompany({airlines,setCheckedAirline,checkedAirline}) {
    let [isOpen, setIsOpen] = useState(true)

    return (
        <div className='company-box' style={{ height: !isOpen ? "40px" : `${86 + (43 * airlines.length)-20 }px` }} >
            <div className='filter-title' onClick={() => setIsOpen(!isOpen)} >
                <h4>Авиакопании</h4>
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div>
                {airlines.map((item, i) => (
                    <CheckAirline key={i} item={item} setCheckedAirline={setCheckedAirline} checkedAirline={checkedAirline} />
                ))
                }
            </div>
        </div>
    )
}

export default AviaCompany