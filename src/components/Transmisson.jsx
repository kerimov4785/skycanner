import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'

function Transmisson() {
    let [isOpen, setIsOpen] = useState(true)

    return (
        <>
            <div className='transmission-box' style={{ height: !isOpen ? "40px" : '120px' }} >
                <div className='filter-title' onClick={() => setIsOpen(!isOpen)} >
                    <h4>Коробка передач</h4>
                    {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                <div>
                    <div>
                        <input type="checkbox" />
                        <h3>Автоматическая</h3>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <h3>Механическая</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transmisson