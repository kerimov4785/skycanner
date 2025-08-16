import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'

function PlaceQuantity() {
    let [isOpen, setIsOpen] = useState(true)

    return (
        <>
            <div className='place-box' style={{ height: !isOpen ? "35px" : '80px' }} >
                <div className='filter-title' onClick={() => setIsOpen(!isOpen)} >
                    <h4>Места</h4>
                    {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                <div>
                    <div>4-5</div>
                    <div>6+</div>
                </div>
            </div>
        </>
    )
}

export default PlaceQuantity