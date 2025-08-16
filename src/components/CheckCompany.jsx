import React, { useRef } from 'react'

function CheckCompany({ item, checkedCompany, setCheckedCompany }) {
    let inp1 = useRef()
    function delOrAdd(inp, companyName) {
        if (inp.current.checked) {
            setCheckedCompany([...checkedCompany, companyName])
        }
        else {
            setCheckedCompany(checkedCompany.filter(item => item != companyName))
        }
    }
    function toggleCheckbox(inp, companyName) {
        inp.current.checked = !inp.current.checked;
        delOrAdd(inp, companyName)
    }
    return (
        <div className='checkboxDiv'>
            <input defaultChecked ref={inp1} type="checkbox" style={{ margin: "0" }} onClick={() => delOrAdd(inp1, item)} />
            <div onClick={() => toggleCheckbox(inp1, item)} >
                <p>{item}</p>
                <h5>от 250$</h5>
            </div>
        </div>
    )
}

export default CheckCompany