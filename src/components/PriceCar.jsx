import Slider from '@mui/material/Slider';
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'

function PriceCar({min,max, value, setValue }) {
    let [isOpen, setIsOpen] = useState(true)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className='price-box' style={{ height: !isOpen ? "40px" : '170px' }} >
                <div className='filter-title' onClick={() => setIsOpen(!isOpen)} >
                    <h4>Цена</h4>
                    {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                <div className='slider' >
                    <Slider
                        sx={{ width: "90%" }}
                        min={min}
                        max={max}
                        step={1}
                        value={value}
                        onChange={handleChange}
                    />
                </div>
                <div className='price-car-info' >
                    <div>
                        <p>Минимум</p>
                        <div>{value[0]}₼</div>
                    </div>
                    <div>
                        <p>Максимум</p>
                        <div>{value[1]}₼</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceCar