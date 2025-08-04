import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider'
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

function TimePicker({value,value2,setValue,setValue2,tripType}) {
    let [isOpen, setIsOpen] = useState(true)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };
    const formatTime = (minutes) => {
        const hrs = String(Math.floor(minutes / 60)).padStart(2, '0');
        const mins = String(minutes % 60).padStart(2, '0');
        return `${hrs}:${mins}`;
    };
    return (
        <div className='time-box' style={{ height: !isOpen ? "40px" : tripType == "Туда-обратно" ? '250px' : '150px' }}>
            <div className='filter-title' onClick={() => setIsOpen(!isOpen)} >
                <h4>Время отправления</h4>
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <h3>Туда</h3>
            <h3 style={{ marginTop: '5px' }} >{formatTime(value[0])}- {formatTime(value[1])}</h3>
            <div className='slider' >
                <Slider
                    sx={{ width: "90%" }}
                    min={0}
                    max={1439}
                    step={30}
                    value={value}
                    onChange={handleChange}
                />
            </div>
            { tripType == "Туда-обратно" ?
                <div id='return' >
                <h3>Обратно</h3>
                <h3 style={{ marginTop: '5px' }} >{formatTime(value2[0])}- {formatTime(value2[1])}</h3>
                <div className='slider' >
                    <Slider
                        sx={{ width: "90%" }}
                        min={0}
                        max={1439}
                        step={30}
                        value={value2}
                        onChange={handleChange2}
                    />
                </div>
            </div> : null
            }
        </div>
    )
}

export default TimePicker