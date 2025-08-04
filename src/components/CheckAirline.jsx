import React, { useRef } from 'react'

function CheckAirline({ item, setCheckedAirline, checkedAirline }) {
    let inp1 = useRef()
    function delOrAdd(inp,airlineName) {
        if (inp.current.checked) {
            setCheckedAirline([...checkedAirline, airlineName])
        }
        else {
            setCheckedAirline(checkedAirline.filter(item => item != airlineName))
        }
    }
    function toggleCheckbox(inp, airlineName) {
        inp.current.checked = !inp.current.checked;
        delOrAdd(inp,airlineName)
    }
    return (
        <div className='checkboxDiv'>
            <input defaultChecked ref={inp1} type="checkbox" style={{ margin: "0" }} onClick={() => delOrAdd(inp1,item) } />
            <div onClick={() => toggleCheckbox(inp1, item)} >
                <p>{item}</p>
                <h5>от 250$</h5>
            </div>
        </div>
    )
}

export default CheckAirline