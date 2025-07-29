import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaFlag, FaPlane } from 'react-icons/fa6'

function Advice1() {
    return (
        <div className='adviceBox' >
            <div>
                <div>
                    <FaPlane size={20} />
                </div>
                <p>Находите лучшие варианты для перелета между любыми точками мира и бронируйте авиабилеты без комиссий.</p>
            </div>
            <div>
                <div>
                    <FaCalendarAlt size={20} />
                </div>
                <p>Сравнивайте предложения более чем 1000 продавцов и выбирайте самые дешевые или быстрые авиабилеты либо авиарейсы с низким уровнем выбросов</p>
            </div>
            <div>
                <div>
                    <FaFlag size={20} />
                </div>
                <p>Найдите самый дешевый месяц и день для перелета по вашему направлению. Подпишитесь на уведомления, чтобы отслеживать изменение цен.</p>
            </div>
        </div>
    )
}

export default Advice1