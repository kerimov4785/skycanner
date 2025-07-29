import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

function Question({ q }) {
    let [status, setStatus] = useState(false)
    let BlockStyle = {
        maxHeight: "300px",
    }
    let NoneStyle = {
        maxHeight: "0px",
    }
    return (
        <div className='question'>
            <h5 onClick={() => setStatus(!status)} >{q.question}</h5>
            {status ? <FaAngleUp /> : <FaAngleDown />}
            <p style={status ? BlockStyle : NoneStyle} >{q.answer}</p>
        </div>
    )
}

export default Question