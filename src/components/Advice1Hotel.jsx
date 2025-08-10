import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaFlag, FaPlane } from 'react-icons/fa6'

function Advice1Hotel() {
    return (
        <div className='adviceBox' >
            <div>
                <div>
                    <FaPlane size={20} />
                </div>
                <p>Находите выгодные предложения на прокат автомобилей за считанные секунды из любой точки мира</p>
            </div>
            <div>
                <div>
                    <FaCalendarAlt size={20} />
                </div>
                <p>Сравнивайте предложения от надежных компаний по прокату автомобилей на одной странице</p>
            </div>
            <div>
                <div>
                    <FaFlag size={20} />
                </div>
                <p>Арендуйте авто с гибкими условиями бронирования или бесплатной отменой</p>
            </div>
        </div>
    )
}

export default Advice1Hotel