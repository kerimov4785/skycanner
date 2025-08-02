import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { AllContext } from '../context/DataContext'
import { useLocation } from 'react-router-dom';

function AviaCompany({toCity}) {
    let { flights } = useContext(AllContext)
    let allAirlines = []
    flights.map(item => item.cities.map(item => item.flights.filter(item => item.to == toCity).map(item => allAirlines.push(item.airline))
    ))
    let airlines = [...new Set(allAirlines)]

    let [isOpen, setIsOpen] = useState(true)
    let inp1 = useRef()
    function toggleCheckbox(inp) {
        inp.current.checked = !inp.current.checked;
    }
    return (
        <div className='company-box' style={{ height: !isOpen ? "40px" : `${86 + (43 * airlines.length)-20 }px` }} >
            <div className='filter-title' onClick={() => setIsOpen(!isOpen)} >
                <h4>Авиакопании</h4>
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div>
                {airlines.map((item, i) => (
                    <div className='checkboxDiv' key={i} >
                        <input defaultChecked ref={inp1} type="checkbox" style={{ margin: "0" }} />
                        <div onClick={() => toggleCheckbox(inp1)} >
                            <p>{item}</p>
                            <h5>от 250$</h5>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default AviaCompany