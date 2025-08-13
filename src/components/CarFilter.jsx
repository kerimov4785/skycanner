import React, { useContext, useRef, useState } from 'react'
import { FaAngleDown, FaArrowRight, FaArrowsRotate, FaRotate } from 'react-icons/fa6'
import { AllContext } from '../context/DataContext'
import Car_FromPicker from './Car_FromPicker';
import DatePicker1Car from './DatePicker1Car';
import DatePicker2Car from './DatePicker2Car';
import TimePicker1Car from './TimePicker1Car';
import TimePicker2Car from './TimePicker2Car';

function CarFilter() {
    let { date1Car, date2Car, time1Car, time2Car, cars, fromPlaceCar, setFromPlaceCar } = useContext(AllContext)

    let [fromPickerStatus, setFromPickerStatus] = useState(false)
    let [date1PickerStatus, setDate1PickerStatus] = useState(false)
    let [date2PickerStatus, setDate2PickerStatus] = useState(false)
    let [time1PickerStatus, setTime1PickerStatus] = useState(false)
    let [time2PickerStatus, setTime2PickerStatus] = useState(false)

    let inp1Ref = useRef(null)
    let fromP = useRef(null)
    let fromBox = useRef(null)
    let date1Box = useRef(null)
    let date1P = useRef(null)
    let date1H5 = useRef(null)
    let date2Box = useRef(null)
    let date2P = useRef(null)
    let date2H5 = useRef(null)
    let time1Box = useRef(null)
    let time1P = useRef(null)
    let time1H5 = useRef(null)
    let time2Box = useRef(null)
    let time2P = useRef(null)
    let time2H5 = useRef(null)

    window.addEventListener('click', function (e) {
        if (e.target != date1Box.current && e.target != date1P.current && e.target != date1H5.current) {
            setDate1PickerStatus(false)
        }
        if (e.target != time1Box.current && e.target != time1P.current && e.target != time1H5.current) {
            setTime1PickerStatus(false)
        }
        if (e.target != date2Box.current && e.target != date2P.current && e.target != date2H5.current) {
            setDate2PickerStatus(false)
        }
        if (e.target != time2Box.current && e.target != time2P.current && e.target != time2H5.current) {
            setTime2PickerStatus(false)
        }
        if (e.target != inp1Ref.current && e.target != fromP.current && e.target != fromBox.current) {
            setFromPickerStatus(false)
        }
    })

    return (
        <>
            <div className='filterCar'>
                <div>
                    <div ref={fromBox} className='filter-box2 first-box-car' onClick={() => (inp1Ref.current.focus(), setFromPickerStatus(true), setFromPlaceCar(''))} >
                        <p ref={fromP} >Место получения</p>
                        <input value={fromPlaceCar} onChange={(e) => setFromPlaceCar(e.target.value)} ref={inp1Ref} placeholder='Город или аэропорт' />
                        {fromPickerStatus && window.innerWidth > 540 ? <Car_FromPicker setFromPickerStatus={setFromPickerStatus} /> : null}
                    </div>
                    <div className='dateHotels' >
                        <div ref={date1Box} className={`filter-box2 second-box-car ${date1PickerStatus ? 'border' : null} `} onClick={() => (setDate1PickerStatus(true))} >
                            <p ref={date1P} >Дата получения</p>
                            <h5 ref={date1H5} >{date1Car == '' ? '2025-08-10' : date1Car?.format('YYYY-MM-DD')}</h5>
                            {date1PickerStatus && window.innerWidth > 540 ? <DatePicker1Car setDate1PickerStatus={setDate1PickerStatus} /> : null}
                        </div>
                        <div ref={time1Box} className={`filter-box2 ${time1PickerStatus ? 'border' : null} `} onClick={() => (setTime1PickerStatus(true))} >
                            <p ref={time1P} >Время</p>
                            <h5 ref={time1H5} >{time1Car == '' ? '10:00' : time1Car.format('HH:mm')}</h5>
                            {time1PickerStatus && window.innerWidth > 540 ? <TimePicker1Car setTime1PickerStatus={setTime1PickerStatus} /> : null}
                        </div>
                        <div ref={date2Box} className={`filter-box2 four-box-car ${date2PickerStatus ? 'border' : null} `} onClick={() => (setDate2PickerStatus(true))} >
                            <p ref={date2P}>Дата возврата</p>
                            <h5 ref={date2H5}>{date2Car == '' ? '2025-08-20' : date2Car?.format('YYYY-MM-DD')}</h5>
                            {date2PickerStatus && window.innerWidth > 540 ? <DatePicker2Car setDate2PickerStatus={setDate2PickerStatus} /> : null}
                        </div>
                        <div ref={time2Box} className={`filter-box2 last-box-car ${time2PickerStatus ? 'border' : null} `} onClick={() => (setTime2PickerStatus(true))} >
                            <p ref={time2P} >Время</p>
                            <h5 ref={time2H5} >{time2Car == '' ? '18:00' : time2Car.format('HH:mm')}</h5>
                            {time2PickerStatus && window.innerWidth > 540 ? <TimePicker2Car setTime2PickerStatus={setTime2PickerStatus} /> : null}
                        </div>
                    </div>
                </div>
                <div className='buttonSearch2' >
                    <h3>Найти</h3>
                </div>
            </div>
        </>
    )
}

export default CarFilter