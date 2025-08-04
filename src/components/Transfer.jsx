import React, { useRef, useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
function Transfer({ checkedWayType, setCheckedWayType }) {
    let [isOpen, setIsOpen] = useState(true)
    let inp1 = useRef()
    let inp2 = useRef()
    let inp3 = useRef()
    function delOrAdd(inp, wayType) {
        if (inp.current.checked) {
            setCheckedWayType([...checkedWayType, wayType])
        }
        else {
            setCheckedWayType(checkedWayType.filter(item => item != wayType))
        }
    }
    function toggleCheckbox(inp,wayType) {
        inp.current.checked = !inp.current.checked;
        delOrAdd(inp,wayType)
    }
    return (
        <div className='transfer-box' style={{ height: !isOpen ? "40px" : '210px' }} >
            <div className='filter-title' onClick={() => setIsOpen(!isOpen)} >
                <h4>Пересадка в пути</h4>
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div className='checkboxDiv' >
                <input defaultChecked ref={inp1} type="checkbox" style={{ margin: "0" }} onClick={() => delOrAdd(inp1,'Прямой')} />
                <div onClick={() => toggleCheckbox(inp1,'Прямой')} >
                    <p>Прямой</p>
                    <h5>от 250$</h5>
                </div>
            </div>
            <div className='checkboxDiv' >
                <input ref={inp2} type="checkbox" style={{ margin: "0" }} />
                <div onClick={() => toggleCheckbox(inp2)} >
                    <p>1 пересадка</p>
                    <h5>от 350$</h5>
                </div>
            </div>
            <div className='checkboxDiv' >
                <input ref={inp3} type="checkbox" style={{ margin: "0" }} />
                <div onClick={() => toggleCheckbox(inp3)} >
                    <p>2+ пересадки</p>
                    <h5>от 550$</h5>
                </div>
            </div>
        </div>
    )
}

export default Transfer