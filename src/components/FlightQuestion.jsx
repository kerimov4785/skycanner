import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'

function FlightQuestion({ q }) {
    let [status, setStatus] = useState(false)
    let BlockStyle = {
        maxHeight: "300px",
    }
    let NoneStyle = {
        maxHeight: "0px",
    }
    return (
        <div className='question'>
            <h3 onClick={() => setStatus(!status)} >{q.question}</h3>
            {status ? <FaAngleUp /> : <FaAngleDown />}
            <p style={status ? BlockStyle : NoneStyle} >{q.answer}</p>
        </div>
    )
}

export default FlightQuestion