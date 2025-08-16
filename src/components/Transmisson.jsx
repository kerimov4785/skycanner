import React, { useRef, useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'

function Transmisson({ checkedTransmission, setCheckedTransmission }) {
    let [isOpen, setIsOpen] = useState(true)
    let inp1 = useRef()
    let inp2 = useRef()
    console.log(checkedTransmission);
    
    function delOrAdd(inp, transmissionName) {
        if (inp.current.checked) {
            setCheckedTransmission([...checkedTransmission, transmissionName])
        }
        else {
            setCheckedTransmission(checkedTransmission.filter(item => item != transmissionName))
        }
    }
    function toggleCheckbox(inp, transmissionName) {   
        inp.current.checked = !inp.current.checked;
        delOrAdd(inp, transmissionName)
    }
    return (
        <>
            <div className='transmission-box' style={{ height: !isOpen ? "40px" : '120px' }} >
                <div className='filter-title' onClick={() => setIsOpen(!isOpen)} >
                    <h4>Коробка передач</h4>
                    {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                <div>
                    <div  onClick={() => toggleCheckbox(inp1, 'Автоматическая')}  >
                        <input onClick={() => toggleCheckbox(inp1,'Автоматическая')} ref={inp1} defaultChecked type="checkbox" />
                        <h3>Автоматическая</h3>
                    </div>
                    <div onClick={() => toggleCheckbox(inp2, 'Механическая')} >
                        <input onClick={() => toggleCheckbox(inp2,'Механическая')} ref={inp2} defaultChecked type="checkbox" />
                        <h3>Механическая</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transmisson