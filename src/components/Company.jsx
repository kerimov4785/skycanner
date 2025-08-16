import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'
import CheckCompany from './CheckCompany'

function Company({ allCompany, checkedCompany, setCheckedCompany }) {
    let [isOpen, setIsOpen] = useState(true)

    return (
        <div className='company-box' style={{ height: !isOpen ? "40px" : `${86 + (45 * allCompany.length) - 20}px` }} >
            <div className='filter-title' onClick={() => setIsOpen(!isOpen)} >
                <h4>Прокатчик</h4>
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div>
                {allCompany.map((item, i) => (
                    <CheckCompany key={i} item={item} checkedCompany={checkedCompany} setCheckedCompany={setCheckedCompany} />
                ))
                }
            </div>
        </div>
    )
}

export default Company