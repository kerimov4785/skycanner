import React from 'react'
import { FaAngleDown, FaArrowRight, FaArrowsRotate, FaRotate } from 'react-icons/fa6'

function CarFilter() {
    return (
        <>
            <div className='filterHotel'>
                <div>
                    <div className='filter-box2'>
                        <p>Место получения</p>
                        <input placeholder='Город или аэропорт' />
                    </div>
                    <div className='dateHotels' >
                        <div className='filter-box2'>
                            <p>Дата получения</p>
                            <h5>12.08.2025</h5>
                        </div>
                        <div className='filter-box2' >
                            <p>Время</p>
                            <h5>15.00</h5>
                        </div>
                        <div className='filter-box2'>
                            <p>Дата возврата</p>
                            <h5>15.08.2025</h5>
                        </div>
                        <div className='filter-box2'>
                            <p>Время</p>
                            <h5>19.00</h5>
                        </div>
                    </div>
                </div>
                <div className='buttonSearch2' onClick={() => search()} >
                    <h3>Поиск</h3>
                </div>
            </div>
        </>
    )
}

export default CarFilter